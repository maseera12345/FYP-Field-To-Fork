import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import Logo from "../brand/Logo";
import Button from "../ui/Button";
import Container from "./Container";
import { useLanguage } from "../../context/LanguageContext";
import { cn } from "../../utils/cn";

const links = [
  { key: "nav.home", to: "/" },
  { key: "nav.marketplace", to: "/marketplace" },
  { key: "nav.mandi", to: "/mandi-prices" },
  { key: "nav.weather", to: "/weather" },
  { key: "nav.how", to: "/how-it-works" },
  { key: "nav.about", to: "/about" },
];

/**
 * transparentTop: when true, the bar is transparent over a dark hero until the page is scrolled.
 */
export default function Navbar({ transparentTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !transparentTop || open;

  const linkClass = ({ isActive }) =>
    cn(
      "border-b-2 py-1 text-sm font-medium transition-colors",
      isActive ? "border-harvest-500 font-semibold" : "border-transparent",
      solid
        ? isActive ? "text-brand-600" : "text-ink-soft hover:text-brand-600"
        : isActive ? "text-white" : "text-white/80 hover:text-white"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid ? "border-b border-line bg-surface-page/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="FieldToFork home" className="shrink-0">
          <Logo size={36} theme={solid ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600",
              solid ? "text-ink-soft hover:bg-brand-50" : "text-white/90 hover:bg-white/10"
            )}
            aria-label={lang === "en" ? "Switch to Urdu" : "Switch to English"}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {lang === "en" ? "اردو" : "EN"}
          </button>
          <Button to="/login" variant={solid ? "ghost" : "outline-light"} size="sm">
            {t("nav.login")}
          </Button>
          <Button to="/register" variant="cta" size="sm">
            {t("nav.start")}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "rounded-lg p-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 lg:hidden",
            solid ? "text-brand-900 hover:bg-brand-50" : "text-white hover:bg-white/10"
          )}
          aria-label={open ? t("nav.close") : t("nav.menu")}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line bg-surface-page lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn("rounded-xl px-3 py-3 text-base font-medium", isActive ? "bg-brand-50 text-brand-600" : "text-ink-soft hover:bg-surface-alt")
                  }
                >
                  {t(l.key)}
                </NavLink>
              ))}
              <div className="mt-3 flex items-center gap-3">
                <Button to="/login" variant="outline" className="flex-1">
                  {t("nav.login")}
                </Button>
                <Button to="/register" variant="cta" className="flex-1">
                  {t("nav.start")}
                </Button>
              </div>
              <button
                type="button"
                onClick={toggleLanguage}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-ink-soft hover:bg-surface-alt"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                {lang === "en" ? "اردو" : "English"}
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
