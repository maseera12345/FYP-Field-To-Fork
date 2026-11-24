import { Route, Routes } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import DesignSystem from "./pages/DesignSystem";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import MandiPrices from "./pages/MandiPrices";

// Public pages that are planned but not built yet (they render <ComingSoon />).
const plannedPublicRoutes = [
  "marketplace", "mandi-prices", "weather", "how-it-works", "about", "contact",
  "disease-detection", "privacy", "terms", "login", "register", "forgot-password",
];

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="mandi-prices" element={<MandiPrices />} />
        <Route path="design-system" element={<DesignSystem />} />
        {plannedPublicRoutes.map((p) => (
          <Route key={p} path={p} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>

      {["farmer", "buyer", "admin"].map((role) => (
        <Route key={role} path={role} element={<DashboardLayout role={role} />}>
          <Route index element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      ))}
    </Routes>
  );
}
