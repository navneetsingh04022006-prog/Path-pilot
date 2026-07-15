# Database Documentation

> Path Pilot database design reference.  
> Database: **PostgreSQL via Supabase**  
> See [architecture.md](./architecture.md) for full system context.

---

## Overview

Path Pilot uses Supabase (managed PostgreSQL) for:

- User profiles and authentication
- Skill assessments
- AI-generated roadmaps
- Learning resources and bookmarks
- Progress tracking
- Project recommendations
- Internship tracking (Phase 9)

**Status:** Schema not implemented — design documented for Phase 0–2.

---

## Entity Relationship Overview

```
users ──┬── roadmaps
        ├── progress
        ├── assessments
        ├── bookmarks
        └── internships

resources (standalone, curated + AI-recommended)
projects (standalone, AI-generated per user context)
```

---

## Tables

### users

Stores core user profile data. Authentication handled by Supabase Auth (`auth.users`).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK, FK → auth.users | User identifier |
| name | VARCHAR(255) | NOT NULL | Full name |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email address |
| education | VARCHAR(100) | | Education level |
| college | VARCHAR(255) | | College name |
| branch | VARCHAR(100) | | Field of study |
| year | INTEGER | | Current year |
| skills | TEXT[] | | Array of skills |
| career_goal | VARCHAR(255) | | Target career |
| experience_level | VARCHAR(50) | | beginner / intermediate / advanced |
| weekly_hours | INTEGER | | Available study hours per week |
| budget_preference | VARCHAR(50) | | free / low / medium / high |
| created_at | TIMESTAMPTZ | DEFAULT now() | |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

---

### roadmaps

AI-generated career learning paths.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Roadmap identifier |
| user_id | UUID | FK → users.id | Owner |
| career | VARCHAR(255) | NOT NULL | Target career |
| phases | JSONB | NOT NULL | Array of learning phases |
| is_active | BOOLEAN | DEFAULT true | Current active roadmap |
| created_at | TIMESTAMPTZ | DEFAULT now() | |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

**phases JSONB structure:**

```json
[
  {
    "title": "Programming Fundamentals",
    "duration": "4 weeks",
    "skills": ["Python", "Git"],
    "topics": ["Variables", "Functions", "OOP"],
    "resources": [],
    "projects": [],
    "status": "pending"
  }
]
```

---

### assessments

Skill assessment results.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Assessment identifier |
| user_id | UUID | FK → users.id | Owner |
| answers | JSONB | | Submitted answers |
| level | VARCHAR(50) | | beginner / intermediate / advanced |
| strengths | TEXT[] | | Identified strengths |
| weak_areas | TEXT[] | | Areas to improve |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

### resources

Curated and AI-recommended learning resources.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Resource identifier |
| title | VARCHAR(255) | NOT NULL | Resource title |
| platform | VARCHAR(100) | | youtube / docs / course / book / github |
| category | VARCHAR(100) | | Skill category |
| difficulty | VARCHAR(50) | | beginner / intermediate / advanced |
| url | TEXT | | External link |
| description | TEXT | | Summary |
| estimated_hours | INTEGER | | Time to complete |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

### bookmarks

User-saved resources.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Bookmark identifier |
| user_id | UUID | FK → users.id | Owner |
| resource_id | UUID | FK → resources.id | Saved resource |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

### progress

Tracks completion of roadmap tasks.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Progress entry identifier |
| user_id | UUID | FK → users.id | Owner |
| roadmap_id | UUID | FK → roadmaps.id | Associated roadmap |
| task | VARCHAR(255) | NOT NULL | Task description |
| phase_index | INTEGER | | Phase in roadmap |
| status | VARCHAR(50) | DEFAULT 'pending' | pending / in_progress / completed |
| completion_date | TIMESTAMPTZ | | When completed |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

### projects

Recommended projects (AI-generated or curated).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Project identifier |
| title | VARCHAR(255) | NOT NULL | Project name |
| description | TEXT | | Project overview |
| skills | TEXT[] | | Required skills |
| technologies | TEXT[] | | Tech stack |
| difficulty | VARCHAR(50) | | beginner / intermediate / advanced |
| estimated_weeks | INTEGER | | Completion time |
| user_id | UUID | FK → users.id, nullable | User-specific if AI-generated |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

### internships (Phase 9)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Entry identifier |
| user_id | UUID | FK → users.id | Owner |
| title | VARCHAR(255) | NOT NULL | Opportunity title |
| company | VARCHAR(255) | | Company name |
| deadline | DATE | | Application deadline |
| requirements | TEXT[] | | Required skills |
| status | VARCHAR(50) | DEFAULT 'saved' | saved / applied / rejected / accepted |
| url | TEXT | | Application link |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

---

## Row Level Security (RLS)

Supabase RLS policies (to be implemented):

- Users can only read/write their own profile, roadmaps, progress, bookmarks, and internships.
- Resources and public projects are readable by authenticated users.
- Service role key used only on backend for admin operations.

---

## Migrations

Migration files will live in:

```
backend/migrations/
```

Use Supabase CLI or SQLAlchemy Alembic for schema versioning (decision pending Phase 0 completion).

---

## Indexes (Planned)

```sql
CREATE INDEX idx_roadmaps_user_id ON roadmaps(user_id);
CREATE INDEX idx_progress_user_id ON progress(user_id);
CREATE INDEX idx_progress_roadmap_id ON progress(roadmap_id);
CREATE INDEX idx_bookmarks_user_id ON bookmarks(user_id);
CREATE INDEX idx_assessments_user_id ON assessments(user_id);
```

---

## Related Documentation

- [API.md](./API.md) — Endpoint reference
- [architecture.md](./architecture.md) — System architecture
- [SETUP.md](./SETUP.md) — Database setup instructions
