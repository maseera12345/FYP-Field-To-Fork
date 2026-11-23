// Wraps async controllers so thrown errors reach the error handler (no try/catch everywhere).
export const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
