import { ArrowRight, Sprout } from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";

// TEMPORARY: a minimal dark hero so the transparent navbar can be tested.
// The full homepage (all sections) is built in the next step.
export default function Home() {
  return (
    <section className="bg-brand-900 pb-28 pt-36 text-white">
      <Container>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-[#CFE3DF]">
          <Sprout className="h-4 w-4" aria-hidden="true" /> Direct farmer-buyer trade
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-tight text-white md:text-6xl">
          Fair prices. Fresh crops. No middlemen.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-[#CFE3DF]">
          The full homepage (trust bar, featured crops, AI crop doctor, mandi prices and more) comes in the next step.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/marketplace" variant="cta" size="lg" rightIcon={ArrowRight}>
            Browse crops
          </Button>
          <Button to="/design-system" variant="outline-light" size="lg">
            View design system
          </Button>
        </div>
      </Container>
    </section>
  );
}
