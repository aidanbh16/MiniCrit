![MiniCrit](./public/logo/logo2.png)

MiniCrit Description

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
* Basic page routing (Next.js App Router)
* Sign-up form → database insert: the form submits `FormData` server-side and creates a user record in the PostgreSQL DB after using bcrypt hashing to encrypt the user's password.

## Planned Features
- [ ] Short-lived session via JWT stored in an HttpOnly cookie (auth-aware nav ready)
- [ ] Logout + token rotation and session management hardening
- [ ] Posts feed: basic CRUD for posts (create, list, edit, delete)
- [ ] Updates feed: basic CRUD for update log (create, list, edit, delete)
- [ ] Profile editing (username, description, avatar)
- [ ] Rate limiting & brute-force protection on auth actions
- [ ] Email verification flow

## How to Start

### Prerequisites

Node.js 18.18+ or 20+

PostgreSQL 13+

### Clone & Install
```
git clone https://github.com/aidanbh16/MiniCrit
cd MiniCrit
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
Run this command at least once in your database management tool or cli:
```
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```
Run these files at least once in your database management tool or cli:
```
init_log.sql
init_posts.sql
init_users.sql
```

### Run Dev Server
`npm run dev`