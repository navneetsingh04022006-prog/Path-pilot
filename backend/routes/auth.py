import httpx
from fastapi import APIRouter, HTTPException, status

from config.settings import settings
from schemas.auth import LoginRequest, RegisterRequest, TokenResponse

router = APIRouter(prefix="/api/auth", tags=["auth"])

_SUPABASE_AUTH = "{url}/auth/v1"


def _auth_url(path: str) -> str:
    base = settings.supabase_url.rstrip("/")
    return f"{base}/auth/v1{path}"


def _supabase_headers() -> dict[str, str]:
    return {
        "apikey": settings.supabase_anon_key,
        "Content-Type": "application/json",
    }


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register(body: RegisterRequest) -> TokenResponse:
    """
    Create a new Supabase auth user and return a session token.
    """
    if not settings.supabase_configured:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Supabase is not configured on this server.",
        )

    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.post(
            _auth_url("/signup"),
            headers=_supabase_headers(),
            json={
                "email": body.email,
                "password": body.password,
                "data": {
                    "full_name": body.full_name,
                    "career_interest": body.career_interest,
                },
            },
        )

    if resp.status_code not in (200, 201):
        error_msg = resp.json().get("error_description") or resp.json().get("msg") or "Registration failed."
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=error_msg)

    data = resp.json()
    session = data.get("session") or {}
    user = data.get("user") or {}

    return TokenResponse(
        access_token=session.get("access_token", ""),
        user_id=user.get("id", ""),
        email=user.get("email", body.email),
        full_name=(user.get("user_metadata") or {}).get("full_name"),
    )


@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest) -> TokenResponse:
    """
    Sign in an existing user via Supabase and return a session token.
    """
    if not settings.supabase_configured:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Supabase is not configured on this server.",
        )

    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.post(
            _auth_url("/token?grant_type=password"),
            headers=_supabase_headers(),
            json={"email": body.email, "password": body.password},
        )

    if resp.status_code != 200:
        error_msg = resp.json().get("error_description") or resp.json().get("msg") or "Invalid credentials."
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=error_msg)

    data = resp.json()
    user = data.get("user") or {}

    return TokenResponse(
        access_token=data.get("access_token", ""),
        user_id=user.get("id", ""),
        email=user.get("email", body.email),
        full_name=(user.get("user_metadata") or {}).get("full_name"),
    )
