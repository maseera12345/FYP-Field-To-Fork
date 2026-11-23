import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/auth
  Planned endpoints:
   POST /register            create farmer or buyer account (admin cannot self-register)
   POST /login               email + password -> JWT
   POST /logout              clear auth cookie
   POST /forgot-password     send reset link / OTP
   POST /reset-password/:token
   POST /verify-email        verify OTP / link
   GET  /me                  current logged-in user (protect)
*/
router.use(notImplemented("auth"));

export default router;
