import { ZodError } from "zod";
import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

export const notFound = (req, res, next) => next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));

// Central error handler: turns any error into { success:false, message, errors? }.
export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  let status = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errors = err.errors || undefined;

  if (err instanceof ZodError) {
    status = 400;
    message = "Validation failed";
    errors = err.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
  } else if (err.name === "ValidationError" && err.errors) {
    status = 400;
    message = "Validation failed";
    errors = Object.values(err.errors).map((e) => ({ field: e.path, message: e.message }));
  } else if (err.name === "CastError") {
    status = 400;
    message = `Invalid ${err.path}`;
  } else if (err.code === 11000) {
    status = 409;
    const field = Object.keys(err.keyValue || {})[0] || "field";
    message = `${field} already exists`;
  } else if (err.name === "JsonWebTokenError") {
    status = 401;
    message = "Invalid token, please log in again";
  } else if (err.name === "TokenExpiredError") {
    status = 401;
    message = "Session expired, please log in again";
  } else if (err.name === "MulterError") {
    status = 400;
  }

  if (status >= 500) console.error(err);

  res.status(status).json({
    success: false,
    message: status >= 500 && env.isProd ? "Internal server error" : message,
    ...(errors && { errors }),
    ...(!env.isProd && status >= 500 && { stack: err.stack }),
  });
}
