# FieldToFork: project layout

Copy `backend/` and `ai-service/` into the project root, next to `package.json` and `src/`:

```
fieldtofork-frontend/        (project root = your Git repo)
  package.json, src/, public/, vite.config.js ...   <- frontend (React + Vite), unchanged
  backend/                   Node + Express + MongoDB + Socket.io  (module-wise)
  ai-service/                Python + FastAPI + TensorFlow MobileNetV2
```

Run in three terminals:

```
npm run dev                                   (project root)  -> http://localhost:5173
cd backend && npm run dev                                     -> http://localhost:5000/api/health
cd ai-service && uvicorn app.main:app --reload --port 8000
```

Backend and ai-service have their own README.md with details.
