# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 85%**

Planning, Phase 0, Phase 1, Phase 2, Phase 3, and Phase 4 are complete. Phase 4 (AI Roadmap Generator with Google Gemini API) is fully implemented and verified. Phase 5 (Resource Recommendation System) is next.

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
- [x] Phase 2 — Verified backend database connectivity parameters and clean startup.
- [x] Phase 3 — Created SQLAlchemy ORM model `Assessment` in `backend/models/assessment.py`
- [x] Phase 3 — Created Pydantic schemas `AssessmentCreate` and `AssessmentResponse` in `backend/schemas/assessment.py`
- [x] Phase 3 — Created skill assessment computation endpoint `POST /api/assessment` and retrieval endpoint `GET /api/assessment/result`
- [x] Phase 3 — Created step-by-step interactive questionnaire form `AssessmentPage.jsx`
- [x] Phase 3 — Registered `/dashboard/assessment` route in `App.jsx` and updated navigation sidebar in `DashboardLayout.jsx`
- [x] BLANK SCREEN FIX — `supabaseClient.js` now guards `createClient` call; only executes when both env vars are present. `@supabase/supabase-js` v2 throws synchronously on empty URL — this caused the entire React tree to crash, producing a white screen.
- [x] BLANK SCREEN FIX — `ThemeContext.jsx` now wraps `localStorage.getItem` in try/catch inside `useState` initializer.
- [x] BLANK SCREEN FIX — `AuthContext.jsx` now checks `supabaseConfigured` before calling any `supabase.auth.*` methods; sets `loading=false` immediately when unconfigured.
- [x] Phase 4 — Added `gemini_api_key` field and `gemini_configured` property to `backend/config/settings.py`
- [x] Phase 4 — Added `google-generativeai>=0.8.0` to `backend/requirements.txt`
- [x] Phase 4 — Added `GEMINI_API_KEY=` placeholder to `backend/.env`
- [x] Phase 4 — Created `backend/services/ai_service.py` — Gemini prompt engineering, JSON fence-stripping, schema validation, error handling
- [x] Phase 4 — Created `backend/models/roadmap.py` — `Roadmap` SQLAlchemy ORM model
- [x] Phase 4 — Updated `backend/models/__init__.py` — exports `Roadmap`
- [x] Phase 4 — Created `backend/schemas/roadmap.py` — `RoadmapGenerateRequest`, `RoadmapResponse` Pydantic schemas
- [x] Phase 4 — Created `backend/routes/roadmap.py` — `POST /api/roadmap/generate` and `GET /api/roadmap/current`
- [x] Phase 4 — Updated `backend/main.py` to register `roadmap_router` (version bumped to 0.3.0)
- [x] Phase 4 — Updated `frontend/src/services/api.js` — added `api.roadmap.generate()` and `api.roadmap.getCurrent()` helpers
- [x] Phase 4 — Rewrote `frontend/src/pages/RoadmapPage.jsx` — interactive vertical timeline, collapsible phase cards, animated generation loading messages, topic/resource/project chips, full error and empty states
- [x] Phase 4 — Updated `frontend/src/pages/DashboardPage.jsx` — live roadmap fetch, dynamic stats row, phase progress strip, first-phase preview with topic chips
- [x] Phase 4 — `npm run lint` (0 errors) and `npm run build` (2134 modules, 0 errors) verified

# Current Task

**Phase 5 — Resource Recommendation System**

Design and implement the intelligent resource recommendation system that suggests curated learning materials (courses, articles, videos, docs) based on the user's current roadmap phases, skill level, and learning preferences.

# Next Tasks

1. Build a resource catalog schema and seed initial data (Supabase table or JSON fixture)
2. Create `POST /api/resources/recommend` endpoint that maps roadmap topics to resource categories
3. Add resource bookmarking: `POST /api/resources/save` and `GET /api/resources/saved`
4. Build frontend `ResourcesPage.jsx` with card grid, filter tabs by phase, and bookmark toggle
5. Surface top resource recommendations in `DashboardPage.jsx` "Today goal" section

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
| Supabase client guard | Null client when env vars absent | Prevents synchronous throw from `createClient('')` which was causing blank white screen |
| Gemini model | `gemini-1.5-flash` | Fast, cost-efficient for structured JSON generation; sufficient for roadmap prompts |
| Roadmap phases storage | JSON column on `roadmaps` table | Avoids complex normalised phase table; phases are always read/written as a unit |
| Roadmap generation flow | Assessment required before generation | Ensures AI has meaningful skill context; returns 422 with helpful message if missing |

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
│       │                   # DashboardPage, RoadmapPage, ProfilePage, AssessmentPage
│       ├── services/       # API clients (api.js, supabaseClient.js)
│       ├── hooks/          # Custom React hooks
│       ├── utils/          # cn() helper
│       └── assets/         # Static assets (images, fonts)
├── backend/
│   ├── controllers/        # Request handlers
│   ├── routes/             # API route definitions (auth.py, health.py, user.py, assessment.py, roadmap.py)
│   ├── services/           # Business logic + AI integration (ai_service.py)
│   ├── models/             # Database models (SQLAlchemy: user.py, profile.py, assessment.py, roadmap.py)
│   ├── schemas/            # Pydantic schemas (auth.py, user.py, profile.py, assessment.py, roadmap.py)
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
| Backend | FastAPI, Python 3.11+, Pydantic, SQLAlchemy, Uvicorn, python-jose, httpx, google-generativeai |
| Database | PostgreSQL (Supabase) |
| AI | Google Gemini API (`gemini-1.5-flash`) |
| Auth | Supabase Auth + JWT |
| Deployment | Vercel (frontend), Render/Railway (backend) |

See [TECH_STACK.md](./TECH_STACK.md) for details.

# Environment Variables

See [.env.example](../.env.example). Key variables:

- `GEMINI_API_KEY` — Gemini AI API key (required for Phase 4 roadmap generation)
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

**Schema & ORM defined.** SQLAlchemy models `User` (`users`), `Profile` (`profiles`), `Assessment` (`assessments`), and `Roadmap` (`roadmaps`) created in `backend/models/`. Connection factory setup in `backend/config/database.py`.

# Backend Progress

**Phase 4 complete.** All backend components implemented and registered:
- `backend/config/settings.py` — `gemini_api_key` and `gemini_configured` added
- `backend/services/ai_service.py` — Gemini API client, prompt builder, JSON extractor, schema validator
- `backend/models/roadmap.py` — `Roadmap` ORM model with `phases` JSON column
- `backend/schemas/roadmap.py` — `RoadmapGenerateRequest`, `RoadmapResponse`
- `backend/routes/roadmap.py` — `POST /api/roadmap/generate`, `GET /api/roadmap/current`
- `backend/main.py` — roadmap router registered, version bumped to 0.3.0

# Frontend Progress

**Phase 4 complete and verified.** Blank screen fixed. `npm run lint` (0 errors) and `npm run build` (2134 modules, 0 errors) verified.
- `supabaseClient.js` — guarded `createClient` call (blank screen fix)
- `ThemeContext.jsx` — `localStorage` wrapped in try/catch
- `AuthContext.jsx` — all `supabase.auth.*` calls guarded when unconfigured
- `services/api.js` — `api.roadmap.generate()` and `api.roadmap.getCurrent()` added
- `pages/RoadmapPage.jsx` — full rewrite: interactive vertical timeline, animated loading messages, collapsible phase cards with topic/resource/project chips
- `pages/DashboardPage.jsx` — live roadmap fetch, dynamic stats, phase progress strip, first-phase preview

# AI Features Progress

**Phase 4 complete.** `backend/services/ai_service.py` fully implements Gemini API integration with:
- Structured prompt combining user profile, assessment level, tools, projects, and weekly hours
- `gemini-2.5-flash` model with Google GenAI SDK configuration and strict JSON mode
- Markdown fence stripping + regex JSON extraction fallback
- Full schema validation of the returned roadmap structure
- Clear error propagation with user-readable messages

# Known Issues

- Real Supabase credentials must be supplied in `.env` files for live end-to-end Supabase authentication tests.
- `GEMINI_API_KEY` must be set in `backend/.env` for roadmap generation to function.
- `DATABASE_URL` password placeholder (`[YOUR-PASSWORD]`) must be replaced with the actual Supabase DB password.

# Future Improvements

- Vector database for resource matching (post-MVP)
- RAG-based AI mentor
- Mobile application
- AI mock interviews
- Community and peer learning features
- Roadmap progress tracking (mark phases/topics as complete)

# Last Updated

**Date:** July 24, 2026
**Agent Name:** Antigravity
**Current session summary:** Resolved the Supabase API header authentication issue ("No API key found in request") by appending the default `apikey` header value directly in the frontend api client wrapper (`frontend/src/services/api.js`). Added automatic session token refresh on the frontend by fetching the current session from Supabase Client prior to outgoing API calls and handling 401 Unauthorized responses gracefully by redirecting to `/login`. Upgraded the backend AI roadmap generation client (`backend/services/ai_service.py`) to utilize the new Google GenAI SDK (`google-genai`), targeting the `gemini-2.5-flash` model with schema-enforced JSON validation. Verified application compiles and packages with zero errors via linter (`npm run lint`) and production packaging (`npm run build`).
**Summary of changes:** Modified `frontend/src/services/api.js`, `backend/services/ai_service.py`, and `docs/memory.md`.
