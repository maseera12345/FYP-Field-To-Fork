import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/chat
  Planned endpoints:
   GET  /conversations                 my conversations
   POST /conversations                 start a chat with a farmer / buyer
   GET  /conversations/:id/messages    message history (paginated)
   Live messaging happens over Socket.io: see src/sockets/chat.socket.js
*/
router.use(notImplemented("chat"));

export default router;
