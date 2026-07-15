# Path Pilot

**AI-powered career guidance platform that creates personalized learning roadmaps for students and professionals.**

Path Pilot analyzes your skills, education, experience, interests, and career goals to generate a complete learning path — including milestones, certifications, projects, resources, and career insights.

---

## Features

### MVP (Hackathon Priority)

- **User Profile** — Capture education, skills, interests, career goals, and availability
- **Skill Assessment** — Evaluate current knowledge and identify strengths and gaps
- **AI Roadmap Generator** — Personalized multi-phase learning paths powered by Gemini AI
- **Resource Recommendations** — Curated courses, videos, docs, books, and GitHub repos
- **Progress Tracking** — Track completed topics, projects, and learning streaks
- **Modern Dashboard** — Clean, responsive interface with progress visualization

### Post-MVP

- Resume Analyzer (PDF upload + AI feedback)
- Internship & Opportunity Tracker
- AI Career Mentor Chat
- GitHub Repository Analysis
- Project Recommendation Engine

---

## Architecture

```
User → React Frontend → FastAPI Backend → Supabase (PostgreSQL) + Gemini API
```

| Layer | Technology | Deployment |
|-------|------------|------------|
| Frontend | React, Vite, Tailwind CSS | Vercel |
| Backend | FastAPI, Python | Render / Railway |
| Database | PostgreSQL via Supabase | Supabase Cloud |
| AI | Google Gemini API | Google Cloud |

See [docs/architecture.md](./docs/architecture.md) for the full system design.

---

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, React Router, Framer Motion, Recharts, Lucide React

**Backend:** FastAPI, Pydantic, SQLAlchemy, Uvicorn

**Database:** PostgreSQL (Supabase)

**AI:** Google Gemini API

See [docs/TECH_STACK.md](./docs/TECH_STACK.md) for details.

---

## Folder Structure

```
path-pilot/
├── frontend/                 # React + Vite application
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level page components
│       ├── services/         # API and AI service clients
│       ├── hooks/            # Custom React hooks
│       ├── utils/            # Utility functions
│       └── assets/           # Static assets
├── backend/                  # FastAPI application
│   ├── controllers/          # Request handlers
│   ├── routes/               # API route definitions
│   ├── services/             # Business logic
│   ├── models/               # Database models
│   ├── middleware/           # Auth and validation
│   ├── utils/                # Helper functions
│   └── config/               # App configuration
├── docs/                     # Project documentation (source of truth)
│   ├── prd.md                # Product requirements
│   ├── architecture.md       # System architecture
│   ├── rules.md              # AI development rules
│   ├── designs.md            # Design system
│   ├── phases.md             # Development phases
│   ├── memory.md             # Persistent AI agent memory
│   └── development-log.md    # Chronological dev log
├── .env.example              # Environment variable template
└── readme.md                 # This file
```

---

## How to Run

> **Status:** Dev servers are not yet configured. Follow [docs/SETUP.md](./docs/SETUP.md) during Phase 0 completion.

### Prerequisites

- Node.js 18+
- Python 3.11+
- Supabase account (free tier)

### Quick Start (After Phase 0)

```bash
# 1. Clone and configure
git clone <repository-url>
cd path-pilot
cp .env.example .env
# Edit .env with your Supabase and Gemini API keys

# 2. Frontend
cd frontend
npm install
npm run dev
# → http://localhost:5173

# 3. Backend (separate terminal)
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
uvicorn main:app --reload
# → http://localhost:8000
```

---

## Development Workflow

1. Read [docs/memory.md](./docs/memory.md) for current project state
2. Check [docs/phases.md](./docs/phases.md) for the active development phase
3. Follow [docs/rules.md](./docs/rules.md) for all coding decisions
4. Make changes on a feature branch
5. Update [docs/memory.md](./docs/memory.md) and [docs/development-log.md](./docs/development-log.md) after every session

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) for the full guide.

---

## Documentation

| Document | Description |
|----------|-------------|
| [PRD](./docs/prd.md) | Product requirements and MVP scope |
| [Architecture](./docs/architecture.md) | System design and API overview |
| [Rules](./docs/rules.md) | Mandatory AI development guidelines |
| [Design System](./docs/designs.md) | UI/UX principles and components |
| [Phases](./docs/phases.md) | Incremental development roadmap |
| [API Reference](./docs/API.md) | REST API endpoint documentation |
| [Database](./docs/DATABASE.md) | Schema design and table reference |
| [Setup Guide](./docs/SETUP.md) | Local development environment |
| [Tech Stack](./docs/TECH_STACK.md) | Technology choices and rationale |
| [Dependencies](./docs/DEPENDENCIES.md) | Package and service dependencies |
| [Contributing](./docs/CONTRIBUTING.md) | Development workflow for humans and AI |
| [Memory](./docs/memory.md) | Persistent project state for AI agents |
| [Development Log](./docs/development-log.md) | Chronological session history |

---

## Contribution Guide

All contributors (human and AI) must:

1. Read [docs/rules.md](./docs/rules.md) before making changes
2. Work within the current development phase
3. Update [docs/memory.md](./docs/memory.md) after every session
4. Never commit secrets or `.env` files

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details.

---

## Roadmap

| Phase | Name | Status |
|-------|------|--------|
| 0 | Project Foundation | 🔄 In Progress |
| 1 | UI Foundation | ⏳ Pending |
| 2 | User Profile System | ⏳ Pending |
| 3 | Skill Assessment Engine | ⏳ Pending |
| 4 | AI Roadmap Generator | ⏳ Pending |
| 5 | Resource Recommendation | ⏳ Pending |
| 6 | Learning Progress System | ⏳ Pending |
| 7 | Project Recommendation | ⏳ Pending |
| 8 | Resume Analyzer | ⏳ Pending |
| 9 | Internship Tracker | ⏳ Pending |
| 10 | AI Career Mentor | ⏳ Pending |
| 11 | Testing & Security | ⏳ Pending |
| 12 | Deployment | ⏳ Pending |

**Hackathon MVP path:** Phase 0 → 1 → 2 → 4 → 6

See [docs/phases.md](./docs/phases.md) for full phase details.

---

## License

TBD

---

**Path Pilot** — *Know what to learn, what to build, and where it leads.*
