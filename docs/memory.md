# Project Overview

Path Pilot (PathPilot) is an AI-powered career guidance platform that helps students and professionals discover personalized career roadmaps. The platform analyzes current skills, education, work experience, interests, and career goals to generate personalized learning roadmaps, milestone tracking, certifications, project recommendations, learning resources, career insights, and skill gap analysis.

# Current Status

**Overall Progress: 62%**

Planning and Phase 0 are complete. Phase 1 is complete — the responsive landing page with Aceternity ContainerScroll animation, layout spacing fixes, and dark/light theme switching is built, React Router is wired, auth pages are built, and the dashboard shell is in place. Phase 2 prep is next.

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
- [x] Phase 1 — Dashboard shell: `DashboardLayout.jsx` (responsive fixed sidebar, mobile drawer, top header)
- [x] Phase 1 — Placeholder dashboard views: `DashboardPage.jsx`, `RoadmapPage.jsx`, `ProfilePage.jsx`
- [x] Phase 1 — Navbar, Footer, HeroSection, CtaSection updated to use React Router `Link`
- [x] Phase 1 — Light/Dark Theme Switching: `ThemeContext.jsx` created, toggle button (Sun/Moon) added to Navbar, dark mode support in Card/Input/Label/Navbar/Hero
- [x] Phase 1 — ContainerScroll layout & spacing fixed to prevent title/CTA text overlap; high-quality dashboard mockup asset updated
- [x] Phase 1 — `npm run lint` and `npm run build` verified — 0 errors, 2087 modules, built in 14.54s

# Current Task

**Phase 2 Prep — Backend API & Supabase Auth Integration**

Connect authentication (Supabase Auth + JWT) to the existing auth pages. Implement protected route guard in the frontend. Stand up user profile and roadmap API endpoints in FastAPI.

# Next Tasks

1. Implement Supabase Auth (sign-up, sign-in, forgot-password) wired to `LoginPage`, `RegisterPage`, `ForgotPasswordPage`
2. Create `AuthContext` (or Zustand store) to hold session state across the app
3. Add `ProtectedRoute` component that redirects unauthenticated users to `/login`
4. Build FastAPI user-profile endpoint (`GET /users/me`, `PATCH /users/me`)
5. Build FastAPI roadmap endpoint skeleton (`POST /roadmaps/generate`, `GET /roadmaps/:id`)

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
| Auth pages style | Centered card on gradient background | Follows `designs.md` trust/simplicity principle |
| Dashboard sidebar | Fixed 240px desktop, slide-in drawer mobile | Matches `designs.md` layout spec |
| Auth guard | Deferred to Phase 2 | Backend auth not yet available; placeholder `// TODO` left |
| Interactive Hero Card | Aceternity ContainerScroll | Modern scroll animation adapted from TSX to JSX using framer-motion |
| Theme Management | ThemeContext (`localStorage` + `dark` class) | Clean React context supporting system preference and manual Sun/Moon toggle |

# Folder Structure Notes

```
path-pilot/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ui/         # Button, Card, Input, Label, Badge, ContainerScroll
│       │   ├── layout/     # Container, Section, Navbar, Footer, DashboardLayout
│       │   └── landing/    # HeroSection, HowItWorks, Features, CareerPaths, Testimonials, CTA
│       ├── context/        # ThemeContext
│       ├── pages/          # HomePage, LoginPage, RegisterPage, ForgotPasswordPage
│       │                   # DashboardPage, RoadmapPage, ProfilePage
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
| Frontend | React, Vite, Tailwind CSS, React Router v7, Framer Motion, Recharts, Lucide React |
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

**Phase 1 complete.** Design tokens and reusable UI components are in place. The responsive landing page is complete with all six sections, featuring an Aceternity `ContainerScroll` hero mockup with layout fixes and dark mode support. React Router v7 is wired in `App.jsx`. Auth pages (`LoginPage`, `RegisterPage`, `ForgotPasswordPage`) are built with form validation and dark mode. Light/Dark mode switcher is implemented in `Navbar.jsx` using `ThemeContext.jsx`. The dashboard shell (`DashboardLayout`) provides a fixed desktop sidebar, mobile slide-in drawer, and top header with profile/notification controls. Placeholder dashboard views (`DashboardPage`, `RoadmapPage`, `ProfilePage`) are routed under `/dashboard/*`. Navbar, Footer, HeroSection, and CtaSection CTAs use React Router `Link`. `npm run lint` and `npm run build` both pass with 0 errors.

# AI Features Progress

**Not started.** Gemini API integration planned for Phase 4. Prompt templates and JSON response validation not yet designed in code.

# Known Issues

- No Supabase project configured (not required until Phase 2)
- Auth pages submit handlers are stubs (`// TODO: call auth service`) — auth guard deferred to Phase 2
- Dashboard profile displays hard-coded placeholder data — real user data comes with backend integration

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
**Current session summary:** Fixed ContainerScroll layout overlap issue, updated dashboard preview asset URL, created `ThemeContext.jsx` for Light/Dark mode switching with `localStorage` persistence, added Sun/Moon toggle button to `Navbar.jsx`, added dark mode styling across components, updated `memory.md`, and verified `npm run lint` (0 errors) and `npm run build` (2087 modules, 14.54s).  
**Summary of changes:** Updated `components/ui/ContainerScroll.jsx`, `components/landing/HeroSection.jsx`, `components/layout/Navbar.jsx`, `components/ui/Card.jsx`, `components/ui/Input.jsx`, `components/ui/Label.jsx`, `pages/HomePage.jsx`, `main.jsx`; created `context/ThemeContext.jsx`; updated `docs/memory.md`.
