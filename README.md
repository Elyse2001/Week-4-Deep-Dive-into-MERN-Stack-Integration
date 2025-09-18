# Week-4-Deep-Dive-into-MERN-Stack-Integration
assignment 
# MERN Blog

## Requirements
- Node.js v18+
- MongoDB running locally or Atlas URI

## Server
cd server
cp .env.example .env
# edit .env to set MONGO_URI and JWT_SECRET
npm install
npm run dev

Server runs on PORT (default 5000). API root: http://localhost:5000/api

## Client
cd client
npm install
# set VITE_API_BASE if your server is not at default
npm run dev

Open http://localhost:5173

## Notes
- Uploaded images are saved to `server/uploads` and served at `http://localhost:5000/uploads/<filename>`
- Authentication uses JWT stored in localStorage (for demo). Consider httpOnly cookies for production.
- Expand features: Cloudinary upload, role-based admin, pagination, rich-text editor, likes, tests.
