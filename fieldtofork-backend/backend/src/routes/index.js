// Combines every module router under /api.
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import usersRoutes from "../modules/users/users.routes.js";
import farmersRoutes from "../modules/farmers/farmers.routes.js";
import cropsRoutes from "../modules/crops/crops.routes.js";
import inventoryRoutes from "../modules/inventory/inventory.routes.js";
import marketplaceRoutes from "../modules/marketplace/marketplace.routes.js";
import cartRoutes from "../modules/cart/cart.routes.js";
import ordersRoutes from "../modules/orders/orders.routes.js";
import chatRoutes from "../modules/chat/chat.routes.js";
import notificationsRoutes from "../modules/notifications/notifications.routes.js";
import diseaseRoutes from "../modules/disease/disease.routes.js";
import mandiRoutes from "../modules/mandi/mandi.routes.js";
import weatherRoutes from "../modules/weather/weather.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js";
import contactRoutes from "../modules/contact/contact.routes.js";

const router = Router();

router.get("/health", (req, res) => res.json({ success: true, message: "FieldToFork API is running" }));

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/farmers", farmersRoutes);
router.use("/crops", cropsRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/marketplace", marketplaceRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", ordersRoutes);
router.use("/chat", chatRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/disease", diseaseRoutes);
router.use("/mandi", mandiRoutes);
router.use("/weather", weatherRoutes);
router.use("/admin", adminRoutes);
router.use("/contact", contactRoutes);

export default router;
