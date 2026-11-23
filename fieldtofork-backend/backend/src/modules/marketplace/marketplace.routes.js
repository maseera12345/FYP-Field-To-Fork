import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/marketplace
  Planned endpoints:
   GET    /crops             search, filter (category, price, region), sort, paginate
   GET    /categories        categories with counts
   GET    /crops/:id         product details (+ records recently viewed)
   GET    /compare?ids=a,b,c compare up to 3 crops
   GET/POST/DELETE /wishlist (buyer)
   GET    /recently-viewed   (buyer)
*/
router.use(notImplemented("marketplace"));

export default router;
