// Express app (no server start here, so it is easy to test).
import path from "path";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import routes from "./routes/index.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } })); // allow the frontend to show uploaded images
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(compression());
if (!env.isProd) app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.resolve(env.UPLOAD_DIR)));

app.use("/api", apiLimiter, routes);

app.use(notFound);
app.use(errorHandler);

export default app;
