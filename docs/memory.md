# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 42%**

Planning and Phase 0 are complete. Phase 1 is in progress — the responsive landing page is built. Authentication UI and dashboard shell are next.

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
- [x] Phase 1 — Shared design tokens (colors, typography, spacing, shadows, radii) in Tailwind config
- [x] Phase 1 — Reusable UI components: Button, Card, Input, Label, Badge, Container
- [x] Phase 1 — Inter font loaded; base typography styles applied
- [x] Phase 1 — `App.jsx` casing fixed for cross-platform compatibility
- [x] Phase 1 — Responsive landing page (hero, how-it-works, features, career paths search, testimonials, CTA)
- [x] Phase 1 — Landing layout components: Navbar, Footer, Section
- [x] Phase 1 — `HomePage` composed in `pages/HomePage.jsx`

# Current Task

**Phase 1 — UI Foundation: Authentication UI**

Build login, registration, and password-recovery pages using existing UI components.

# Next Tasks

1. Build the responsive dashboard shell with navbar, sidebar, and main content area
2. Wire up React Router for page navigation

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
| Primary color | Indigo `#4F46E5` | Professional, trust-oriented; `designs.md` defines roles but not hex values |
| Accent color | Teal `#0D9488` | Progress/achievement indicator per design doc accent role |
| Status colors | Emerald/Amber/Red | Standard semantic mapping for success/warning/error |
| Component structure | `components/ui/` + `components/layout/` | Separates primitives from layout shells |
| Landing page structure | Section-based composition in `components/landing/` | Matches `designs.md` flow; keeps `HomePage` thin |
| Career search (UI only) | Client-side filter on static career path data | No backend yet; avoids fake API calls |

# Folder Structure Notes

```
path-pilot/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ui/         # Button, Card, Input, Label, Badge
│       │   ├── layout/     # Container, Section, Navbar, Footer
│       │   └── landing/    # Hero, HowItWorks, Features, CareerPaths, Testimonials, CTA
│       ├── pages/          # HomePage (landing); Dashboard, Auth pages pending
│       ├── services/       # API clients (api.js, aiService.js)
│       ├── hooks/          # Custom React hooks
│       ├── utils/          # cn() helper
│       └── assets/         # Static assets (images, fonts)
├── backend/
│   ├── controllers/        # Request handlers
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic + AI integration
│   ├── models/             # Database models (SQLAlchemy)
│   ├── middleware/         # Auth, validation, error handling
│   ├── utils/              # Helper functions
│   └── config/             # Environment and app configuration
└── docs/                   # All project documentation (source of truth)
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

**Phase 1 in progress.** Design tokens and reusable UI components are in place. The responsive landing page is complete with hero, how-it-works, features, career path search (client-side filter), testimonials, and CTA sections. Layout components include Navbar (mobile menu), Footer, and Section. `HomePage` renders in `App.jsx`. React Router and auth/dashboard pages are not yet wired. `npm run lint` and `npm run build` pass.

# AI Features Progress

**Not started.** Gemini API integration planned for Phase 4. Prompt templates and JSON response validation not yet designed in code.

# Known Issues

- No Supabase project configured (not required to verify the current backend health endpoint)
- Landing page CTAs (Create My Roadmap, Log in, Explore Path) are UI-only — marked with TODO until React Router is wired
- `docs/designs.md` defines color roles (primary, secondary, accent, status) but does not specify hex values — a concrete palette was chosen for implementation; owner approval recommended before broader UI rollout

# Future Improvements

- Vector database for resource matching (post-MVP)
- RAG-based AI mentor
- Dark mode
- Mobile application
- AI mock interviews
- Community and peer learning features

# Last Updated

**Date:** July 15, 2026  
**Agent Name:** Composer  
**Current session summary:** Built the Phase 1 responsive landing page with all six sections per `designs.md`, plus Navbar, Footer, and career search UI. Verified lint and production build pass.  
**Summary of changes:** Added `components/landing/` section components, `components/layout/Navbar.jsx`, `Footer.jsx`, `Section.jsx`, `pages/HomePage.jsx`, and updated `App.jsx` to render the landing page.
