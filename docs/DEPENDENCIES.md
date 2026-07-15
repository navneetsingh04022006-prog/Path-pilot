# Dependencies

> Package and service dependencies for Path Pilot.  
> See [TECH_STACK.md](./TECH_STACK.md) for technology rationale.

---

## Status

Dependencies are **documented but not yet installed**. Installation occurs during Phase 0 completion.

---

## Frontend Dependencies

Location: `frontend/package.json`

### Production

| Package | Purpose | Phase |
|---------|---------|-------|
| react | UI library | 0 |
| react-dom | DOM rendering | 0 |
| react-router-dom | Client-side routing | 1 |
| framer-motion | Animations | 1 |
| recharts | Progress charts | 6 |
| lucide-react | Icons | 1 |

### Development

| Package | Purpose | Phase |
|---------|---------|-------|
| vite | Build tool and dev server | 0 |
| @vitejs/plugin-react | React support for Vite | 0 |
| tailwindcss | Utility-first CSS | 0 |
| postcss | CSS processing | 0 |
| autoprefixer | CSS vendor prefixes | 0 |
| eslint | JavaScript linting | 0 |
| prettier | Code formatting | 0 |
| eslint-plugin-react | React ESLint rules | 0 |
| eslint-plugin-react-hooks | Hooks ESLint rules | 0 |

---

## Backend Dependencies

Location: `backend/requirements.txt`

### Production

| Package | Purpose | Phase |
|---------|---------|-------|
| fastapi | Web framework | 0 |
| uvicorn[standard] | ASGI server | 0 |
| pydantic | Data validation | 0 |
| pydantic-settings | Settings management | 0 |
| sqlalchemy | ORM | 0 |
| python-jose[cryptography] | JWT handling | 2 |
| passlib[bcrypt] | Password hashing | 2 |
| python-multipart | File uploads | 8 |
| httpx | HTTP client (Gemini API) | 4 |
| python-dotenv | Environment variables | 0 |

### Development

| Package | Purpose | Phase |
|---------|---------|-------|
| pytest | Testing | 11 |
| pytest-asyncio | Async test support | 11 |
| ruff | Python linting and formatting | 0 |

---

## External Services

| Service | Purpose | Required From | Free Tier |
|---------|---------|---------------|-----------|
| Supabase | PostgreSQL, Auth, Storage | Phase 0 | Yes |
| Google Gemini API | AI roadmap generation | Phase 4 | Limited free |
| Vercel | Frontend deployment | Phase 12 | Yes |
| Render / Railway | Backend deployment | Phase 12 | Yes |
| GitHub API | Repository analysis | Phase 3+ (optional) | Yes |
| YouTube API | Resource fetching | Phase 5 (optional) | Yes |
| Google Books API | Book recommendations | Phase 5 (optional) | Yes |

---

## Dependency Rules

From [rules.md](./rules.md):

1. Explain why before installing any library.
2. Check if existing libraries can solve the problem.
3. Prefer lightweight solutions.
4. Avoid duplicate, unmaintained, or insecure packages.

---

## Installation Commands (Phase 0)

### Frontend

```bash
cd frontend
npm install react react-dom react-router-dom framer-motion recharts lucide-react
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer eslint prettier
```

### Backend

```bash
cd backend
pip install fastapi uvicorn[standard] pydantic pydantic-settings sqlalchemy httpx python-dotenv
pip install -D pytest pytest-asyncio ruff
```

> Exact versions will be pinned during Phase 0 setup.

---

## Related Documentation

- [TECH_STACK.md](./TECH_STACK.md) — Technology choices
- [SETUP.md](./SETUP.md) — Installation guide
- [rules.md](./rules.md) — Dependency rules
