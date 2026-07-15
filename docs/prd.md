# PROJECT REQUIREMENTS DOCUMENT

# Project Name

**PathPilot — AI Career & Learning Roadmap Assistant**

---

# 1. Overview

## Problem Statement

Students often struggle to find the right learning path for their desired career. Resources are scattered across YouTube, courses, documentation, GitHub, and certification platforms.

Students usually don't know:

* What skills they need
* What order they should learn skills in
* Which resources are trustworthy
* Which projects they should build
* Which certifications matter
* How to prepare for internships

---

# Solution

PathPilot is an AI-powered career guidance platform that creates personalized learning roadmaps based on:

* Student background
* Current skills
* Career goals
* Available learning time
* Budget constraints
* Learning preferences

The platform acts as a personal AI career mentor.

---

# 2. Target Users

## Primary Users

### College Students

* Engineering students
* Computer science students
* Beginners entering technology fields
* Students preparing for internships

## Secondary Users

* Fresh graduates
* Career switchers
* Self-learners

---

# 3. Core Features

# 3.1 User Profile System

Users should be able to provide:

* Name
* Education level
* Branch
* Current year
* Skills
* Interests
* Career goal
* Weekly available time
* Budget preference

Example:

```
Branch:
Computer Science

Goal:
Cybersecurity Engineer

Experience:
Beginner

Time:
10 hours/week
```

---

# 3.2 Skill Assessment

The system should evaluate:

* Current knowledge
* Technical skills
* Experience level

Assessment areas:

* Programming
* Computer fundamentals
* Tools
* Projects
* Certifications

Output:

```
Current Level:
Beginner

Strengths:
Python

Weak Areas:
Networking
Linux
Security Fundamentals
```

---

# 3.3 AI Roadmap Generator

The main feature.

The AI should generate:

* Learning phases
* Weekly goals
* Topics
* Resources
* Projects
* Certifications

Example:

```
Phase 1:
Programming Fundamentals

Phase 2:
Computer Networks

Phase 3:
Cybersecurity Basics

Phase 4:
Security Projects

Phase 5:
Internship Preparation
```

---

# 3.4 Resource Recommendation System

Resources should include:

* Documentation
* YouTube videos
* Free courses
* Books
* GitHub repositories
* Practice platforms

Each resource should contain:

* Title
* Platform
* Difficulty
* Estimated time
* Link
* Description

---

# 3.5 Project Recommendation Engine

The system recommends projects according to skill level.

Example:

Beginner:

* Portfolio Website
* Password Generator

Intermediate:

* Vulnerability Scanner
* Chat Application

Advanced:

* SIEM Dashboard
* Malware Analysis Tool

Each project contains:

* Description
* Skills required
* Technologies
* Difficulty
* Estimated completion time

---

# 3.6 Weekly Learning Planner

The system converts goals into tasks.

Example:

```
Goal:
Learn Networking

Week 1:

Monday:
TCP/IP Basics

Tuesday:
OSI Model

Wednesday:
Packet Analysis

Thursday:
Wireshark Practice
```

---

# 3.7 Progress Tracking

Users can track:

* Completed topics
* Completed projects
* Learning streak
* Skill progress

Visualization:

* Progress bars
* Charts
* Timeline

---

# 3.8 Resume Analyzer

Users upload resume PDF.

System analyzes:

* Missing skills
* Weak descriptions
* Project quality
* ATS compatibility
* Improvement suggestions

---

# 3.9 Internship Tracker

Users can save:

* Internship opportunities
* Deadlines
* Requirements
* Application status

---

# 4. Non Functional Requirements

## Performance

* Pages should load quickly
* AI responses should show loading states
* Database queries should be optimized

---

## Security

* Secure authentication
* Protected user data
* Safe file uploads
* API keys stored securely

---

## Scalability

The system should support:

* Multiple users
* Multiple career paths
* Additional AI models

---

## Usability

The application should have:

* Clean UI
* Mobile responsiveness
* Simple navigation

---

# 5. MVP Requirements

For hackathon version:

Must Have:

✅ User profile

✅ Skill assessment

✅ AI roadmap generation

✅ Resource recommendation

✅ Progress tracking

✅ Modern dashboard

Nice To Have:

* Resume analyzer
* Internship tracker
* AI mentor chat
* GitHub analysis

---

# 6. Success Criteria

The project is successful if:

* A student can create a personalized roadmap within minutes.
* Recommendations are relevant to their goals.
* Users understand exactly what to learn next.
* Progress can be tracked over time.

---

# 7. Future Improvements

* AI voice mentor
* Mobile application
* College-specific resources
* Community features
* Peer learning groups
* AI mock interviews
* Certification tracking
