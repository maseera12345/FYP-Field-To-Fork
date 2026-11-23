import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/weather
  Planned endpoints:
   GET /current?city=        current weather
   GET /forecast?city=       daily forecast
   GET /insights?city=       farming tips based on the forecast
*/
router.use(notImplemented("weather"));

export default router;
