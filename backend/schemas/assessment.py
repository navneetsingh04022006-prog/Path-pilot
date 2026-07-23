from datetime import datetime
from pydantic import BaseModel, Field


class AssessmentCreate(BaseModel):
    programming_level: str = Field(..., description="Self-reported programming level (Beginner, Intermediate, Advanced)")
    tools_known: list[str] = Field(default_factory=list, description="List of tools/technologies known")
    projects_done: list[str] = Field(default_factory=list, description="List of projects completed")
    fundamentals_score: int = Field(..., ge=0, le=100, description="Score on basic fundamentals quiz (0-100)")


class AssessmentResponse(BaseModel):
    id: int
    user_id: str
    programming_level: str
    tools_known: list[str]
    projects_done: list[str]
    fundamentals_score: int
    generated_level: str
    created_at: datetime

    model_config = {"from_attributes": True}
