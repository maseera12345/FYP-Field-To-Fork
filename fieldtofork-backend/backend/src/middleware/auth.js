import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../modules/users/user.model.js";

// protect: the request must carry a valid JWT (Authorization: Bearer <token> or "token" cookie).
export const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.split(" ")[1] : req.cookies?.token;
  if (!token) throw ApiError.unauthorized();

  const decoded = jwt.verify(token, env.JWT_SECRET); // JWT errors are handled in errorHandler
  const user = await User.findById(decoded.id);
  if (!user || !user.isActive) throw ApiError.unauthorized("Account not found or deactivated");

  req.user = user;
  next();
});

// authorize("farmer", "admin"): only these roles may continue. Use after protect.
export const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) return next(ApiError.forbidden());
  next();
};
