import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/crops
  Planned endpoints:
   GET    /mine              farmer's own listings (farmer)
   POST   /                  create listing with images (farmer)
   GET    /:id               listing details
   PATCH  /:id               edit listing (owner)
   DELETE /:id               remove listing (owner)
*/
router.use(notImplemented("crops"));

export default router;
