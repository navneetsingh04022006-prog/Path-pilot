from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "PathPilot"
    environment: str = "development"
    backend_host: str = "0.0.0.0"
    backend_port: int = 8000
    cors_origins: list[str] = ["http://localhost:5173"]

    # Database
    database_url: str = ""

    # Supabase
    supabase_url: str = ""
    supabase_anon_key: str = ""
    supabase_service_role_key: str = ""

    # JWT
    jwt_secret: str = "changeme"
    jwt_algorithm: str = "HS256"

    @property
    def is_development(self) -> bool:
        return self.environment == "development"

    @property
    def db_configured(self) -> bool:
        return bool(self.database_url)

    @property
    def supabase_configured(self) -> bool:
        return bool(self.supabase_url and self.supabase_service_role_key)


settings = Settings()
