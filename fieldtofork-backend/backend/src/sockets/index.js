// Socket.io setup: authenticates every connection with the same JWT as the REST API.
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { registerChatHandlers } from "./chat.socket.js";

let io;

export function initSocket(httpServer) {
  io = new Server(httpServer, { cors: { origin: env.CLIENT_URL, credentials: true } });

  // Client connects with: io(API_URL, { auth: { token } })
  io.use((socket, next) => {
    try {
      const decoded = jwt.verify(socket.handshake.auth?.token, env.JWT_SECRET);
      socket.user = { id: decoded.id, role: decoded.role };
      next();
    } catch {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    socket.join(`user:${socket.user.id}`); // private room: lets the server push to one user
    registerChatHandlers(io, socket);
  });

  return io;
}

// Use from services, e.g. getIO().to(`user:${buyerId}`).emit("notification:new", payload)
export const getIO = () => {
  if (!io) throw new Error("Socket.io is not initialised yet");
  return io;
};
