# 🚀 Modern Portfolio Website (Fullstack Monorepo)

A complete, modern portfolio website built with React, TypeScript, Tailwind CSS (frontend) and Node.js/Express (backend). Features stunning animations, dark/light theme, EmailJS integration, and a RESTful API. This repository contains **both the frontend and backend** in a single monorepo for easy management and deployment.

---

## 📁 Project Structure

```
projects/
├── portfolio-frontend/     # React + TypeScript frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── portfolio-backend/      # Express.js API backend
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md               # This file (root)
```

---

## ✨ Features

### Frontend
- Modern, responsive design (React + Tailwind CSS)
- Dark/Light theme toggle
- Smooth animations (Framer Motion)
- Contact form (EmailJS integration)
- Project and skills showcase
- SEO ready

### Backend
- RESTful API (Express + TypeScript)
- CORS, Helmet, Morgan for security and logging
- Contact form endpoint
- Health check endpoint

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion, EmailJS, Vite
- **Backend:** Node.js, Express, TypeScript, Helmet, CORS, Morgan

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd projects
```

### 2. Frontend Setup
```bash
cd portfolio-frontend
npm install
npm run dev
```
Frontend: [http://localhost:3000](http://localhost:3000) (or as shown in terminal)

### 3. Backend Setup
```bash
cd portfolio-backend
npm install
cp env.example .env # Set up your environment variables
npm run dev
```
Backend: [http://localhost:5000](http://localhost:5000) (or as shown in terminal)

---

## ⚙️ Configuration
- **EmailJS:** Configure your EmailJS credentials in `portfolio-frontend/src/components/Contact.tsx`.
- **Environment Variables:** Set up `.env` in `portfolio-backend` for any secrets or API keys.

---

## 📝 Deployment

### Frontend (Vercel Recommended)
- Connect your repo to [Vercel](https://vercel.com/)
- Set project root to `portfolio-frontend`
- Build command: `npm run build`
- Output directory: `dist`

### Backend (Render Recommended)
- Connect your repo to [Render](https://render.com/)
- Set project root to `portfolio-backend`
- Build command: `npm run build`
- Start command: `npm start`
- Add environment variables as needed

---

## 📡 API Endpoints (Backend)
- `GET /api/health` - Health check
- `GET /api/projects` - Portfolio projects
- `GET /api/skills` - Skills data
- `GET /api/about` - About information
- `POST /api/contact` - Contact form submissions

---

## 📝 Customization
- Update your info in the relevant frontend components (Hero, About, Projects, Skills, Contact, Footer)
- Add your projects and skills in `portfolio-frontend/src/components/Projects.tsx` and `Skills.tsx`
- Update backend data or connect to a real database as needed

---

## 🐛 Troubleshooting
- **EmailJS not working?** Check credentials and template variables.
- **CORS errors?** Ensure backend CORS settings allow your frontend domain.
- **Build errors?** Run `npm install` in both directories and check for TypeScript errors.

---

## 📄 License
MIT License - feel free to use and modify for your own portfolio! 