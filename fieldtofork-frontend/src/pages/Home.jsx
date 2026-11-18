// import { ArrowRight, Sprout } from "lucide-react";
// import Button from "../components/ui/Button";
// import Container from "../components/layout/Container";

// // TEMPORARY: a minimal dark hero so the transparent navbar can be tested.
// // The full homepage (all sections) is built in the next step.
// export default function Home() {
//   return (
//     <section className="bg-brand-900 pb-28 pt-36 text-white">
//       <Container>
//         <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-[#CFE3DF]">
//           <Sprout className="h-4 w-4" aria-hidden="true" /> Direct farmer-buyer trade
//         </p>
//         <h1 className="max-w-3xl font-display text-5xl font-semibold leading-tight text-white md:text-6xl">
//           Fair prices. Fresh crops. No middlemen.
//         </h1>
//         <p className="mt-5 max-w-xl text-lg text-[#CFE3DF]">
//           The full homepage (trust bar, featured crops, AI crop doctor, mandi prices and more) comes in the next step.
//         </p>
//         <div className="mt-8 flex flex-wrap gap-3">
//           <Button to="/marketplace" variant="cta" size="lg" rightIcon={ArrowRight}>
//             Browse crops
//           </Button>
//           <Button to="/design-system" variant="outline-light" size="lg">
//             View design system
//           </Button>
//         </div>
//       </Container>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  CloudSun,
  Leaf,
  MapPin,
  MessageCircle,
  ScanSearch,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Wheat,
} from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const categories = [
  { name: "Grains", detail: "Wheat, rice & maize", image: "photo-1574323347407-f5e1ad6d020b", count: "Staple crops" },
  { name: "Vegetables", detail: "Fresh from the field", image: "photo-1540420773420-3366772f4999", count: "Seasonal picks" },
  { name: "Fruits", detail: "Naturally fresh harvest", image: "photo-1610832958506-aa56368176cf", count: "Farm fresh" },
  { name: "Cash crops", detail: "Cotton & more", image: "photo-1595872018818-97555653a011", count: "Market staples" },
];

const steps = [
  { number: "01", icon: Sprout, title: "Farmers list their harvest", text: "Farmers add crop details, available quantity, location and their asking price." },
  { number: "02", icon: ShoppingBasket, title: "Buyers discover and compare", text: "Explore crops, compare listings and connect directly with the people who grow them." },
  { number: "03", icon: Truck, title: "Orders move forward", text: "Place an order and follow its progress with clear order updates." },
];

const benefits = [
  { icon: ScanSearch, title: "AI crop health assistant", text: "Upload a leaf photo to get an AI-assisted disease prediction and practical next-step guidance." },
  { icon: BarChart3, title: "Market price awareness", text: "Explore mandi price information and compare market rates before making a decision." },
  { icon: CloudSun, title: "Weather at a glance", text: "Check local weather conditions and forecasts that can help with farm planning." },
  { icon: MessageCircle, title: "Direct communication", text: "Keep conversations between farmers and buyers in one convenient place." },
];

const marketPreview = [
  { crop: "Wheat", urdu: "گندم", price: "—", unit: "PKR / maund", note: "Connect a mandi data source" },
  { crop: "Rice", urdu: "چاول", price: "—", unit: "PKR / maund", note: "Connect a mandi data source" },
  { crop: "Cotton", urdu: "کپاس", price: "—", unit: "PKR / maund", note: "Connect a mandi data source" },
];

const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Home() {
  return (
    <div className="overflow-hidden bg-surface-page">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-brand-900 pt-20 text-white sm:pt-24 lg:pt-24">
        <div className="absolute inset-0 -z-20">
          <img
            src={photo("photo-1500382017468-9049fed747ef", 1900)}
            alt="Wide view of agricultural fields"
            className="h-full w-full object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(14,90,82,.48),transparent_48%),linear-gradient(105deg,#072F2B_0%,rgba(7,47,43,.98)_48%,rgba(7,47,43,.78)_100%)]" />
        <div className="pointer-events-none absolute -right-32 top-12 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 top-28 -z-10 h-72 w-72 rounded-full border border-white/10" />

        <Container className="grid items-center gap-10 pb-16 pt-8 sm:pb-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:pb-24 lg:pt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-harvest-500/40 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold tracking-wide text-brand-100 backdrop-blur-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-harvest-500" />
              PAKISTAN'S DIRECT FARM-TO-MARKET PLATFORM
            </div>
            <h1 className="font-display text-[2.8rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              Good food starts
              <span className="block text-harvest-500">with a fairer</span>
              <span className="block">connection.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-100 sm:text-lg">
              Discover produce directly from Pakistani farmers. Compare crop listings, connect with growers and make more informed buying and selling decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/marketplace" variant="cta" size="lg" rightIcon={ArrowRight}>Explore marketplace</Button>
              <Button to="/register" variant="outline-light" size="lg">Start selling crops</Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-brand-100">
              <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-harvest-500" /> Direct connections</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-harvest-500" /> Clear crop details</span>
              <span className="inline-flex items-center gap-2"><Sprout className="h-4 w-4 text-harvest-500" /> Smart farm tools</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-harvest-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src={photo("photo-1500937386664-56d1dfef3854", 1200)}
                  alt="Agricultural landscape and cultivated farmland"
                  className="h-[340px] w-full object-cover object-center sm:h-[420px] lg:h-[470px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-brand-900/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-harvest-500">From growers to your doorstep</p>
                  <p className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight sm:text-3xl">A more connected way to grow, source and trade.</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-5 top-8 hidden max-w-[205px] rounded-2xl border border-line bg-white p-4 text-ink shadow-xl sm:block">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf-50 text-leaf-600"><Leaf className="h-5 w-5" /></span>
              <p className="mt-3 text-xs font-medium text-ink-muted">Built around</p>
              <p className="mt-0.5 text-sm font-bold text-brand-900">Fresh produce. Fair connections.</p>
            </div>
            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-ink shadow-xl sm:right-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-harvest-50 text-harvest-600"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-[11px] font-medium text-ink-muted">Connecting</span><span className="text-sm font-bold text-brand-900">Farms across Pakistan</span></span>
            </div>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface-page to-transparent" />
      </section>

      {/* VALUE STRIP */}
      <section className="relative z-10 -mt-1 pb-8">
        <Container>
          <div className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-3 sm:p-7">
            {[
              { icon: Users, title: "Direct farmer-buyer access", text: "Connect without unnecessary layers" },
              { icon: TrendingUp, title: "Informed trade decisions", text: "Explore listings and market insights" },
              { icon: ShieldCheck, title: "Clear product information", text: "Know the crop, quantity and seller" },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={title} className={`flex items-center gap-4 ${index ? "sm:border-l sm:border-line sm:pl-6" : ""}`}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <div><h2 className="text-sm font-bold text-brand-900">{title}</h2><p className="mt-1 text-xs leading-5 text-ink-muted">{text}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-600">Explore the harvest</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">Find what you need,<br className="hidden sm:block" /> fresh from the source.</h2>
              <p className="mt-4 leading-7 text-ink-soft">Explore agricultural produce categories and discover listings from farmers.</p>
            </div>
            <Button to="/marketplace" variant="outline" rightIcon={ArrowUpRight}>View marketplace</Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, index) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
                <a href="/marketplace" className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <img src={photo(item.image, 650)} alt={item.name} loading="lazy" className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700">{item.count}</span>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div><h3 className="text-lg font-bold text-brand-900">{item.name}</h3><p className="mt-1 text-sm text-ink-muted">{item.detail}</p></div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><ArrowUpRight className="h-5 w-5" /></span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface-alt py-20 sm:py-24">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-600">Simple by design</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">A better journey from farm to buyer.</h2>
            <p className="mt-4 leading-7 text-ink-soft">A straightforward process that helps both sides connect, communicate and trade.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }, index) => (
              <motion.article key={number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative rounded-2xl border border-line bg-white p-7 shadow-card">
                <div className="flex items-center justify-between"><span className="text-sm font-extrabold tracking-[.2em] text-harvest-600">{number}</span><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon className="h-6 w-6" /></span></div>
                <h3 className="mt-7 text-xl font-bold text-brand-900">{title}</h3>
                <p className="mt-3 leading-7 text-ink-soft">{text}</p>
                {index < 2 && <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border border-line bg-white p-1 text-brand-600 lg:block" />}
              </motion.article>
            ))}
          </div>
          <div className="mt-10 text-center"><Button to="/how-it-works" variant="outline" rightIcon={ArrowRight}>See how it works</Button></div>
        </Container>
      </section>

      {/* INTELLIGENT TOOLS */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-leaf-50" />
              <img src={photo("photo-1518977676601-b53f82aba655", 1000)} alt="Close-up of a healthy green plant growing in a field" loading="lazy" className="relative h-[390px] w-full rounded-[1.5rem] object-cover shadow-lift sm:h-[480px]" />
              <div className="absolute -bottom-5 -right-3 max-w-[230px] rounded-2xl border border-line bg-white p-4 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-brand-600"><ScanSearch className="h-5 w-5" /><span className="text-sm font-bold">AI Crop Doctor</span></div>
                <p className="mt-2 text-xs leading-5 text-ink-soft">A crop image can be checked with the project's AI disease detection service.</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-600">More than a marketplace</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">Useful tools for smarter agricultural decisions.</h2>
              <p className="mt-5 leading-8 text-ink-soft">FieldToFork brings marketplace access and practical digital tools together, helping farmers and buyers make better-informed decisions.</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                    <div><h3 className="font-bold text-brand-900">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-soft">{text}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-9"><Button to="/disease-detection" variant="primary" rightIcon={ArrowRight}>Explore AI crop doctor</Button></div>
            </div>
          </div>
        </Container>
      </section>

      {/* MARKET PRICE PREVIEW: intentionally no invented prices */}
      <section className="bg-brand-900 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-harvest-500">Know the market</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Make every trade a more informed one.</h2>
              <p className="mt-5 max-w-lg leading-8 text-brand-100">Market price information can help farmers and buyers understand price differences across markets. Live rates will appear here once a verified data source is connected.</p>
              <Button to="/mandi-prices" variant="cta" className="mt-8" rightIcon={ArrowRight}>Explore mandi prices</Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white">
              <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
                <div><h3 className="font-bold text-brand-900">Market price overview</h3><p className="mt-1 text-xs text-ink-muted">Preview · live data connection pending</p></div>
                <span className="rounded-full bg-harvest-50 px-3 py-1 text-xs font-semibold text-harvest-600">Coming soon</span>
              </div>
              <div className="divide-y divide-line">
                {marketPreview.map((item) => (
                  <div key={item.crop} className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><Wheat className="h-5 w-5" /></span><div><p className="font-bold text-brand-900">{item.crop} <span className="ml-1 text-sm font-normal text-ink-muted">{item.urdu}</span></p><p className="text-xs text-ink-muted">{item.note}</p></div></div>
                    <div className="text-right"><p className="font-bold text-brand-900">{item.price}</p><p className="text-xs text-ink-muted">{item.unit}</p></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-surface-page px-5 py-3 text-xs text-ink-muted sm:px-6"><ShieldCheck className="h-4 w-4 text-brand-600" /> Prices will be displayed only after connecting a trusted source.</div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-harvest-500 px-7 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[40px] border-white/10" />
            <div className="absolute -bottom-28 -left-12 h-64 w-64 rounded-full border-[40px] border-white/10" />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-900/70">Be part of the change</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">Let’s bring the people behind food closer together.</h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-brand-900/80">Whether you grow crops or source them, FieldToFork gives you a place to start building direct connections.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/register" className="bg-brand-900 text-white hover:bg-brand-700" size="lg" rightIcon={ArrowRight}>Create an account</Button>
                <Button to="/marketplace" className="border border-brand-900/30 text-brand-900 hover:bg-white/20" variant="outline" size="lg">Browse crops</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
