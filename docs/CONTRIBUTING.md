# Contributing Guide

> Guidelines for human developers and AI agents working on Path Pilot.

---

## Before You Start

**Read these documents in order:**

1. [prd.md](./prd.md) — Product requirements
2. [architecture.md](./architecture.md) — System design
3. [rules.md](./rules.md) — AI development rules (mandatory for AI agents)
4. [designs.md](./designs.md) — Design system
5. [phases.md](./phases.md) — Development phases
6. [memory.md](./memory.md) — Current project state

---

## Development Workflow

### 1. Check Current Phase

Review [memory.md](./memory.md) for the current task and phase. Do not skip ahead unless explicitly approved.

### 2. Create a Branch

```bash
git checkout -b feature/short-description
```

Branch naming:

- `feature/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation only
- `chore/` — Tooling and configuration

### 3. Make Changes

- Follow [rules.md](./rules.md) strictly.
- Modify the smallest number of files required.
- Reuse existing components and utilities.
- Never hardcode secrets — use `.env`.

### 4. Test Your Changes

**Frontend:**

- No build errors
- No console errors
- Responsive on desktop (1920px), tablet (768px), mobile (375px)

**Backend:**

- API returns expected responses
- Input validation works
- Error handling is graceful

### 5. Update Project Memory

After every development session, update:

- [memory.md](./memory.md) — Current status, completed tasks, decisions
- [development-log.md](./development-log.md) — Chronological session log

This is **mandatory** for AI agents.

### 6. Commit

Write clear commit messages:

```
Good: Added user profile form with validation
Bad:  changes
```

Do not commit:

- `.env` files
- `node_modules/`
- API keys or credentials

---

## Code Standards

### Frontend (React)

- Functional components only
- PascalCase for components (`RoadmapCard.jsx`)
- camelCase for functions (`generateRoadmap()`)
- Handle loading, success, and error states for all API calls

### Backend (FastAPI)

- Pydantic models for request/response validation
- Separate routes, controllers, and services
- Structured JSON responses from AI endpoints

### Styling

- Tailwind CSS only (no Material UI, Bootstrap)
- Follow [designs.md](./designs.md) color and typography guidelines
- Mobile-first responsive design

---

## AI Agent Rules

AI agents **must**:

1. Read [rules.md](./rules.md) before any code change.
2. Read the complete file before editing it.
3. Update [memory.md](./memory.md) after every session.
4. Append to [development-log.md](./development-log.md) after every session.
5. Ask for clarification when uncertain — do not guess.

AI agents **must not**:

- Replace the technology stack
- Install packages without explaining why
- Delete project structure
- Implement features outside the current phase
- Create fake functionality without marking it

---

## Pull Request Checklist

- [ ] Follows current development phase
- [ ] No secrets in code
- [ ] Loading/error states handled
- [ ] Responsive design verified
- [ ] [memory.md](./memory.md) updated
- [ ] [development-log.md](./development-log.md) updated
- [ ] No unrelated file changes

---

## Questions?

When uncertain, refer to [rules.md](./rules.md) Section 20:

> A smaller correct implementation is better than a large incorrect implementation.

Ask for clarification rather than guessing.

---

## Related Documentation

- [rules.md](./rules.md) — Full AI development rules
- [phases.md](./phases.md) — What to build and when
- [SETUP.md](./SETUP.md) — Local environment setup
