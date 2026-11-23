// Every successful response has the same shape: { success, message, data }.
export function sendSuccess(res, { statusCode = 200, message = "OK", data = null } = {}) {
  return res.status(statusCode).json({ success: true, message, data });
}

export const sendCreated = (res, message, data) => sendSuccess(res, { statusCode: 201, message, data });
