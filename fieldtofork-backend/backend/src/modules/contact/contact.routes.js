import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/contact
  Planned endpoints:
   POST /                    contact form (name, email, subject, message)
   POST /newsletter          newsletter signup from the footer
*/
router.use(notImplemented("contact"));

export default router;
