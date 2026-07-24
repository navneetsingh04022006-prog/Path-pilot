from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field


class RoadmapPhase(BaseModel):
    phase_number: int
    title: str
    duration_weeks: int = Field(..., ge=1)
    topics: list[str] = Field(default_factory=list)
    resources: list[str] = Field(default_factory=list)
    projects: list[str] = Field(default_factory=list)


class RoadmapGenerateRequest(BaseModel):
    career_goal: str = Field(..., min_length=3, max_length=200, description="The career goal to generate a roadmap for")
    weekly_hours: int = Field(default=10, ge=1, le=80, description="Hours per week available for study")


class RoadmapResponse(BaseModel):
    id: int
    user_id: str
    career_goal: str
    summary: str
    phases: list[dict[str, Any]]
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}
