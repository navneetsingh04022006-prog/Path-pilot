# API Documentation

> Path Pilot REST API reference.  
> Base URL (development): `http://localhost:8000`  
> See [architecture.md](./architecture.md) for system design.

---

## Overview

The Path Pilot API serves the React frontend and orchestrates AI generation, database operations, and external service integrations.

**Status:** Not implemented — endpoints defined for Phase 0–2 development.

**Authentication:** JWT tokens via Supabase Auth (planned).

**Response format:** JSON

---

## Authentication

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new user | Planned |
| POST | `/api/auth/login` | Authenticate and receive JWT | Planned |
| POST | `/api/auth/logout` | Invalidate session | Planned |
| POST | `/api/auth/forgot-password` | Request password reset | Planned |

### Register Request (Planned)

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Login Response (Planned)

```json
{
  "token": "jwt-token",
  "user": {
    "id": "uuid",
    "name": "string",
    "email": "string"
  }
}
```

---

## User Profile

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/api/user/profile` | Get current user profile | Required | Planned |
| PUT | `/api/user/profile` | Update user profile | Required | Planned |

### Profile Fields

```json
{
  "name": "string",
  "education": "string",
  "college": "string",
  "branch": "string",
  "year": "number",
  "skills": ["string"],
  "career_interest": "string",
  "experience_level": "beginner | intermediate | advanced",
  "weekly_hours": "number",
  "budget_preference": "free | low | medium | high"
}
```

---

## Skill Assessment

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/api/assessment` | Submit assessment answers | Required | Planned |
| GET | `/api/assessment/result` | Get latest assessment result | Required | Planned |

### Assessment Result (Planned)

```json
{
  "level": "beginner | intermediate | advanced",
  "strengths": ["string"],
  "weak_areas": ["string"],
  "completed_at": "ISO-8601"
}
```

---

## Roadmap

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/api/roadmap/generate` | Generate AI roadmap | Required | Planned |
| GET | `/api/roadmap/:id` | Get roadmap by ID | Required | Planned |
| GET | `/api/roadmap/current` | Get user's active roadmap | Required | Planned |

### Generate Request (Planned)

Uses user profile + assessment data. No body required if profile is complete.

### Roadmap Response (Planned)

```json
{
  "id": "uuid",
  "career": "string",
  "phases": [
    {
      "title": "string",
      "duration": "string",
      "skills": ["string"],
      "topics": ["string"],
      "resources": [],
      "projects": [],
      "status": "pending | in_progress | completed"
    }
  ],
  "created_at": "ISO-8601"
}
```

---

## Resources

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/api/resources` | List recommended resources | Required | Planned |
| POST | `/api/resources/bookmark` | Bookmark a resource | Required | Planned |
| DELETE | `/api/resources/bookmark/:id` | Remove bookmark | Required | Planned |

### Query Parameters (Planned)

- `skill` — Filter by skill
- `difficulty` — beginner | intermediate | advanced
- `platform` — youtube | docs | course | book | github
- `duration` — max hours

---

## Progress

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/api/progress` | Get user progress summary | Required | Planned |
| PUT | `/api/progress/:taskId` | Update task completion status | Required | Planned |

---

## Projects

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/api/projects` | List recommended projects | Required | Planned |
| GET | `/api/projects/:id` | Get project details | Required | Planned |

---

## Resume Analyzer (Phase 8)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/api/resume/analyze` | Upload and analyze resume PDF | Required | Planned |

---

## Internships (Phase 9)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/api/internships` | List saved opportunities | Required | Planned |
| POST | `/api/internships` | Save an opportunity | Required | Planned |
| PUT | `/api/internships/:id` | Update application status | Required | Planned |
| DELETE | `/api/internships/:id` | Remove opportunity | Required | Planned |

---

## AI Mentor (Phase 10)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/api/mentor/chat` | Send message to AI mentor | Required | Planned |

---

## Error Responses

All endpoints return consistent error objects:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

| HTTP Status | Meaning |
|-------------|---------|
| 400 | Bad request / validation error |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not found |
| 422 | Unprocessable entity |
| 500 | Internal server error |

---

## Rate Limiting (Planned)

AI endpoints (`/api/roadmap/generate`, `/api/resume/analyze`, `/api/mentor/chat`) will have rate limits to manage Gemini API costs.

---

## Related Documentation

- [architecture.md](./architecture.md) — System design
- [DATABASE.md](./DATABASE.md) — Schema reference
- [SETUP.md](./SETUP.md) — Local development setup
- [prd.md](./prd.md) — Product requirements
