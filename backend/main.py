from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.settings import settings
from routes.health import router as health_router
from routes.auth import router as auth_router
from routes.user import router as user_router
from routes.assessment import router as assessment_router
from routes.roadmap import router as roadmap_router

app = FastAPI(
    title="Path Pilot API",
    version="0.3.0",
    docs_url="/docs" if settings.is_development else None,
    redoc_url="/redoc" if settings.is_development else None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(assessment_router)
app.include_router(roadmap_router)


@app.get("/")
def root() -> dict[str, str]:
    return {"service": settings.app_name, "status": "running"}

