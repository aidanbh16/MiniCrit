# MiniCrit

checking what this lookd like

## Current Tech Stack
TANP
* Framework: Next.js (App Router, Server/Client Components, Server Actions)
* Languages: TypeScript, JavaScript, SQL
* Styling: Tailwind CSS, CSS
* Auth: bcrypt (Password Hashing)
* Database: PostgreSQL, pgAdmin 4 (Management), AWS RDS (Hosting)
* Assets: SVGR (Import .svg files as React components)
* Tools: Git & GitHub

## Current Features
* Responsive navigation with mobile slide-down menu and a dark mode toggle
* Auth foundation: signup + login via Server Actions with server-side validation and bcrypt hashing
* Short-lived session via JWT stored in an HttpOnly cookie (auth-aware nav ready)
* Pages scaffold: Home, About, Updates, Profile
* PostgreSQL integration for user data (schemas/scripts included)
* SVG icon pipeline using SVGR for themable, scalable icons
* Tidied project structure with path aliases and clear separation of concerns (src/app, src/actions, src/lib, src/components, src/vectors)

## Planned Features
- [ ] Logout + token rotation and session management hardening
- [ ] Updates feed: basic CRUD for posts (create, list, edit, delete)
- [ ] Profile editing (display name, bio, avatar)
- [ ] Form UX: inline error messages with useActionState
- [ ] Rate limiting & brute-force protection on auth actions
- [ ] Email verification flow (optional)
- [ ] Accessibility & tests: keyboard nav, ARIA, unit/integration tests

## How to Start

### Prerequisites

Node.js 18.18+ or 20+

PostgreSQL 13+

### Clone & Install
```
git clone <your-repo-url>
cd <repo>
npm i
```

### Environment Setup
Create `.env` in the project root with:
```
DB_HOST=HOST
DB_USER=USER
DB_PASSWORD=PASSWORD
DB_NAME=DBNAME
DB_PORT=PORT
```

### Database Setup (Will automate this later)
Run these files at least once in your database management tool or cli:
```
init_log.sql
init_posts.sql
init_users.sql
```
Run this command at least once in your database management tool or cli:
```
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

### Run Dev Server
`npm run dev`