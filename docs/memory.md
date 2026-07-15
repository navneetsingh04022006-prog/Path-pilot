# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 35%**

Planning and Phase 0 are complete. The React/Vite frontend and FastAPI backend are installed, runnable, and verified locally. Phase 1 is now the active milestone.

# Completed

- [x] Product Requirements Document (PRD)
- [x] System Architecture Document
- [x] AI Development Rules
- [x] Design System Document
- [x] Development Phases Document
- [x] Git repository initialized
- [x] Basic `.gitignore` created
- [x] Project initialization — folder structure scaffolded
- [x] Configuration files created (`.env.example`, `.editorconfig`, Prettier, VS Code settings)
- [x] Documentation suite created (`API.md`, `DATABASE.md`, `SETUP.md`, `CONTRIBUTING.md`, `DEPENDENCIES.md`, `TECH_STACK.md`)
- [x] Persistent memory file created (`memory.md`)
- [x] Development log created (`development-log.md`)
- [x] README updated with comprehensive project information
- [x] Frontend Vite application initialized
- [x] Approved frontend dependencies installed
- [x] Frontend ESLint configuration created
- [x] Frontend lint and production build verified
- [x] FastAPI application scaffolded with a health check endpoint
- [x] Python 3.11 installed for backend development
- [x] Project-local backend environment and declared requirements installed
- [x] Backend root and health endpoints verified locally
- [x] Frontend Vite dev server verified locally
- [x] Phase 0 — Project Foundation complete

# Current Task

**Phase 1 — UI Foundation**

Build the user-facing application foundation: landing page, authentication UI, dashboard layout, reusable design components, and navigation. No product features have been implemented yet.

# Next Tasks

1. Establish the shared design tokens and reusable UI components
2. Build the responsive landing page
3. Build login, registration, and password-recovery UI
4. Build the responsive dashboard shell with navigation

# Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Frontend framework | React + Vite + Tailwind | Defined in architecture and rules |
| Backend framework | FastAPI (Python) | Preferred in rules; better AI/JSON integration |
| Database | PostgreSQL via Supabase | Free tier, built-in auth, easy deployment |
| AI provider | Google Gemini API | Defined in architecture |
| Frontend deployment | Vercel | Defined in architecture |
| Backend deployment | Render / Railway | Defined in architecture |
| Font | Inter | Defined in design system |
| Auth strategy | Supabase Auth + JWT | Defined in architecture |

# Folder Structure Notes

```
path-pilot/
├── frontend/
│   └── src/
│       ├── components/   # Reusable UI (Navbar, Sidebar, Cards, Charts)
│       ├── pages/        # Route pages (Home, Dashboard, Assessment, etc.)
│       ├── services/     # API clients (api.js, aiService.js)
│       ├── hooks/        # Custom React hooks
│       ├── utils/        # Helper functions
│       └── assets/       # Static assets (images, fonts)
├── backend/
│   ├── controllers/      # Request handlers
│   ├── routes/           # API route definitions
│   ├── services/         # Business logic + AI integration
│   ├── models/           # Database models (SQLAlchemy)
│   ├── middleware/       # Auth, validation, error handling
│   ├── utils/            # Helper functions
│   └── config/           # Environment and app configuration
└── docs/                 # All project documentation (source of truth)
```

Empty directories contain `.gitkeep` files so Git tracks the structure.

# Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Tailwind CSS, React Router, Framer Motion, Recharts, Lucide React |
| Backend | FastAPI, Python 3.11+, Pydantic, SQLAlchemy, Uvicorn |
| Database | PostgreSQL (Supabase) |
| AI | Google Gemini API |
| Auth | Supabase Auth + JWT |
| Deployment | Vercel (frontend), Render/Railway (backend) |

See [TECH_STACK.md](./TECH_STACK.md) for details.

# Environment Variables

See [.env.example](../.env.example). Key variables:

- `GEMINI_API_KEY` — Gemini AI API key
- `DATABASE_URL` — PostgreSQL connection string
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_ANON_KEY` — Supabase public key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role (backend only)
- `SECRET_KEY` — Backend application secret
- `JWT_SECRET` — JWT signing secret
- `VITE_API_URL` — Frontend API base URL

# Database Status

**Not started.** Schema designed in [DATABASE.md](./DATABASE.md). Tables planned: users, roadmaps, assessments, resources, bookmarks, progress, projects, internships.

# Backend Progress

**Foundation complete and verified.** Python 3.11 and the requirements in `backend/requirements.txt` are installed in `backend/.venv`. `backend/main.py` configures FastAPI and CORS, and `backend/routes/health.py` provides `GET /health`. Live checks returned `{"service":"PathPilot","status":"running"}` from `/` and `{"status":"healthy"}` from `/health`. No models or feature services have been implemented.

# Frontend Progress

**Foundation complete and verified.** The Vite + React + Tailwind application is initialized, its declared dependencies are installed, and both `npm run lint --prefix frontend` and `npm run build --prefix frontend` pass. The placeholder app has no product components, pages, or routing yet.

# AI Features Progress

**Not started.** Gemini API integration planned for Phase 4. Prompt templates and JSON response validation not yet designed in code.

# Known Issues

- No Supabase project configured (not required to verify the current backend health endpoint)

# Future Improvements

- Vector database for resource matching (post-MVP)
- RAG-based AI mentor
- Dark mode
- Mobile application
- AI mock interviews
- Community and peer learning features

# Last Updated

**Date:** July 15, 2026  
**Agent Name:** Codex
**Current session summary:** Reconciled the memory with the repository, installed the declared frontend and backend dependencies, installed Python 3.11, and verified the frontend and backend locally. Phase 0 is complete and Phase 1 is ready to begin.
**Summary of changes:** Completed project initialization — scaffolded folder structure, created configuration files, wrote full documentation suite, created memory and development log files, updated README.
