// Shared constants: one place for values used by several modules.

export const ROLES = Object.freeze({ FARMER: "farmer", BUYER: "buyer", ADMIN: "admin" });

export const CROP_CATEGORIES = ["wheat", "rice", "cotton", "maize", "vegetables", "fruits", "other"];

export const ORDER_STATUS = Object.freeze({
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
  REJECTED: "rejected",
});

export const PAYMENT_METHODS = ["cod"]; // online gateways are added later

export const NOTIFICATION_TYPES = ["order", "message", "stock", "system"];
