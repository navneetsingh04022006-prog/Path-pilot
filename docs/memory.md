# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 20%**

Planning phase is complete. Project initialization scaffolding is complete. Phase 0 remaining: install dependencies and create runnable dev servers. No application feature code has been implemented yet.

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

# Current Task

**Phase 0 — Project Foundation (remaining tasks)**

Repository initialization is complete. Next: initialize frontend (Vite + React + Tailwind) and backend (FastAPI) with working dev servers. No feature implementation yet.

# Next Tasks

1. Initialize frontend with Vite, React, and Tailwind CSS (`npm create vite@latest`)
2. Install approved frontend dependencies (React Router, Framer Motion, Recharts, Lucide)
3. Initialize FastAPI backend with basic health check endpoint
4. Set up Supabase project and configure environment variables
5. Configure ESLint and Prettier for frontend
6. Verify frontend runs at `http://localhost:5173`
7. Verify backend runs at `http://localhost:8000`
8. **Phase 1** — Build UI foundation (Landing Page, Auth UI, Dashboard Layout)

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

**Not started.** Folder structure scaffolded. FastAPI application not yet created. No routes, models, or services implemented.

# Frontend Progress

**Not started.** Folder structure scaffolded. Vite project not yet initialized. No components, pages, or routing implemented.

# AI Features Progress

**Not started.** Gemini API integration planned for Phase 4. Prompt templates and JSON response validation not yet designed in code.

# Known Issues

- Frontend and backend dev servers not yet runnable
- No Supabase project configured
- No ESLint configuration file for frontend yet
- `requirements.txt` dependencies are commented out (intentional — install during Phase 0 completion)

# Future Improvements

- Vector database for resource matching (post-MVP)
- RAG-based AI mentor
- Dark mode
- Mobile application
- AI mock interviews
- Community and peer learning features

# Last Updated

**Date:** July 15, 2026  
**Agent Name:** Lead Software Engineer (Initialization Agent)  
**Summary of changes:** Completed project initialization — scaffolded folder structure, created configuration files, wrote full documentation suite, created memory and development log files, updated README.
