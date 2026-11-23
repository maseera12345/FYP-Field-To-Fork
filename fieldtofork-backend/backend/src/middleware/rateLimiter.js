import rateLimit from "express-rate-limit";

const base = { standardHeaders: true, legacyHeaders: false };

// Whole API
export const apiLimiter = rateLimit({ ...base, windowMs: 15 * 60 * 1000, limit: 300, message: { success: false, message: "Too many requests, try again later." } });

// Login / register / forgot-password (apply inside the auth routes)
export const authLimiter = rateLimit({ ...base, windowMs: 15 * 60 * 1000, limit: 20, message: { success: false, message: "Too many attempts, try again in 15 minutes." } });
