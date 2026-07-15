# Tech Stack

> Technology choices for Path Pilot.  
> All decisions align with [architecture.md](./architecture.md) and [rules.md](./rules.md).

---

## Overview

```
┌─────────────────────────────────────────────────┐
│                   User Browser                   │
└─────────────────────┬───────────────────────────┘
                      │
              React + Vite + Tailwind
                      │
                      ▼
              FastAPI Backend API
           ┌──────────┼──────────┐
           │          │          │
      Supabase    Gemini API   External APIs
     (PostgreSQL)              (GitHub, YouTube)
```

---

## Frontend

| Technology | Version | Role |
|------------|---------|------|
| React | 18+ | UI component library |
| Vite | 5+ | Build tool and dev server |
| Tailwind CSS | 3+ | Utility-first styling |
| React Router | 6+ | Client-side navigation |
| Framer Motion | Latest | UI animations |
| Recharts | Latest | Progress charts and visualizations |
| Lucide React | Latest | Icon system |

**Font:** Inter (primary), Geist or Roboto (alternatives)

**Deployment:** Vercel

---

## Backend

| Technology | Version | Role |
|------------|---------|------|
| Python | 3.11+ | Runtime |
| FastAPI | Latest | REST API framework |
| Uvicorn | Latest | ASGI server |
| Pydantic | 2+ | Request/response validation |
| SQLAlchemy | 2+ | Database ORM |
| httpx | Latest | Async HTTP client for AI APIs |

**Alternative considered:** Node.js + Express (documented in architecture, not selected).

**Decision:** FastAPI preferred per [rules.md](./rules.md) for AI integration and structured JSON validation.

**Deployment:** Render or Railway

---

## Database

| Technology | Role |
|------------|------|
| PostgreSQL | Primary relational database |
| Supabase | Managed PostgreSQL + Auth + Storage |

**Why Supabase:**

- Free tier suitable for hackathon/MVP
- Built-in authentication
- PostgreSQL with RLS
- Easy deployment

---

## AI / ML

| Technology | Role |
|------------|------|
| Google Gemini API | Roadmap generation, resume analysis, mentor chat |

**AI pipeline:**

```
User Input → Prompt Builder → Gemini API → JSON Validation → Database → Frontend
```

All AI responses must be structured JSON (see [rules.md](./rules.md)).

---

## External Integrations

| Service | Phase | Purpose |
|---------|-------|---------|
| Gemini API | 4 | Core AI features |
| GitHub API | 3+ | Repository analysis |
| YouTube API | 5 | Learning resources |
| Google Books API | 5 | Book recommendations |

---

## DevOps & Tooling

| Tool | Purpose |
|------|---------|
| Git + GitHub | Version control |
| ESLint + Prettier | Frontend code quality |
| Ruff | Python linting and formatting |
| EditorConfig | Cross-editor consistency |
| Supabase CLI | Database migrations (planned) |

---

## Explicitly Excluded

Per [rules.md](./rules.md), these are **not allowed**:

| Technology | Reason |
|------------|--------|
| Next.js | Architecture uses Vite |
| Angular / Vue | Architecture uses React |
| Material UI / Bootstrap | Architecture uses Tailwind |
| jQuery | Legacy, not needed |
| Microservices | Over-engineering for MVP |

---

## Environment Variables

See [.env.example](../.env.example) for the full list.

Key variables:

- `GEMINI_API_KEY` — AI generation
- `SUPABASE_URL` / `SUPABASE_ANON_KEY` — Database and auth
- `DATABASE_URL` — Direct PostgreSQL connection
- `VITE_API_URL` — Frontend API base URL

---

## Related Documentation

- [architecture.md](./architecture.md) — Full system architecture
- [DEPENDENCIES.md](./DEPENDENCIES.md) — Package list
- [SETUP.md](./SETUP.md) — Local setup
- [DATABASE.md](./DATABASE.md) — Schema design
