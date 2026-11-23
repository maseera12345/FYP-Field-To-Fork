// Throw this anywhere; the error handler turns it into a clean JSON response.
export default class ApiError extends Error {
  constructor(statusCode, message, errors = null) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;
    Error.captureStackTrace?.(this, this.constructor);
  }

  static badRequest(message = "Bad request", errors) { return new ApiError(400, message, errors); }
  static unauthorized(message = "Please log in to continue") { return new ApiError(401, message); }
  static forbidden(message = "You do not have permission to do this") { return new ApiError(403, message); }
  static notFound(message = "Resource not found") { return new ApiError(404, message); }
  static conflict(message = "Resource already exists") { return new ApiError(409, message); }
}
