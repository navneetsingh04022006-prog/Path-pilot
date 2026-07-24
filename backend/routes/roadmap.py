from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from config.database import get_db
from middleware.auth import CurrentUser
from models.assessment import Assessment
from models.profile import Profile
from models.roadmap import Roadmap
from models.user import User
from schemas.roadmap import RoadmapGenerateRequest, RoadmapResponse
from services import ai_service

router = APIRouter(prefix="/api/roadmap", tags=["roadmap"])


def _ensure_user_exists(db: Session, user_id: str, email: str) -> None:
    user = db.get(User, user_id)
    if not user:
        user = User(id=user_id, email=email)
        db.add(user)
        db.commit()


@router.post(
    "/generate",
    response_model=RoadmapResponse,
    status_code=status.HTTP_201_CREATED,
)
async def generate_roadmap(
    body: RoadmapGenerateRequest,
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> RoadmapResponse:
    """
    Generate a personalised AI roadmap for the current user.

    Fetches the latest assessment and profile data, calls the Gemini AI service,
    stores the result, deactivates previous roadmaps, and returns the new one.
    """
    user_id = current_user["user_id"]
    email = current_user["email"]

    _ensure_user_exists(db, user_id, email)

    # Fetch the latest assessment — required for AI context
    assessment = (
        db.query(Assessment)
        .filter(Assessment.user_id == user_id)
        .order_by(Assessment.created_at.desc())
        .first()
    )
    if not assessment:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Complete the skill assessment before generating a roadmap.",
        )

    # Fetch profile for personalisation (optional — not required)
    profile = db.query(Profile).filter(Profile.user_id == user_id).first()
    full_name: str = profile.full_name if profile and profile.full_name else "the user"

    # Call the Gemini AI service
    try:
        roadmap_data = await ai_service.generate_roadmap(
            career_goal=body.career_goal,
            current_level=assessment.generated_level,
            tools_known=assessment.tools_known,
            projects_done=assessment.projects_done,
            fundamentals_score=assessment.fundamentals_score,
            weekly_hours=body.weekly_hours,
            full_name=full_name,
        )
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=str(exc),
        ) from exc

    # Deactivate all existing roadmaps for this user
    db.query(Roadmap).filter(
        Roadmap.user_id == user_id, Roadmap.is_active == True  # noqa: E712
    ).update({"is_active": False})
    db.commit()

    # Persist the new roadmap
    roadmap = Roadmap(
        user_id=user_id,
        career_goal=roadmap_data["career_goal"],
        summary=roadmap_data["summary"],
        phases=roadmap_data["phases"],
        is_active=True,
    )
    db.add(roadmap)
    db.commit()
    db.refresh(roadmap)
    return roadmap


@router.get("/current", response_model=RoadmapResponse)
def get_current_roadmap(
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> RoadmapResponse:
    """Retrieve the user's currently active roadmap."""
    user_id = current_user["user_id"]

    roadmap = (
        db.query(Roadmap)
        .filter(Roadmap.user_id == user_id, Roadmap.is_active == True)  # noqa: E712
        .order_by(Roadmap.created_at.desc())
        .first()
    )

    if not roadmap:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No active roadmap found. Generate one to get started.",
        )

    return roadmap
