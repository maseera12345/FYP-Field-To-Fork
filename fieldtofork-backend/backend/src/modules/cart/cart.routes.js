import { Router } from "express";
import { notImplemented } from "../../utils/notImplemented.js";

const router = Router();

/*
  Mounted at /api/cart
  Planned endpoints:
   GET    /                  current cart (buyer)
   POST   /items             add crop + quantity
   PATCH  /items/:cropId     change quantity
   DELETE /items/:cropId     remove item
   DELETE /                  clear cart
*/
router.use(notImplemented("cart"));

export default router;
