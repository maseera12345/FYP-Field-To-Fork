import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/inventory
  Planned endpoints:
   GET   /                   stock overview for the farmer
   PATCH /:cropId/stock      update quantity (writes a history entry)
   GET   /:cropId/history    stock history
   GET   /alerts             low stock / out of stock
*/
router.use(notImplemented("inventory"));

export default router;
