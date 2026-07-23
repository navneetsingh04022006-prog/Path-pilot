from datetime import datetime, timezone
from sqlalchemy import DateTime, Integer, String, JSON, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from config.database import Base


class Assessment(Base):
    __tablename__ = "assessments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(
        String, ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    programming_level: Mapped[str] = mapped_column(String, nullable=False)
    tools_known: Mapped[list] = mapped_column(JSON, nullable=False)
    projects_done: Mapped[list] = mapped_column(JSON, nullable=False)
    fundamentals_score: Mapped[int] = mapped_column(Integer, nullable=False)
    generated_level: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    user = relationship("User", backref="assessments")
