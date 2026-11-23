import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/farmers
  Planned endpoints:
   GET /me                   own farm profile (farmer)
   PUT /me                   create / update farm profile
   GET /:id                  public farmer page (ratings, crops)
*/
router.use(notImplemented("farmers"));

export default router;
