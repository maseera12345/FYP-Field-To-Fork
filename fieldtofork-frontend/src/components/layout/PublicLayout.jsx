import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Routes whose first section is a dark hero: the navbar starts transparent there.
const heroRoutes = ["/"];

export default function PublicLayout() {
  const { pathname } = useLocation();
  const hasHero = heroRoutes.includes(pathname);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar transparentTop={hasHero} />
      <main className={hasHero ? "flex-1" : "flex-1 pt-16"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
