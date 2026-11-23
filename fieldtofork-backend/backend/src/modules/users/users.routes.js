import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/users
  Planned endpoints:
   GET   /me                 own profile (protect)
   PATCH /me                 update name, phone, address
   PATCH /me/avatar          upload profile picture
   PATCH /me/password        change password
   GET/PATCH /me/settings    account + notification preferences
*/
router.use(notImplemented("users"));

export default router;
