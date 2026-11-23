import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/orders
  Planned endpoints:
   POST  /                   checkout: cart -> orders, one per farmer (buyer)
   GET   /mine               buyer's orders
   GET   /incoming           farmer's incoming orders
   GET   /:id                order details + timeline
   PATCH /:id/status         farmer: accept / reject / ship / deliver
   PATCH /:id/cancel         buyer cancels with reason
*/
router.use(notImplemented("orders"));

export default router;
