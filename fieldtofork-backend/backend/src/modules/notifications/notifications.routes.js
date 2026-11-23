import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/notifications
  Planned endpoints:
   GET   /                   my notifications (paginated)
   PATCH /:id/read           mark one as read
   PATCH /read-all
   GET/PATCH /settings       enable / disable types
*/
router.use(notImplemented("notifications"));

export default router;
