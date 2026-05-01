# 🚀 Team Task Manager

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/team-task-manager)
![GitHub stars](https://img.shields.io/github/stars/yourusername/team-task-manager?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/team-task-manager?style=social)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern **Full-Stack Team Task Management Web Application** built using the **MERN Stack**.
This project allows teams to collaborate, manage projects, assign tasks, and track progress efficiently 🚀

Inspired by tools like **Trello** and **Asana**.

---

# 🌟 Features

## 🔐 Authentication

* User Signup
* Secure Login
* JWT Authentication
* Protected Routes

---

## 📁 Project Management

* Create Projects
* Admin Role
* Add/Remove Members
* View Team Projects

---

## ✅ Task Management

* Create Tasks
* Assign Tasks to Users
* Set Priority
* Due Dates
* Update Task Status

  * To Do
  * In Progress
  * Done

---

## 📊 Dashboard

* Total Tasks
* Tasks by Status
* Overdue Tasks
* Team Progress

---

## 👥 Role-Based Access

### Admin

* Manage Users
* Manage Tasks
* Manage Projects

### Member

* View Assigned Tasks
* Update Task Status

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

---

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

---

## Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```bash
team-task-manager/
│
├── backend/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

# 🔥 Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/team-task-manager.git
```

---

# 📦 Backend Setup

```bash
cd backend
npm install
```

---

# 🔐 Create `.env`

Inside backend folder:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/teamtaskmanager

JWT_SECRET=mysecretkey
```

---

# ▶️ Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🚀 Deployment

# ☁️ Backend Deployment (Railway)

Deploy backend using:
Railway

### Environment Variables

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_ATLAS_URI

JWT_SECRET=mysecretkey
```

---

# 🌐 Frontend Deployment (Vercel)

Deploy frontend using:
Vercel

### Environment Variables

```env
VITE_API_URL=https://your-backend-url.up.railway.app
```

---

# 🧠 API Endpoints

## 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/auth/signup` | Register User |
| POST   | `/api/auth/login`  | Login User    |

---

## 📁 Project Routes

| Method | Endpoint        |
| ------ | --------------- |
| POST   | `/api/projects` |
| GET    | `/api/projects` |

---

## ✅ Task Routes

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/api/tasks`     |
| GET    | `/api/tasks`     |
| PUT    | `/api/tasks/:id` |

---

## 📊 Dashboard Routes

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/dashboard` |

---

# 📸 Screenshots

## 🔐 Login Page

* Modern Gradient UI
* Responsive Design

## 📊 Dashboard

* Task Statistics
* Overdue Tasks
* Team Overview

---

# 🎯 Future Improvements

* Drag & Drop Kanban Board
* Real-Time Notifications
* Socket.io Integration
* Team Chat
* Dark Mode
* File Attachments
* Activity Logs
* Email Notifications

---

# 🧪 Testing

```bash
npm test
```

---

# 📦 Build Frontend

```bash
npm run build
```

---

# 👨‍💻 Author

### Developed By

Your Name

GitHub:

```bash
https://github.com/YOUR_USERNAME
```

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork the project
📢 Share with others

---

# 📜 License

This project is licensed under the MIT License.

---

# 🚀 Live Demo

## Frontend

```bash
https://your-frontend-url.vercel.app
```

## Backend

```bash
https://your-backend-url.up.railway.app
```

---

# ❤️ Thank You

Thank you for checking out this project 🚀
Happy Coding 💻
