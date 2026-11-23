import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/disease
  Planned endpoints:
   POST /detect              upload leaf image -> AI service -> result (farmer)
   GET  /history             my previous scans
   GET  /history/:id         one scan result
*/
router.use(notImplemented("disease"));

export default router;
