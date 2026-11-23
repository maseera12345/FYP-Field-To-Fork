import { Link, NavLink } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import Logo from "../brand/Logo";
import { cn } from "../../utils/cn";

export default function Sidebar({ items, open, onClose }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-brand-900/50 lg:hidden" onClick={onClose} aria-hidden="true" />}
      <aside
        className={cn(
          "fixed inset-y-0 start-0 z-50 flex w-64 flex-col bg-brand-900 text-[#CFE3DF] transition-transform duration-300",
          "lg:sticky lg:top-0 lg:h-screen lg:shrink-0",
          open ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full lg:translate-x-0 lg:rtl:translate-x-0"
        )}
        aria-label="Dashboard navigation"
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link to="/" aria-label="FieldToFork home">
            <Logo theme="dark" size={34} />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-brand-600 text-white" : "hover:bg-white/10 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute inset-y-2 start-0 w-1 rounded-full bg-harvest-500" aria-hidden="true" />}
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-3">
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-5 w-5" aria-hidden="true" />
            Log out
          </Link>
        </div>
      </aside>
    </>
  );
}
