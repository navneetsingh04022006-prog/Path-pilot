from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from config.database import get_db
from middleware.auth import CurrentUser
from models.profile import Profile
from models.user import User
from schemas.profile import ProfileResponse, ProfileUpdate
from schemas.user import UserResponse

router = APIRouter(prefix="/api/user", tags=["user"])


def _get_or_create_user(db: Session, user_id: str, email: str) -> User:
    """Return the DB user record, creating it if it does not exist."""
    user = db.get(User, user_id)
    if not user:
        user = User(id=user_id, email=email)
        db.add(user)
        db.commit()
        db.refresh(user)
    return user


@router.get("/profile", response_model=ProfileResponse)
def get_profile(
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> ProfileResponse:
    """Return the authenticated user's profile. Creates an empty profile if none exists."""
    user_id: str = current_user["user_id"]
    email: str = current_user["email"]

    user = _get_or_create_user(db, user_id, email)
    profile = db.query(Profile).filter(Profile.user_id == user_id).first()

    if not profile:
        profile = Profile(user_id=user_id)
        db.add(profile)
        db.commit()
        db.refresh(profile)

    return profile


@router.put("/profile", response_model=ProfileResponse)
def update_profile(
    body: ProfileUpdate,
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> ProfileResponse:
    """Upsert the authenticated user's profile with the provided fields."""
    user_id: str = current_user["user_id"]
    email: str = current_user["email"]

    _get_or_create_user(db, user_id, email)
    profile = db.query(Profile).filter(Profile.user_id == user_id).first()

    if not profile:
        profile = Profile(user_id=user_id)
        db.add(profile)

    for field, value in body.model_dump(exclude_unset=True).items():
        setattr(profile, field, value)

    db.commit()
    db.refresh(profile)
    return profile


@router.get("/me", response_model=UserResponse)
def get_me(
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> UserResponse:
    """Return the authenticated user's own record."""
    user_id: str = current_user["user_id"]
    email: str = current_user["email"]
    user = _get_or_create_user(db, user_id, email)
    return user
