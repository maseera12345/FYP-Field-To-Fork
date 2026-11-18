import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <p className="font-display text-7xl font-semibold text-harvest-600">404</p>
      <h1 className="mt-2 text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-ink-soft">The page you are looking for does not exist or has moved.</p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
