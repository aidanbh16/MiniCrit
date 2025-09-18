<picture>
  <source srcset="./public/logo/logo2.png" media="(prefers-color-scheme: dark)">
  <img src="./public/logo/logo1.png">
</picture>

This project is currently a work in progress as of September 2025.

## Current Tech Stack
* Framework: Next.js (App Router, Server/Client Components, Server Actions)
* Languages: TypeScript, JavaScript, SQL
* Styling: Tailwind CSS, CSS
* Auth: bcrypt (Password Hashing)
* Database: PostgreSQL, pgAdmin 4 (Management), AWS RDS (Hosting)
* Assets: SVGR (Import .svg files as React components)
* Tools: Git & GitHub

## Current Features
- Sign-up Page
  - Sign-up form
    - Username input
    - Email input
    - Password input
    - Confirm password input
  - Runs sign-up test cases
  - Encrypts password
  - Creates user in database
  - Redirects to login page

## Planned Features
- [ ] Home Page
  - [ ] Posts
    - Create posts
      - Title
      - Text
      - Tags
      - Img/video
      - Likes/dislikes
      - Comments
        - Text
        - Delete comments
      - Delete posts
    - [ ] Filter posts by tags
      - Quick Filter component
      - Filter list component
    - [ ] Sort by
      - Sort by likes/dislikes
      - Sort by newest
- [ ] Sign-in Page
  - [ ] Sign-in form
    - Username input
    - Password input
  - [ ] Compares input to database
  - [ ] Generates JWT token
  - [ ] Redirects to Home Page
- [x] Sign-up Page
  - [x] Sign-up form
    - Username input
    - Email input
    - Password input
    - Confirm password input
  - [x] Runs sign-up test cases
  - [x] Encrypts password
  - [x] Creates user in database
  - [x] Redirects to login page
- [ ] Profile Page
  - [ ] Generating profile
    - Profile picture
    - Username
    - Bio
    - Preferred tags
    - Own posts
      - See posts
      - Delete posts
  - [ ] Editing profile
    - Profile picture
    - Username
    - Bio
    - Preferred tags
- [ ] About Page
  - [ ] About Project
  - [ ] About me
  - [ ] Contact
    - [ ] Email Microservice
      - Username input
        - Token: pull username
        - No token: input username
      - Email input
      - Text
      - Attach files
- [ ] Updates Page
  - [ ] Update log of app

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