from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from config.settings import settings


class Base(DeclarativeBase):
    pass


def _make_engine():
    if not settings.db_configured:
        return None
    return create_engine(
        settings.database_url,
        pool_pre_ping=True,
        echo=settings.is_development,
    )


engine = _make_engine()

SessionLocal: sessionmaker | None = (
    sessionmaker(bind=engine, autocommit=False, autoflush=False)
    if engine
    else None
)


def get_db() -> Generator[Session, None, None]:
    if SessionLocal is None:
        raise RuntimeError(
            "DATABASE_URL is not configured. "
            "Set it in backend/.env to enable database access."
        )
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
