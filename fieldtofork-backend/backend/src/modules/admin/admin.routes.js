import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/admin
  Planned endpoints:
   GET   /stats              dashboard counts and charts
   GET   /users              list farmers / buyers (filter, search)
   PATCH /users/:id/status   activate / deactivate
   GET   /crops              all listings
   PATCH /crops/:id/moderate approve / reject / remove
   GET   /orders             all orders
   GET   /reports            sales, user and product reports
   GET   /audit-logs         admin activity log
*/
router.use(notImplemented("admin"));

export default router;
