from sqlalchemy import JSON, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from config.database import Base


class Profile(Base):
    __tablename__ = "profiles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(
        String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False
    )

    education: Mapped[str | None] = mapped_column(String, nullable=True)
    college: Mapped[str | None] = mapped_column(String, nullable=True)
    branch: Mapped[str | None] = mapped_column(String, nullable=True)
    year: Mapped[str | None] = mapped_column(String, nullable=True)

    # Stored as a JSON array of strings
    skills: Mapped[list | None] = mapped_column(JSON, nullable=True)

    career_interest: Mapped[str | None] = mapped_column(String, nullable=True)
    experience_level: Mapped[str | None] = mapped_column(String, nullable=True)
    weekly_hours: Mapped[int | None] = mapped_column(Integer, nullable=True)
    budget_pref: Mapped[str | None] = mapped_column(String, nullable=True)
    bio: Mapped[str | None] = mapped_column(String, nullable=True)

    user: Mapped["User"] = relationship(  # noqa: F821
        "User", back_populates="profile"
    )
