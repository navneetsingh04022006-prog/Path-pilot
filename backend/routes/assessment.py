from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from config.database import get_db
from middleware.auth import CurrentUser
from models.assessment import Assessment
from models.user import User
from schemas.assessment import AssessmentCreate, AssessmentResponse

router = APIRouter(prefix="/api/assessment", tags=["assessment"])


def _calculate_level(programming_level: str, tools: list[str], projects: list[str], score: int) -> str:
    # A simple deterministic rule to calculate final skill level
    # Score max is 100.
    points = 0
    
    # Fundamentals score contribution
    if score >= 80:
        points += 3
    elif score >= 50:
        points += 2
    else:
        points += 1
        
    # Tools/Projects count contribution
    total_practical = len(tools) + len(projects)
    if total_practical >= 6:
        points += 3
    elif total_practical >= 3:
        points += 2
    else:
        points += 1
        
    # Self-reported level contribution
    if programming_level.lower() == "advanced":
        points += 3
    elif programming_level.lower() == "intermediate":
        points += 2
    else:
        points += 1
        
    # Evaluate aggregate points
    if points >= 8:
        return "Advanced"
    elif points >= 5:
        return "Intermediate"
    else:
        return "Beginner"


def _ensure_user_exists(db: Session, user_id: str, email: str) -> None:
    user = db.get(User, user_id)
    if not user:
        user = User(id=user_id, email=email)
        db.add(user)
        db.commit()


@router.post("", response_model=AssessmentResponse, status_code=status.HTTP_201_CREATED)
def create_assessment(
    body: AssessmentCreate,
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> AssessmentResponse:
    """Calculate and store user skill level assessment."""
    user_id = current_user["user_id"]
    email = current_user["email"]
    
    _ensure_user_exists(db, user_id, email)
    
    generated_level = _calculate_level(
        body.programming_level,
        body.tools_known,
        body.projects_done,
        body.fundamentals_score,
    )
    
    assessment = Assessment(
        user_id=user_id,
        programming_level=body.programming_level,
        tools_known=body.tools_known,
        projects_done=body.projects_done,
        fundamentals_score=body.fundamentals_score,
        generated_level=generated_level,
    )
    
    db.add(assessment)
    db.commit()
    db.refresh(assessment)
    return assessment


@router.get("/result", response_model=AssessmentResponse)
def get_assessment_result(
    current_user: CurrentUser,
    db: Session = Depends(get_db),
) -> AssessmentResponse:
    """Fetch the latest assessment result for the current user."""
    user_id = current_user["user_id"]
    
    assessment = (
        db.query(Assessment)
        .filter(Assessment.user_id == user_id)
        .order_by(Assessment.created_at.desc())
        .first()
    )
    
    if not assessment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No assessment results found for this user.",
        )
        
    return assessment
