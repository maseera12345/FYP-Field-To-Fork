import {
  LayoutDashboard, Sprout, PlusCircle, ClipboardList, Package, ScanLine, LineChart, CloudSun,
  MessageSquare, User, Store, ShoppingCart, Heart, Users, ShieldCheck, BarChart3, ScrollText,
} from "lucide-react";

// Sidebar items per role. Routes for these pages are built in later phases;
// until then they show the "coming soon" page inside the dashboard layout.
export const dashboardNav = {
  farmer: [
    { label: "Dashboard", to: "/farmer", icon: LayoutDashboard, end: true },
    { label: "My crops", to: "/farmer/crops", icon: Sprout },
    { label: "Add crop", to: "/farmer/crops/new", icon: PlusCircle },
    { label: "Orders", to: "/farmer/orders", icon: ClipboardList },
    { label: "Inventory", to: "/farmer/inventory", icon: Package },
    { label: "Crop doctor (AI)", to: "/farmer/disease-detection", icon: ScanLine },
    { label: "Mandi prices", to: "/farmer/mandi-prices", icon: LineChart },
    { label: "Weather", to: "/farmer/weather", icon: CloudSun },
    { label: "Messages", to: "/farmer/chat", icon: MessageSquare },
    { label: "Profile", to: "/farmer/profile", icon: User },
  ],
  buyer: [
    { label: "Dashboard", to: "/buyer", icon: LayoutDashboard, end: true },
    { label: "Marketplace", to: "/buyer/marketplace", icon: Store },
    { label: "Cart", to: "/buyer/cart", icon: ShoppingCart },
    { label: "Orders", to: "/buyer/orders", icon: ClipboardList },
    { label: "Wishlist", to: "/buyer/wishlist", icon: Heart },
    { label: "Messages", to: "/buyer/chat", icon: MessageSquare },
    { label: "Profile", to: "/buyer/profile", icon: User },
  ],
  admin: [
    { label: "Dashboard", to: "/admin", icon: LayoutDashboard, end: true },
    { label: "Farmers", to: "/admin/farmers", icon: Sprout },
    { label: "Buyers", to: "/admin/buyers", icon: Users },
    { label: "Products", to: "/admin/products", icon: Package },
    { label: "Orders", to: "/admin/orders", icon: ClipboardList },
    { label: "Reports", to: "/admin/reports", icon: BarChart3 },
    { label: "Audit logs", to: "/admin/audit-logs", icon: ScrollText },
    { label: "Moderation", to: "/admin/moderation", icon: ShieldCheck },
  ],
};

export const roleLabels = { farmer: "Farmer", buyer: "Buyer", admin: "Admin" };
