import { useLocation } from "react-router-dom";
import { Hammer } from "lucide-react";
import Button from "../components/ui/Button";

// Placeholder for pages that are planned but not built yet, so every navbar,
// footer and sidebar link already works.
export default function ComingSoon() {
  const { pathname } = useLocation();
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-harvest-50 text-harvest-600">
        <Hammer className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="text-3xl font-extrabold">This page is coming soon</h1>
      <p className="mt-3 text-ink-soft">
        <code className="rounded bg-surface-alt px-1.5 py-0.5 text-sm">{pathname}</code> is planned for a later phase of the build.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/" variant="primary">
          Back to home
        </Button>
        <Button to="/design-system" variant="outline">
          View design system
        </Button>
      </div>
    </section>
  );
}
