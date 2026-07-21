# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 75%**

Planning, Phase 0, Phase 1, and Phase 2 are complete. Phase 2 (Database Schema, Supabase Auth Integration, and Backend User/Profile APIs) is fully implemented and verified. Phase 3 (Skill Assessment Engine) is next.

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
- [x] Phase 1 — Reusable UI components: Button, Card, Input, Label, Badge, Container, ContainerScroll
- [x] Phase 1 — Inter font loaded; base typography styles applied
- [x] Phase 1 — `App.jsx` casing fixed for cross-platform compatibility
- [x] Phase 1 — Responsive landing page (hero with scroll animation, how-it-works, features, career paths search, testimonials, CTA)
- [x] Phase 1 — Landing layout components: Navbar, Footer, Section
- [x] Phase 1 — `HomePage` composed in `pages/HomePage.jsx`
- [x] Phase 1 — React Router (`react-router-dom` v7) wired in `App.jsx` with `BrowserRouter`, `Routes`, `Route`
- [x] Phase 1 — Auth pages: `LoginPage.jsx`, `RegisterPage.jsx`, `ForgotPasswordPage.jsx`
- [x] Phase 1 — Dashboard shell: `DashboardLayout.jsx` (responsive fixed sidebar, mobile drawer, top header with theme toggle + profile dropdown)
- [x] Phase 1 — Placeholder dashboard views: `DashboardPage.jsx`, `RoadmapPage.jsx`, `ProfilePage.jsx`
- [x] Phase 1 — Navbar, Footer, HeroSection, CtaSection updated to use React Router `Link`
- [x] Phase 1 — Light/Dark Theme Switching refactored: `ThemeContext.jsx` applies `dark` class directly to `document.documentElement`, supports manual toggle & `localStorage` persistence.
- [x] Phase 1 — Dark mode aesthetics overhauled across all components (`Card`, `Input`, `Label`, `Navbar`, `DashboardLayout`, Auth Pages, and Dashboard Views) with high-contrast slate colors and subtle glassmorphism.
- [x] Phase 1 — `npm run lint` and `npm run build` verified — 0 errors, 2087 modules, built in 13.44s
- [x] Phase 2 — Configured SQLAlchemy database engine and session dependency in `backend/config/database.py`
- [x] Phase 2 — Created SQLAlchemy ORM models (`User`, `Profile`) in `backend/models/`
- [x] Phase 2 — Created Pydantic request/response validation schemas in `backend/schemas/` (`auth.py`, `user.py`, `profile.py`)
- [x] Phase 2 — Created JWT Auth middleware (`get_current_user`) in `backend/middleware/auth.py`
- [x] Phase 2 — Created Auth routes (`/api/auth/register`, `/api/auth/login`) in `backend/routes/auth.py`
- [x] Phase 2 — Created protected User/Profile routes (`GET/PUT /api/user/profile`, `GET /api/user/me`) in `backend/routes/user.py`
- [x] Phase 2 — Installed `@supabase/supabase-js` and configured frontend services (`supabaseClient.js`, `api.js`)
- [x] Phase 2 — Created `AuthContext` and `ProtectedRoute` component for route guarding
- [x] Phase 2 — Wired `LoginPage.jsx` and `RegisterPage.jsx` to real Supabase/backend auth calls
- [x] Phase 2 — Wired `ProfilePage.jsx` to fetch and update user profile data via backend API
- [x] Phase 2 — Verified backend startup & routes, frontend `npm run lint` (0 errors), and `npm run build` (2133 modules, 6.35s)

# Current Task

**Phase 3 — Skill Assessment Engine**

Design and implement the Skill Assessment engine to evaluate user proficiency, identify skill gaps, and prepare inputs for AI roadmap generation.

# Next Tasks

1. Build assessment data models and schemas in backend
2. Implement backend assessment endpoints (`POST /api/assessment`, `GET /api/assessment/result`)
3. Build frontend assessment questionnaire and results components
4. Wire frontend assessment pages to backend API
5. Prepare assessment outputs for Phase 4 (AI Roadmap Generation)

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
| Router | React Router v7 (`react-router-dom`) | Already listed in tech stack; was pre-installed |
| Auth pages style | Centered card on gradient background with full dark mode polish | Follows `designs.md` trust/simplicity principle |
| Dashboard sidebar | Fixed 240px desktop, slide-in drawer mobile | Matches `designs.md` layout spec |
| Interactive Hero Card | Aceternity ContainerScroll | Modern scroll animation adapted from TSX to JSX using framer-motion |
| Theme Management | ThemeContext (`localStorage` + `dark` class on html root) | Clean React context supporting system preference and manual Sun/Moon toggle |
| Auth context & guard | AuthContext + ProtectedRoute | Full session sync and automatic redirect to /login for protected shell |

# Folder Structure Notes

```
path-pilot/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ui/         # Button, Card, Input, Label, Badge, ContainerScroll
│       │   ├── layout/     # Container, Section, Navbar, Footer, DashboardLayout, ProtectedRoute
│       │   └── landing/    # HeroSection, HowItWorks, Features, CareerPaths, Testimonials, CTA
│       ├── context/        # ThemeContext, AuthContext
│       ├── pages/          # HomePage, LoginPage, RegisterPage, ForgotPasswordPage
│       │                   # DashboardPage, RoadmapPage, ProfilePage
│       ├── services/       # API clients (api.js, supabaseClient.js, aiService.js)
│       ├── hooks/          # Custom React hooks
│       ├── utils/          # cn() helper
│       └── assets/         # Static assets (images, fonts)
├── backend/
│   ├── controllers/        # Request handlers
│   ├── routes/             # API route definitions (auth.py, health.py, user.py)
│   ├── services/           # Business logic + AI integration
│   ├── models/             # Database models (SQLAlchemy: user.py, profile.py)
│   ├── schemas/            # Pydantic schemas (auth.py, user.py, profile.py)
│   ├── middleware/         # Auth (auth.py), validation, error handling
│   ├── utils/              # Helper functions
│   └── config/             # Environment and app configuration (database.py, settings.py)
└── docs/                   # All project documentation (source of truth)
```

Empty directories contain `.gitkeep` files so Git tracks the structure.

# Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Tailwind CSS, React Router v7, Framer Motion, Recharts, Lucide React, @supabase/supabase-js |
| Backend | FastAPI, Python 3.11+, Pydantic, SQLAlchemy, Uvicorn, python-jose, httpx |
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
- `VITE_SUPABASE_URL` — Frontend Supabase URL
- `VITE_SUPABASE_ANON_KEY` — Frontend Supabase Anon Key

# Database Status

**Schema & ORM defined.** SQLAlchemy models `User` (`users`) and `Profile` (`profiles`) created in `backend/models/`. Connection factory setup in `backend/config/database.py`.

# Backend Progress

**Phase 2 complete and verified.** `backend/config/database.py`, models (`User`, `Profile`), schemas (`auth`, `user`, `profile`), auth middleware (`get_current_user`), and routes (`/api/auth/register`, `/api/auth/login`, `/api/user/profile`, `/api/user/me`) are fully implemented and integrated in `backend/main.py`. Local imports and route definitions verified.

# Frontend Progress

**Phase 2 complete.** `@supabase/supabase-js` installed. Created `services/supabaseClient.js`, `services/api.js` bearer token wrapper, `context/AuthContext.jsx`, and `components/layout/ProtectedRoute.jsx`. Form submit handlers in `LoginPage.jsx` and `RegisterPage.jsx` wired to authentication. `ProfilePage.jsx` updated to fetch and update user profile state with loading and error indicators. `App.jsx` wrapped in `AuthProvider` and dashboard protected. `npm run lint` (0 errors) and `npm run build` (2133 modules, 6.35s) verified.

# AI Features Progress

**Not started.** Gemini API integration planned for Phase 4. Prompt templates and JSON response validation not yet designed in code.

# Known Issues

- Real Supabase credentials must be supplied in `.env` files for live end-to-end Supabase authentication tests.

# Future Improvements

- Vector database for resource matching (post-MVP)
- RAG-based AI mentor
- Dark mode
- Mobile application
- AI mock interviews
- Community and peer learning features

# Last Updated

**Date:** July 21, 2026  
**Agent Name:** Antigravity  
**Current session summary:** Completed Phase 2 (Database Schema, Supabase Auth Integration, Backend User/Profile APIs). Implemented database models, Pydantic schemas, auth middleware, FastAPI auth/user routes, frontend Supabase integration, AuthContext, ProtectedRoute, and updated Login, Register, and Profile pages. Verified frontend lint/build and backend route registration.  
**Summary of changes:** Added `backend/config/database.py`, `backend/models/user.py`, `backend/models/profile.py`, `backend/models/__init__.py`, `backend/schemas/auth.py`, `backend/schemas/user.py`, `backend/schemas/profile.py`, `backend/schemas/__init__.py`, `backend/middleware/auth.py`, `backend/middleware/__init__.py`, `backend/routes/auth.py`, `backend/routes/user.py`, `frontend/src/services/supabaseClient.js`, `frontend/src/services/api.js`, `frontend/src/context/AuthContext.jsx`, `frontend/src/components/layout/ProtectedRoute.jsx`. Updated `backend/requirements.txt`, `backend/config/settings.py`, `backend/main.py`, `frontend/src/pages/LoginPage.jsx`, `frontend/src/pages/RegisterPage.jsx`, `frontend/src/pages/ProfilePage.jsx`, `frontend/src/App.jsx`, `frontend/src/main.jsx`, `frontend/.env`, `backend/.env`, and `docs/memory.md`.
