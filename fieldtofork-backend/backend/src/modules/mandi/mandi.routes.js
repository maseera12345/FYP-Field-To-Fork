import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/mandi
  Planned endpoints:
   GET /prices?crop=&city=   latest prices
   GET /compare?crop=        same crop across mandis
   GET /history/:crop        price history for charts
*/
router.use(notImplemented("mandi"));

export default router;
