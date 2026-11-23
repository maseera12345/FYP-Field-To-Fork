# FieldToFork Backend

Node.js + Express + MongoDB (Mongoose) + Socket.io, written as ES modules.

## Run

```bash
cd backend
npm install
copy .env.example .env      # Windows (use cp on Mac/Linux), then edit .env
npm run dev                 # http://localhost:5000/api/health
```

MongoDB must be running locally (the default `MONGO_URI` points to it).

## Folder structure

```
backend/
  server.js                 starts everything: DB -> HTTP server -> Socket.io
  .env.example              copy to .env (never commit .env)
  uploads/                  uploaded images (crops, avatars, scans)
  src/
    app.js                  Express app: security, parsers, routes, error handling
    config/                 env.js (reads .env), db.js (MongoDB), constants.js (roles, statuses)
    middleware/             auth.js (protect, authorize), validate.js, upload.js,
                            rateLimiter.js, errorHandler.js
    utils/                  ApiError, apiResponse, asyncHandler, generateToken, paginate
    routes/index.js         mounts every module under /api
    sockets/                Socket.io: index.js (JWT handshake), chat.socket.js
    modules/                ONE FOLDER PER FEATURE (this is where you work)
      auth/  users/  farmers/  crops/  inventory/  marketplace/  cart/
      orders/  chat/  notifications/  disease/  mandi/  weather/  admin/  contact/
```

## Inside a module

```
modules/crops/
  crop.model.js         Mongoose schema (data shape)
  crops.validation.js   zod schemas (what the request may contain)
  crops.service.js      business logic + database queries
  crops.controller.js   thin handlers: read request -> call service -> send response
  crops.routes.js       URLs + which middleware protects them
```

Request flow: `route -> protect/authorize -> validate -> controller -> service -> model`.

## Response format

```json
{ "success": true,  "message": "Crop created", "data": { } }
{ "success": false, "message": "Validation failed", "errors": [{ "field": "price", "message": "Required" }] }
```

## Build status

| Module | Status |
|---|---|
| Infrastructure (config, middleware, utils, sockets handshake) | done |
| users (User model draft) | draft |
| everything else | stub: routes return 501 until built |

Modules are built one at a time, in this order: auth -> users + farmers -> crops + inventory ->
marketplace -> cart + orders -> chat + notifications -> disease + mandi + weather -> admin.

## Adding a new module

1. Create `src/modules/<name>/` with the five files above.
2. Import its router in `src/routes/index.js` and mount it with `router.use("/<name>", ...)`.
