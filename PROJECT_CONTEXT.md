# Dormix - Smart Hostel & PG Management Platform

## Current Status

Frontend Completed ✅

Backend In Progress 🚧

### Backend Progress

- ✅ Express Server
- ✅ MongoDB Atlas Connection
- ✅ Admin Authentication (Register/Login)
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Student CRUD
- ✅ Room CRUD
- ✅ Global Error Handling
- 🚧 Student ↔ Room Relationship (Next)

---

# Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- cors
- multer

---

# Theme

Accent Color

#C8D9E6

Used for

- Active Sidebar
- Icon Backgrounds
- Cards
- Buttons
- Highlights

---

# Project Structure

frontend/

src/

components/

- dashboard/
- admin/

pages/

- Home
- StudentLogin
- AdminLogin
- StudentDashboard
- AdminLayout

pages/student/

- Dashboard
- Room
- Fees
- Complaints
- Notices
- Profile

pages/admin/

- Dashboard
- Students
- Rooms
- Fees
- Complaints
- Notices
- Wardens
- Settings

routes/

- AppRoutes.jsx

backend/

config/

controllers/

middleware/

models/

routes/

utils/

uploads/

server.js

---

# Student Module

Completed ✅

### Frontend

- Login UI
- Responsive Dashboard
- Sidebar
- Topbar
- Dashboard
- Room
- Fees
- Complaints
- Notices
- Profile

### Backend

- Create Student
- Get All Students
- Get Student By ID
- Update Student
- Delete Student

---

# Admin Module

Completed ✅

### Frontend

- Responsive Layout
- Sidebar
- Topbar
- Dashboard
- Students
- Rooms
- Fees
- Complaints
- Notices
- Wardens
- Settings

### Backend

- Register Admin
- Login Admin
- JWT Authentication
- Protected Profile Route

---

# Room Module

Completed ✅

### Backend

- Create Room
- Get All Rooms
- Get Room By ID
- Update Room
- Delete Room

---

# Current Architecture

Frontend

Student Dashboard

→ Sidebar

→ Topbar

→ Outlet

Admin

Admin Layout

→ Sidebar

→ Topbar

→ Outlet

Backend

Routes

→ Authentication Middleware

→ Controllers

→ Models

→ MongoDB

---

# UI Style

Clean SaaS Design

Rounded Cards

Small Fonts

Light Gray Background

White Cards

Responsive

Minimal

---

# Coding Rules

Always provide complete file replacements for major files.

Explain backend concepts before code.

Keep frontend explanations short.

Test every API using Thunder Client.

Commit after every completed milestone.

Push to GitHub after every commit.

---

# Backend Roadmap

## Completed ✅

1. Express Server
2. MongoDB Atlas
3. Admin Authentication
4. JWT Authentication
5. Student CRUD
6. Room CRUD
7. Global Error Handling

## Remaining 🚧

8. Student ↔ Room Relationship
9. Fee APIs
10. Complaint APIs
11. Notice APIs
12. Warden APIs
13. Dashboard Statistics APIs
14. Image Upload (Multer)
15. Search, Filter & Pagination
16. Connect Frontend
17. Deployment

---

# Current Milestone

Student ↔ Room Relationship

Next Step

Learn ObjectId, References & Populate

Implement Room Assignment System