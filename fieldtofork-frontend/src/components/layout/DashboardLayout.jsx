import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Bell, Globe, Menu, MessageSquare } from "lucide-react";
import Sidebar from "./Sidebar";
import Badge from "../ui/Badge";
import { dashboardNav, roleLabels } from "../../config/navigation";
import { useLanguage } from "../../context/LanguageContext";

/**
 * role: "farmer" | "buyer" | "admin"
 * Later phases replace the demo user with the logged-in user from AuthContext.
 */
export default function DashboardLayout({ role = "farmer" }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const base = `/${role}`;
  const chatPath = role === "admin" ? base : `${base}/chat`;

  return (
    <div className="flex min-h-screen bg-surface-page">
      <Sidebar items={dashboardNav[role]} open={open} onClose={() => setOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-line bg-surface-page/85 px-4 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-brand-900 hover:bg-brand-50 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <Badge tone="harvest">{roleLabels[role]} panel</Badge>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-brand-50"
              aria-label={lang === "en" ? "Switch to Urdu" : "Switch to English"}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {lang === "en" ? "اردو" : "EN"}
            </button>
            <Link to={`${base}/notifications`} className="relative rounded-lg p-2 text-ink-soft hover:bg-brand-50" aria-label="Notifications">
              <Bell className="h-5 w-5" aria-hidden="true" />
              <span className="absolute end-1.5 top-1.5 h-2 w-2 rounded-full bg-harvest-500" aria-hidden="true" />
            </Link>
            <Link to={chatPath} className="rounded-lg p-2 text-ink-soft hover:bg-brand-50" aria-label="Messages">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              to={`${base}/profile`}
              className="ms-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
              aria-label="Your profile"
            >
              DU
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
