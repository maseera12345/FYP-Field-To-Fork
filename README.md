# FieldToFork: Frontend

React + Vite + Tailwind CSS (v3) frontend for FieldToFork.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build check
```

## Folder structure

```
public/                      static files served as-is (favicon.svg)
src/
  assets/brand/              logo SVG files (horizontal, icon, app icon)
  components/
    brand/Logo.jsx           Logo + WheatBadge (light / dark themes)
    ui/                      small reusable pieces: Button, Card, Badge,
                             FormFields (Input, Select, Textarea), Modal, Loader
    layout/                  page shells: Navbar, Footer, PublicLayout,
                             Sidebar, DashboardLayout, Container
  config/navigation.js       sidebar menu items for farmer / buyer / admin
  context/LanguageContext    English / Urdu switch (sets dir="rtl" automatically)
  pages/                     one file per page (Home, DesignSystem, ComingSoon, NotFound)
  utils/cn.js                className helper
  App.jsx                    all routes
  main.jsx                   app entry (Router + LanguageProvider)
  index.css                  Tailwind layers + design tokens (.card, .input)
tailwind.config.js           FieldToFork colours, fonts, shadows, radii
```

## Routes available now

| Route | What it shows |
|---|---|
| `/` | Temporary hero (full homepage next) |
| `/design-system` | Every shared component, for testing |
| `/farmer`, `/buyer`, `/admin` | Dashboard shell (sidebar + top bar) |
| other planned routes | "Coming soon" page, so all links work |

## Adding a new page (pattern for every next step)

1. Create `src/pages/YourPage.jsx`.
2. In `src/App.jsx` import it and add a `<Route>`. Remove the path from `plannedPublicRoutes` if it was listed there.
3. Reuse components from `components/ui` and `components/layout`.
