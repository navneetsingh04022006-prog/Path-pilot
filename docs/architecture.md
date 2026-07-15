# SYSTEM ARCHITECTURE DOCUMENT

# PathPilot Architecture

---

# 1. System Overview

PathPilot follows a modern full-stack architecture.

Architecture:

```
User

↓

Frontend Application

↓

Backend API

↓

AI Engine + Database

↓

External Services
```

---

# 2. Technology Stack

## Frontend

Technology:

* React
* Vite
* Tailwind CSS
* React Router
* Framer Motion
* Recharts

Responsibilities:

* User interface
* Dashboard
* Roadmap visualization
* Progress tracking
* Resource browsing

---

# Backend

Technology:

Option 1:

Node.js + Express

Option 2:

FastAPI + Python

Responsibilities:

* Authentication
* Business logic
* AI communication
* Database operations
* API management

---

# Database

Recommended:

## Supabase

Reasons:

* PostgreSQL database
* Authentication
* Storage
* Free tier
* Easy deployment

Database stores:

* Users
* Skills
* Roadmaps
* Resources
* Progress
* Projects

---

# 3. High Level Architecture

```
                 USER

                  |

                  |

          React Frontend

                  |

                  |

            Backend API

        /          |          \

       /           |           \

 Database     AI Engine     External APIs


                 |

              Gemini API

```

---

# 4. Frontend Architecture

Folder Structure:

```
src/

components/

    Navbar

    Sidebar

    Cards

    Charts


pages/

    Home

    Dashboard

    Assessment

    Roadmap

    Resources

    Profile


services/

    api.js

    aiService.js


hooks/

utils/

assets/

```

---

# 5. Backend Architecture

Folder Structure:

```
backend/

controllers/

routes/

services/

models/

middleware/

utils/

config/

```

---

# API Design

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## User Profile

```
GET /api/user/profile

PUT /api/user/profile
```

---

## Assessment

```
POST /api/assessment

GET /api/assessment/result
```

---

## Roadmap

```
POST /api/roadmap/generate

GET /api/roadmap/:id
```

---

## Resources

```
GET /api/resources

POST /api/resources/bookmark
```

---

# 6. AI Architecture

## AI Pipeline

```
User Information

↓

Prompt Builder

↓

Gemini API

↓

Response Validation

↓

Database Storage

↓

Frontend Display
```

---

# AI Prompt Structure

Input:

```
Student:
CSE 2nd Year

Goal:
Cybersecurity Engineer

Level:
Beginner

Time:
10 hours/week
```

AI Output:

JSON:

```
{
 roadmap:"",
 phases:[],
 resources:[],
 projects:[]
}
```

---

# 7. Database Design

## Users Table

```
id

name

email

branch

skills

goal

experience

time_available
```

---

## Roadmaps Table

```
id

user_id

career

phases

created_at
```

---

## Resources Table

```
id

title

category

difficulty

url
```

---

## Progress Table

```
id

user_id

task

status

completion_date
```

---

## Projects Table

```
id

title

skills

difficulty

description
```

---

# 8. External Integrations

## Gemini API

Purpose:

* Generate roadmaps
* Analyze resumes
* Provide recommendations

---

## GitHub API

Purpose:

* Analyze user repositories
* Recommend projects

---

## YouTube API

Purpose:

* Fetch learning resources

---

## Google Books API

Purpose:

* Recommend books

---

# 9. Authentication Flow

```
User Login

↓

Authentication Provider

↓

JWT Token

↓

Frontend Storage

↓

Protected API Access
```

---

# 10. Deployment Architecture

Frontend:

```
Vercel
```

Backend:

```
Render / Railway
```

Database:

```
Supabase
```

AI:

```
Gemini API
```

---

# 11. Development Roadmap

## Phase 1

Setup:

* Repository
* Frontend
* Backend
* Database

## Phase 2

Core Features:

* Profile
* Assessment
* AI Roadmap

## Phase 3

Enhancements:

* Resume Analyzer
* Internship Tracker
* GitHub Integration

## Phase 4

Final Polish:

* UI improvements
* Testing
* Deployment

---

# 12. Future Architecture Improvements

Possible upgrades:

* Vector database for resource matching
* RAG-based AI mentor
* Personalized recommendation model
* Mobile application
* Microservice architecture
