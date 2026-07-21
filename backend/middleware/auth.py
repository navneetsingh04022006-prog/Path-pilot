from typing import Annotated

import httpx
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt

from config.settings import settings

_bearer_scheme = HTTPBearer(auto_error=False)


def _decode_jwt(token: str) -> dict:
    """
    Attempt to decode a Supabase-issued JWT.

    Supabase signs JWTs with the project's JWT secret (HS256).
    If SUPABASE_URL is set we could also verify against JWKS, but
    decoding with the shared secret is the standard approach for
    service-side verification.
    """
    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret,
            algorithms=[settings.jwt_algorithm],
            options={"verify_aud": False},
        )
        return payload
    except JWTError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token.",
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc


async def get_current_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(_bearer_scheme)],
) -> dict:
    """
    FastAPI dependency that validates the bearer token and returns
    the decoded JWT payload as a dict.

    Raises 401 if the header is missing or the token is invalid.
    """
    if not credentials:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication credentials were not provided.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    payload = _decode_jwt(credentials.credentials)

    user_id: str | None = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token payload missing subject claim.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return {
        "user_id": user_id,
        "email": payload.get("email", ""),
        "role": payload.get("role", "authenticated"),
    }


# Convenience type alias used by route handlers
CurrentUser = Annotated[dict, Depends(get_current_user)]
