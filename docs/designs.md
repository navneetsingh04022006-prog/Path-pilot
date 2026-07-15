# DESIGN SYSTEM DOCUMENT

# PathPilot — AI Career & Learning Roadmap Assistant

Version: 1.0

---

# 1. Design Philosophy

PathPilot should feel like:

> "A premium AI career mentor available to every student."

The design must communicate:

* Trust
* Intelligence
* Progress
* Simplicity
* Personalization

The UI should not look like a generic AI chatbot.

---

# 2. Design Principles

## Principle 1 — Clarity Over Complexity

Users should immediately understand:

* Where they are
* What they need to do next
* Their progress
* Their goals

Avoid overwhelming users with too much information.

---

## Principle 2 — Guided Experience

The application should guide students step-by-step.

Bad:

Showing 100 resources at once.

Good:

"Complete this first → Then learn this → Then build this project."

---

## Principle 3 — Modern but Professional

The design should look suitable for:

* Students
* Recruiters
* Universities
* Career platforms

Avoid:

* Excessive gaming style
* Too many animations
* Flashy colors

---

# 3. Visual Identity

## Brand Personality

PathPilot should feel:

* Intelligent
* Reliable
* Future-focused
* Educational
* Motivating

---

# 4. Color System

## Primary Colors

Primary:

Used for:

* Buttons
* Important actions
* Highlights

Secondary:

Used for:

* Cards
* Background elements

Accent:

Used for:

* Progress indicators
* Achievements
* AI-generated content

---

## Status Colors

Success:

Completed tasks

Warning:

Attention required

Error:

Failed actions

---

# 5. Typography

## Font

Recommended:

* Inter
* Geist
* Roboto

---

## Text Hierarchy

Heading:

Large and bold.

Example:

```
Your Cybersecurity Roadmap
```

Subheading:

Supporting information.

Body:

Readable paragraph text.

---

# 6. Layout System

## Desktop Layout

Structure:

```
------------------------------------------------

Navbar

------------------------------------------------


Sidebar | Main Content


------------------------------------------------
```

---

## Mobile Layout

Must convert to:

```
Navbar

Content

Bottom Navigation
```

---

# 7. Component Design Rules

All components should be:

* Reusable
* Consistent
* Responsive

---

# Cards

Used for:

* Resources
* Projects
* Roadmap phases
* Achievements

Card requirements:

Must contain:

* Title
* Description
* Status
* Action button

Avoid:

* Huge paragraphs
* Too many buttons

---

# Buttons

Types:

Primary Button:

Main action.

Example:

"Generate Roadmap"

Secondary Button:

Alternative action.

Danger Button:

Delete actions.

---

# Forms

Forms should include:

* Labels
* Validation messages
* Helpful hints
* Loading states

Never use:

Placeholder-only forms.

---

# 8. Page Designs

---

# Landing Page

Goal:

Explain value within 5 seconds.

Structure:

```
Hero Section

↓

How It Works

↓

Features

↓

Career Paths

↓

Testimonials

↓

CTA
```

Hero:

Contains:

Title:

"Your AI-powered career roadmap"

Subtitle:

"Know what to learn, what to build, and where it leads."

CTA:

"Create My Roadmap"

---

# Dashboard Design

The dashboard is the main user screen.

Layout:

```
Welcome Section

↓

Current Goal Card

↓

Progress Overview

↓

Today's Tasks

↓

Recommended Resources

↓

Upcoming Opportunities
```

---

# Dashboard Components

## Profile Card

Shows:

* Name
* Career goal
* Current level

Example:

```
Navneet

Goal:
Cybersecurity Engineer

Level:
Intermediate
```

---

## Progress Card

Shows:

* Overall completion
* Skills completed
* Projects completed

Visualization:

Progress bar.

---

## Today's Task Card

Shows:

Example:

```
Today's Goal:

Complete Linux Networking Module

2 hours remaining
```

---

# Roadmap Page Design

This is the most important page.

Use:

Vertical timeline.

Example:

```
START

 |
 |
Phase 1
Programming

 |
 |
Phase 2
Networking

 |
 |
Phase 3
Security

 |
 |
Goal
Internship
```

---

Each phase card contains:

* Duration
* Skills
* Resources
* Projects
* Completion status

---

# Resource Page Design

Layout:

Grid cards.

Each resource card:

```
--------------------------------

Python Networking

YouTube

Beginner

8 hours

Start Learning

--------------------------------
```

Filters:

* Skill
* Difficulty
* Platform
* Duration

---

# Project Recommendation Page

Each project card:

```
--------------------------------

Password Manager

Difficulty:
Intermediate

Skills:

Python
Cryptography

Time:

2 weeks


View Details

--------------------------------
```

---

# Resume Analyzer Design

Flow:

```
Upload Resume

↓

AI Analysis

↓

Score

↓

Improvements
```

Results:

Use sections:

* Strengths
* Weaknesses
* Recommendations

---

# AI Mentor Design

Should NOT look like ChatGPT clone.

Design:

Career assistant panel.

Include:

* Conversation
* Current roadmap context
* Suggested questions

Example:

Quick actions:

"Review my progress"

"What should I learn next?"

"Suggest a project"

---

# 9. Animation Guidelines

Allowed:

* Smooth transitions
* Card hover effects
* Loading animations
* Progress animations

Avoid:

* Large moving backgrounds
* Excessive effects
* Distracting animations

---

# 10. Loading States

Every async operation requires:

Example:

Generating roadmap:

```
Analyzing your skills...

Creating personalized path...

Finding resources...

Almost ready...
```

---

# 11. Empty States

Never show blank screens.

Example:

No roadmap:

```
You haven't created your roadmap yet.

Generate your personalized career path.

[Generate Roadmap]
```

---

# 12. Error UI

Errors should be friendly.

Bad:

```
Error 500
```

Good:

```
We couldn't generate your roadmap.

Please try again.
```

---

# 13. Accessibility Rules

The application must support:

* Keyboard navigation
* Proper contrast
* Readable fonts
* Screen readers where possible

---

# 14. Responsive Requirements

The UI must support:

Desktop:

1920px

Laptop:

1366px

Tablet:

768px

Mobile:

375px

---

# 15. Dashboard Design Goal

The user should answer these questions instantly:

1. Where am I?

2. What should I learn next?

3. How much progress have I made?

4. What opportunities are available?

---

# 16. Design Restrictions

AI must NOT create:

❌ Generic chatbot interface

❌ Copy of existing platforms

❌ Overcrowded dashboards

❌ Random color themes

❌ Inconsistent components

❌ Desktop-only layouts

---

# 17. Premium Features

If time allows:

Add:

* Dark mode
* AI-generated illustrations
* Skill graphs
* Career path animations
* Achievement badges
* Learning streaks
* Interactive timeline

---

# Final Design Goal

PathPilot should feel like:

"LinkedIn Learning + Roadmap.sh + Personal AI Mentor combined into one intelligent career navigation platform."

---

END OF DESIGN DOCUMENT
