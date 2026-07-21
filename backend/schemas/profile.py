from pydantic import BaseModel


class ProfileUpdate(BaseModel):
    education: str | None = None
    college: str | None = None
    branch: str | None = None
    year: str | None = None
    skills: list[str] | None = None
    career_interest: str | None = None
    experience_level: str | None = None
    weekly_hours: int | None = None
    budget_pref: str | None = None
    bio: str | None = None


class ProfileResponse(BaseModel):
    id: int
    user_id: str
    education: str | None
    college: str | None
    branch: str | None
    year: str | None
    skills: list[str] | None
    career_interest: str | None
    experience_level: str | None
    weekly_hours: int | None
    budget_pref: str | None
    bio: str | None

    model_config = {"from_attributes": True}
