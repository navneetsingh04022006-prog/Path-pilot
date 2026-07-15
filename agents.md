# AGENTS.md

# Path Pilot - AI Agent Instructions

This repository is developed collaboratively by multiple AI coding assistants and the repository owner.

Every AI agent must follow these instructions before making any change.

---

# Rule 1 — Read Before Coding

Before writing or modifying any code:

1. Read this AGENTS.md file.
2. Read docs/memory.md.
3. If memory.md references additional documentation, read those files.
4. Inspect the existing codebase.
5. Continue from the current state.

Never restart the project.

Never regenerate completed work.

---

# Rule 2 — Source of Truth

The project's primary documentation is located in:

docs/

This folder contains:

- prd.md
- architecture.md
- design.md
- rules.md
- phases.md

These documents define the project.

Do not contradict them.

---

# Rule 3 — Documentation Policy

The existing files inside docs are considered permanent project documentation.

Never:

- rename them
- delete them
- reorganize them
- rewrite them

The ONLY file inside docs that may be modified is:

docs/memory.md

If additional documentation is required, create it outside the docs folder.

Example:

project-docs/
internal-docs/
developer-notes/

---

# Rule 4 — Memory File

Every development session MUST update:

docs/memory.md

It must always contain:

- Current Progress
- Completed Tasks
- Current Task
- Next Tasks
- Important Decisions
- Backend Progress
- Frontend Progress
- Database Progress
- AI Progress
- Known Issues
- Future Improvements
- Last Updated
- AI Agent Name

Never leave memory.md outdated.

---

# Rule 5 — Task Scope

Complete ONLY the assigned milestone.

Never begin future milestones unless explicitly instructed.

Avoid feature creep.

---

# Rule 6 — Code Quality

Write production-quality code.

Follow:

- SOLID principles
- DRY
- KISS
- Clean Architecture
- Modular Design

Avoid unnecessary complexity.

Readable code is preferred over clever code.

---

# Rule 7 — Architecture

Follow architecture.md exactly.

Do not invent new architecture patterns.

Do not replace technologies unless instructed.

---

# Rule 8 — Dependencies

Before installing any dependency ask:

Is it necessary?

Prefer built-in solutions whenever practical.

Avoid dependency bloat.

Never install packages that are unused.

---

# Rule 9 — Folder Structure

Respect the existing folder structure.

Do not move folders without good reason.

Do not create duplicate folders.

---

# Rule 10 — Naming

Use consistent naming.

Variables:

camelCase

Functions:

camelCase

Components:

PascalCase

Classes:

PascalCase

Constants:

UPPER_SNAKE_CASE

Files:

Follow the project's naming conventions.

---

# Rule 11 — Comments

Avoid unnecessary comments.

Code should explain itself.

Comment only:

- complex algorithms
- architectural decisions
- important business logic

---

# Rule 12 — Error Handling

Never ignore errors.

Provide meaningful messages.

Fail gracefully.

Avoid silent failures.

---

# Rule 13 — Security

Never expose:

- API keys
- secrets
- tokens
- passwords

Use environment variables.

Never hardcode credentials.

---

# Rule 14 — Git

Keep changes focused.

One milestone per commit.

Suggested commit style:

feat:
fix:
refactor:
docs:
test:
chore:

---

# Rule 15 — Testing

Whenever a feature is completed:

- verify it builds
- verify it runs
- check for obvious errors

Do not claim code works without verification.

---

# Rule 16 — AI Collaboration

This project is developed by multiple AI agents.

Assume another AI will continue after you.

Leave the repository in a clean state.

Avoid half-finished work whenever possible.

Document important decisions.

---

# Rule 17 — Performance

Avoid premature optimization.

But avoid obvious inefficiencies.

Think about scalability.

---

# Rule 18 — Before Finishing

Before ending any session:

✅ Update docs/memory.md

✅ Verify project builds (if applicable)

✅ Summarize changes

✅ List remaining work

---

# Rule 19 — Never Do These

Never:

- rewrite the whole project
- regenerate existing code
- delete working code
- modify docs except memory.md
- create placeholder implementations without marking them
- change architecture without approval

---

# Rule 20 — Project Goal

Every change should move Path Pilot toward becoming an AI-powered career guidance platform that is:

- scalable
- maintainable
- modular
- secure
- production-ready

Prefer long-term maintainability over short-term speed.

---

End of AGENTS.md
