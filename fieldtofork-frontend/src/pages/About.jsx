
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Sprout,
//   Handshake,
//   ShieldCheck,
//   ScanSearch,
//   BarChart3,
//   CloudSun,
//   MessageCircle,
//   ShoppingBasket,
//   Leaf,
//   Users,
//   TrendingUp,
// } from "lucide-react";

// import Button from "../components/ui/Button";
// import Container from "../components/layout/Container";

// const image = (id, width = 1200) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// const reveal = {
//   hidden: { opacity: 0, y: 25 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: "easeOut" },
//   },
// };

// const values = [
//   {
//     icon: Handshake,
//     title: "Direct Connections",
//     description:
//       "We make it easier for farmers and buyers to discover each other, communicate directly and build meaningful business relationships.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Transparency & Trust",
//     description:
//       "Clear crop information, pricing details and order visibility help users make more informed decisions.",
//   },
//   {
//     icon: Sprout,
//     title: "Smart Agriculture",
//     description:
//       "We bring modern technology and intelligent tools together to support a more connected agricultural ecosystem.",
//   },
// ];

// const features = [
//   {
//     icon: ShoppingBasket,
//     title: "Direct Marketplace",
//     description:
//       "Discover crops, explore listings and connect with farmers without unnecessary middlemen.",
//   },
//   {
//     icon: ScanSearch,
//     title: "AI Disease Detection",
//     description:
//       "Upload a crop leaf image to receive AI-assisted disease predictions and treatment guidance.",
//   },
//   {
//     icon: BarChart3,
//     title: "Market Price Insights",
//     description:
//       "Explore mandi prices and compare market information to make better trading decisions.",
//   },
//   {
//     icon: CloudSun,
//     title: "Weather Information",
//     description:
//       "Access weather conditions and forecasts that can help farmers plan their agricultural activities.",
//   },
//   {
//     icon: MessageCircle,
//     title: "Real-Time Communication",
//     description:
//       "Communicate directly with buyers and farmers through the integrated messaging system.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Order Management",
//     description:
//       "Manage purchases, sales and order progress through an organized digital experience.",
//   },
// ];

// function Eyebrow({ children, light = false }) {
//   return (
//     <div
//       className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
//         light ? "text-harvest-500" : "text-brand-600"
//       }`}
//     >
//       <span
//         className={`h-px w-8 ${
//           light ? "bg-harvest-500" : "bg-brand-600"
//         }`}
//       />
//       {children}
//     </div>
//   );
// }

// export default function About() {
//   return (
//     <main className="overflow-hidden bg-surface-page">

//       {/* HERO SECTION */}
//       <section className="relative isolate overflow-hidden bg-brand-900 text-white">
//         <div className="absolute inset-0 -z-20">
//           <img
//             src={image("photo-1500382017468-9049fed747ef", 1900)}
//             alt="Beautiful agricultural fields"
//             className="h-full w-full object-cover opacity-25"
//           />
//         </div>

//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-900/65" />

//         <div className="absolute -right-28 -top-28 -z-10 h-96 w-96 rounded-full border border-white/10" />
//         <div className="absolute -right-12 top-0 -z-10 h-72 w-72 rounded-full border border-white/10" />

//         <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={reveal}
//           >
//             <Eyebrow light>ABOUT FIELDTOFORK</Eyebrow>

//             <h1 className="font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
//               Connecting
//               <span className="block text-harvest-500">
//                 Farms to
//               </span>
//               the Future.
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-8 text-brand-100 sm:text-lg">
//               FieldToFork is an intelligent agricultural marketplace
//               designed to bring Pakistani farmers and buyers closer.
//               We combine direct crop trading with smart technology
//               to create a more transparent and connected experience.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Button
//                 to="/marketplace"
//                 variant="cta"
//                 size="lg"
//                 rightIcon={ArrowRight}
//               >
//                 Explore Marketplace
//               </Button>

//               <Button
//                 to="/how-it-works"
//                 variant="outline-light"
//                 size="lg"
//               >
//                 How It Works
//               </Button>
//             </div>

//             <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-brand-100">
//               <span className="flex items-center gap-2">
//                 <ShieldCheck className="h-4 w-4 text-harvest-500" />
//                 Transparent Trading
//               </span>

//               <span className="flex items-center gap-2">
//                 <Leaf className="h-4 w-4 text-harvest-500" />
//                 Smart Agriculture
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative mx-auto w-full max-w-lg"
//           >
//             <div className="absolute -inset-4 rounded-[2rem] bg-harvest-500/10 blur-2xl" />

//             <div className="relative rounded-[1.8rem] border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-sm">
//               <img
//                 src={image("photo-1500382017468-9049fed747ef", 1100)}
//                 alt="Agricultural landscape"
//                 className="h-[330px] w-full rounded-[1.3rem] object-cover sm:h-[420px]"
//               />
//             </div>

//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-xl sm:-left-8"
//             >
//               <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
//                 <Sprout className="h-6 w-6" />
//               </span>

//               <div>
//                 <p className="text-xs text-ink-muted">Our purpose</p>
//                 <p className="font-bold text-brand-900">
//                   Growing Connections
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               animate={{ y: [0, 7, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity }}
//               className="absolute -right-3 top-8 hidden rounded-2xl bg-white p-4 text-ink shadow-xl sm:block"
//             >
//               <p className="text-xs text-ink-muted">Our focus</p>
//               <p className="mt-1 font-bold text-brand-900">
//                 Farm to Buyer
//               </p>
//             </motion.div>
//           </motion.div>
//         </Container>
//       </section>

//       {/* OUR STORY */}
//       <section className="py-20 sm:py-24">
//         <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={reveal}
//           >
//             <Eyebrow>OUR STORY</Eyebrow>

//             <h2 className="font-display text-4xl font-semibold leading-tight text-brand-900 sm:text-5xl">
//               A better connection between farmers and buyers.
//             </h2>

//             <p className="mt-6 leading-8 text-ink-soft">
//               Agricultural trading can involve several disconnected
//               steps. Farmers need better opportunities to showcase
//               their harvest, while buyers need a convenient way to
//               discover crops and compare available options.
//             </p>

//             <p className="mt-4 leading-8 text-ink-soft">
//               FieldToFork aims to simplify this journey by bringing
//               farmers and buyers together on one digital platform.
//               It also introduces intelligent tools that make useful
//               agricultural information easier to access.
//             </p>

//             <div className="mt-8">
//               <Button
//                 to="/how-it-works"
//                 variant="outline"
//                 rightIcon={ArrowRight}
//               >
//                 Discover How It Works
//               </Button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             <img
//               src={image("photo-1542838132-92c53300491e", 1100)}
//               alt="Fresh vegetables at a produce market"
//               className="h-[360px] w-full rounded-[1.7rem] object-cover shadow-lift sm:h-[440px]"
//             />

//             <div className="absolute -bottom-6 right-4 rounded-2xl border border-line bg-white p-5 shadow-xl sm:-right-5">
//               <p className="font-display text-2xl font-semibold text-brand-900">
//                 From Farm
//               </p>
//               <p className="mt-1 text-sm text-ink-soft">
//                 To the people who need it.
//               </p>
//             </div>
//           </motion.div>

//         </Container>
//       </section>

//       {/* MISSION AND VISION */}
//       <section className="bg-surface-alt py-20 sm:py-24">
//         <Container>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={reveal}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <Eyebrow>OUR DIRECTION</Eyebrow>

//             <h2 className="font-display text-4xl font-semibold text-brand-900 sm:text-5xl">
//               Technology with a purpose.
//             </h2>

//             <p className="mt-5 leading-8 text-ink-soft">
//               We believe digital innovation can help build a more
//               informed, accessible and connected agricultural
//               marketplace.
//             </p>
//           </motion.div>

//           <div className="mt-12 grid gap-6 md:grid-cols-2">

//             <motion.article
//               whileHover={{ y: -7 }}
//               transition={{ duration: 0.25 }}
//               className="rounded-[1.5rem] border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-lift sm:p-10"
//             >
//               <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
//                 <Sprout className="h-7 w-7" />
//               </span>

//               <p className="mt-7 text-xs font-bold uppercase tracking-widest text-brand-600">
//                 OUR MISSION
//               </p>

//               <h3 className="mt-3 font-display text-3xl font-semibold text-brand-900">
//                 Empowering direct trade.
//               </h3>

//               <p className="mt-4 leading-7 text-ink-soft">
//                 Our mission is to provide farmers and buyers with
//                 a digital platform where they can connect, discover
//                 opportunities and trade with greater transparency.
//               </p>
//             </motion.article>

//             <motion.article
//               whileHover={{ y: -7 }}
//               transition={{ duration: 0.25 }}
//               className="rounded-[1.5rem] bg-brand-900 p-8 text-white shadow-card transition-shadow hover:shadow-lift sm:p-10"
//             >
//               <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-harvest-500">
//                 <Users className="h-7 w-7" />
//               </span>

//               <p className="mt-7 text-xs font-bold uppercase tracking-widest text-harvest-500">
//                 OUR VISION
//               </p>

//               <h3 className="mt-3 font-display text-3xl font-semibold text-white">
//                 A connected agricultural future.
//               </h3>

//               <p className="mt-4 leading-7 text-brand-100">
//                 Our vision is to support a modern agricultural
//                 ecosystem where farmers and buyers benefit from
//                 accessible information and useful technology.
//               </p>
//             </motion.article>

//           </div>
//         </Container>
//       </section>

//       {/* OUR VALUES */}
//       <section className="py-20 sm:py-24">
//         <Container>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={reveal}
//             className="max-w-2xl"
//           >
//             <Eyebrow>WHAT GUIDES US</Eyebrow>

//             <h2 className="font-display text-4xl font-semibold text-brand-900 sm:text-5xl">
//               The values behind everything we build.
//             </h2>

//             <p className="mt-5 leading-8 text-ink-soft">
//               Our platform is shaped around the needs of the
//               agricultural community.
//             </p>
//           </motion.div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {values.map(({ icon: Icon, title, description }, index) => (
//               <motion.article
//                 key={title}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ delay: index * 0.12, duration: 0.5 }}
//                 whileHover={{ y: -8 }}
//                 className="rounded-[1.4rem] border border-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift"
//               >
//                 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-50 text-leaf-600">
//                   <Icon className="h-7 w-7" />
//                 </span>

//                 <h3 className="mt-6 text-xl font-bold text-brand-900">
//                   {title}
//                 </h3>

//                 <p className="mt-3 leading-7 text-ink-soft">
//                   {description}
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* PLATFORM FEATURES */}
//       <section className="bg-brand-900 py-20 text-white sm:py-24">
//         <Container>

//           <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={reveal}
//               className="max-w-2xl"
//             >
//               <Eyebrow light>THE FIELDTOFORK PLATFORM</Eyebrow>

//               <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
//                 Everything connected in one place.
//               </h2>
//             </motion.div>

//             <p className="max-w-md leading-7 text-brand-100">
//               From crop discovery to intelligent agricultural tools,
//               FieldToFork brings essential features together.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map(({ icon: Icon, title, description }, index) => (
//               <motion.article
//                 key={title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{ delay: (index % 3) * 0.1 }}
//                 whileHover={{ y: -6 }}
//                 className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 transition-colors duration-300 hover:bg-white/10"
//               >
//                 <span className="grid h-12 w-12 place-items-center rounded-xl bg-harvest-500/15 text-harvest-500">
//                   <Icon className="h-6 w-6" />
//                 </span>

//                 <h3 className="mt-5 text-lg font-bold text-white">
//                   {title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-brand-100">
//                   {description}
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-20 sm:py-24">
//         <Container>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative overflow-hidden rounded-[2rem] bg-harvest-500 px-7 py-12 text-brand-900 sm:px-12 sm:py-16"
//           >
//             <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-brand-900/10" />
//             <div className="absolute -right-5 -top-10 h-56 w-56 rounded-full border border-brand-900/10" />

//             <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
//               <div className="max-w-2xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em]">
//                   BE PART OF THE CHANGE
//                 </p>

//                 <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
//                   Let's build a better connection to agriculture.
//                 </h2>

//                 <p className="mt-4 leading-7 text-brand-900/80">
//                   Join a platform designed to bring farmers and
//                   buyers closer through technology.
//                 </p>
//               </div>

//               <div className="flex shrink-0 flex-wrap gap-3">
//                 <Button
//                   to="/register"
//                   variant="primary"
//                   size="lg"
//                   rightIcon={ArrowRight}
//                 >
//                   Get Started
//                 </Button>

//                 <Button
//                   to="/marketplace"
//                   variant="outline"
//                   size="lg"
//                   className="border-brand-900 text-brand-900 hover:bg-brand-900/5"
//                 >
//                   Browse Crops
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </Container>
//       </section>

//     </main>
//   );
// }




import { motion } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Target,
  Eye,
  Handshake,
  ShieldCheck,
  Lightbulb,
  Leaf,
  Users,
  ScanSearch,
  TrendingUp,
  CloudSun,
  MessageCircle,
  ShoppingBasket,
  Wheat,
  HeartHandshake,
  ChartNoAxesCombined,
} from "lucide-react";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const C = {
  dark: "#123B35",
  deep: "#0C302B",
  green: "#35765B",
  sage: "#E7EEE6",
  sageDark: "#D7E4D8",
  cream: "#F7F5EF",
  paper: "#F0EEE6",
  gold: "#D6A64B",
  goldLight: "#F3E7C9",
  text: "#233B34",
  muted: "#68776F",
  white: "#FFFFFF",
  border: "#DDE4DA",
};

const photo = (id, width = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const values = [
  {
    icon: Handshake,
    number: "01",
    title: "Direct Connections",
    description:
      "We bring farmers and buyers closer by making crop discovery and direct communication easier.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Transparency",
    description:
      "Clear crop details, market information and order visibility help people make informed decisions.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Innovation",
    description:
      "We use intelligent technology to introduce practical solutions for everyday agricultural challenges.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Empowerment",
    description:
      "We aim to give farmers better digital opportunities to showcase their produce and reach buyers.",
  },
];

const features = [
  {
    icon: ShoppingBasket,
    title: "Direct Marketplace",
    description:
      "Farmers can list their crops while buyers explore produce, compare listings and connect directly.",
  },
  {
    icon: ScanSearch,
    title: "AI Disease Detection",
    description:
      "Upload a crop leaf image to receive AI-assisted disease predictions and useful treatment guidance.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Market Price Insights",
    description:
      "Explore mandi price information and compare market rates to support better trading decisions.",
  },
  {
    icon: CloudSun,
    title: "Weather Information",
    description:
      "Access weather conditions and forecasts that can help farmers plan their agricultural activities.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Communicate with farmers and buyers through the platform's integrated messaging experience.",
  },
  {
    icon: TrendingUp,
    title: "Order Management",
    description:
      "Keep track of purchases, sales and order progress through an organized digital experience.",
  },
];

function Label({ children, light = false }) {
  return (
    <div
      className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: light ? C.gold : C.green }}
    >
      <span
        className="h-px w-8"
        style={{ backgroundColor: light ? C.gold : C.green }}
      />
      {children}
    </div>
  );
}

function ValueCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
      className="group rounded-2xl border p-7 transition-all duration-300 hover:shadow-xl"
      style={{
        backgroundColor: index % 2 === 0 ? C.white : C.sage,
        borderColor: C.border,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: C.dark, color: C.white }}
        >
          <Icon size={22} />
        </span>

        <span
          className="font-display text-3xl"
          style={{ color: "#C4D2C5" }}
        >
          {item.number}
        </span>
      </div>

      <h3
        className="mt-7 text-xl font-bold"
        style={{ color: C.dark }}
      >
        {item.title}
      </h3>

      <p
        className="mt-3 text-sm leading-7"
        style={{ color: C.muted }}
      >
        {item.description}
      </p>

      <div
        className="mt-6 h-1 w-9 rounded-full transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: C.gold }}
      />
    </motion.article>
  );
}

function FeatureCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border p-6 transition-all duration-300"
      style={{
        backgroundColor: "#173E37",
        borderColor: "rgba(255,255,255,0.13)",
      }}
    >
      <span
        className="grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(214,166,75,0.15)", color: C.gold }}
      >
        <Icon size={23} />
      </span>

      <h3 className="mt-6 text-lg font-bold text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7" style={{ color: "#D0DDD5" }}>
        {item.description}
      </p>
    </motion.article>
  );
}

export default function About() {
  return (
    <main style={{ backgroundColor: C.cream }}>

      {/* 1. ABOUT INTRODUCTION */}
      <section
        className="overflow-hidden border-b"
        style={{
          backgroundColor: C.cream,
          borderColor: C.border,
        }}
      >
        <Container className="py-12 sm:py-16">

          <div className="mb-10 flex items-center gap-2 text-xs">
            <a href="/" className="transition hover:underline" style={{ color: C.muted }}>
              Home
            </a>
            <span style={{ color: C.muted }}>/</span>
            <span className="font-semibold" style={{ color: C.green }}>
              About Us
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Label>WHO WE ARE</Label>

              <h1
                className="max-w-2xl font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ color: C.dark }}
              >
                Bringing agriculture
                <span className="block" style={{ color: C.green }}>
                  closer to everyone.
                </span>
              </h1>

              <p
                className="mt-7 max-w-xl text-base leading-8"
                style={{ color: C.muted }}
              >
                FieldToFork is an intelligent agricultural marketplace
                designed to connect Pakistani farmers and buyers through
                direct trade, useful information and modern technology.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  to="/marketplace"
                  variant="primary"
                  size="lg"
                  rightIcon={ArrowRight}
                >
                  Explore Marketplace
                </Button>

                <span className="text-sm font-medium" style={{ color: C.muted }}>
                  Growing connections, creating opportunities.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative px-2 pb-7"
            >
              <div
                className="absolute -right-3 -top-4 h-32 w-32 rounded-full"
                style={{ backgroundColor: C.goldLight }}
              />

              <img
                src={photo("photo-1500382017468-9049fed747ef", 1200)}
                alt="Agricultural fields"
                className="relative h-[310px] w-full rounded-2xl object-cover shadow-xl sm:h-[410px]"
              />

              <div
                className="absolute -bottom-1 left-0 rounded-xl p-4 shadow-xl sm:-left-5"
                style={{ backgroundColor: C.dark }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)", color: C.gold }}
                  >
                    <Sprout size={24} />
                  </span>

                  <div>
                    <p className="text-xs" style={{ color: "#C8D8CF" }}>
                      Our purpose
                    </p>
                    <p className="font-bold text-white">
                      A smarter farm-to-market journey
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.paper }}>
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={photo("photo-1500937386664-56d1dfef3854")}
                alt="Agricultural fields"
                className="mt-10 h-56 w-full rounded-2xl object-cover sm:h-72"
              />

              <img
                src={photo("photo-1542838132-92c53300491e")}
                alt="Fresh vegetables"
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
              />
            </div>

            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl px-6 py-4 shadow-lg sm:left-1/2"
              style={{ backgroundColor: C.dark }}
            >
              <p className="whitespace-nowrap text-sm font-semibold text-white">
                From the field to the buyer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Label>OUR STORY</Label>

            <h2
              className="font-display text-4xl font-semibold leading-tight sm:text-5xl"
              style={{ color: C.dark }}
            >
              Every harvest deserves a better opportunity.
            </h2>

            <p className="mt-6 leading-8" style={{ color: C.muted }}>
              Agriculture plays an important role in Pakistan's economy
              and everyday life. However, farmers and buyers can face
              challenges when discovering each other, comparing produce
              and accessing useful market information.
            </p>

            <p className="mt-4 leading-8" style={{ color: C.muted }}>
              FieldToFork was designed with a simple idea: bring these
              people closer through one intelligent digital marketplace.
              Farmers can showcase their crops, buyers can discover
              available produce, and both can communicate more directly.
            </p>

            <p className="mt-4 leading-8" style={{ color: C.muted }}>
              By combining marketplace features with AI-assisted crop
              health tools, market information and weather insights,
              we aim to make agricultural trade more accessible and informed.
            </p>
          </motion.div>

        </Container>
      </section>

      {/* 3. MISSION AND VISION */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.sage }}>
        <Container>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <Label>OUR PURPOSE</Label>

            <h2
              className="font-display text-4xl font-semibold sm:text-5xl"
              style={{ color: C.dark }}
            >
              What drives FieldToFork?
            </h2>

            <p className="mt-5 leading-8" style={{ color: C.muted }}>
              Our mission and vision guide every feature we introduce
              and every connection we aim to create.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* MISSION */}
            <motion.article
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="relative overflow-hidden rounded-3xl p-8 shadow-xl sm:p-10"
              style={{ backgroundColor: C.dark }}
            >
              <div
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              />

              <span
                className="relative grid h-14 w-14 place-items-center rounded-2xl"
                style={{ backgroundColor: "rgba(214,166,75,0.16)", color: C.gold }}
              >
                <Target size={29} />
              </span>

              <p
                className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: C.gold }}
              >
                OUR MISSION
              </p>

              <h3
                className="relative mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl"
                style={{ color: "#FFFFFF" }}
              >
                Empowering Farmers. Connecting Buyers.
              </h3>

              <p
                className="relative mt-5 leading-8"
                style={{ color: "#E0EAE4" }}
              >
                Our mission is to create an accessible digital marketplace
                where farmers can showcase their agricultural produce and
                buyers can connect with them directly. We aim to support
                transparency, better access to information and smarter
                agricultural decisions.
              </p>

              <div
                className="relative mt-8 h-1 w-16 rounded-full"
                style={{ backgroundColor: C.gold }}
              />
            </motion.article>

            {/* VISION */}
            <motion.article
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="relative overflow-hidden rounded-3xl border p-8 shadow-xl sm:p-10"
              style={{
                backgroundColor: "#FBFAF5",
                borderColor: "#D6E1D6",
              }}
            >
              <div
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full border"
                style={{ borderColor: "#E0E9DF" }}
              />

              <span
                className="relative grid h-14 w-14 place-items-center rounded-2xl"
                style={{ backgroundColor: C.sage, color: C.green }}
              >
                <Eye size={29} />
              </span>

              <p
                className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: C.green }}
              >
                OUR VISION
              </p>

              <h3
                className="relative mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl"
                style={{ color: C.dark }}
              >
                A Smarter Future for Agriculture.
              </h3>

              <p className="relative mt-5 leading-8" style={{ color: C.muted }}>
                Our vision is to contribute to a connected agricultural
                ecosystem in Pakistan where digital marketplaces and
                intelligent technology help farmers and buyers discover
                opportunities, access information and build stronger
                relationships.
              </p>

              <div
                className="relative mt-8 h-1 w-16 rounded-full"
                style={{ backgroundColor: C.green }}
              />
            </motion.article>

          </div>
        </Container>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.cream }}>
        <Container>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <Label>OUR CORE VALUES</Label>

            <h2
              className="font-display text-4xl font-semibold sm:text-5xl"
              style={{ color: C.dark }}
            >
              The principles we believe in.
            </h2>

            <p className="mt-5 leading-8" style={{ color: C.muted }}>
              These values shape our approach to building a useful
              and people-focused agricultural platform.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <ValueCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. WHY FIELDTOFORK */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.deep }}>
        <Container>

          <div className="grid items-end gap-6 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Label light>WHY FIELDTOFORK</Label>

              <h2
                className="font-display text-4xl font-semibold leading-tight sm:text-5xl"
                style={{ color: C.white }}
              >
                More than a marketplace.
                <span className="block" style={{ color: C.gold }}>
                  A smarter ecosystem.
                </span>
              </h2>
            </motion.div>

            <p className="max-w-xl leading-8" style={{ color: "#D0DDD5" }}>
              We bring crop trading, intelligent crop health assistance
              and useful agricultural information together in one
              connected platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.paper }}>
        <Container>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"
            style={{ backgroundColor: C.goldLight }}
          >
            <div
              className="absolute -right-20 -top-24 h-80 w-80 rounded-full border"
              style={{ borderColor: "rgba(18,59,53,0.12)" }}
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: C.green }}
                >
                  GROW WITH US
                </p>

                <h2
                  className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl"
                  style={{ color: C.dark }}
                >
                  Be part of a more connected agricultural future.
                </h2>

                <p className="mt-4 max-w-xl leading-7" style={{ color: C.muted }}>
                  Whether you are a farmer or a buyer, discover a smarter
                  way to connect through FieldToFork.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Button
                  to="/register"
                  variant="primary"
                  size="lg"
                  rightIcon={ArrowRight}
                >
                  Join FieldToFork
                </Button>

                <Button
                  to="/marketplace"
                  variant="outline"
                  size="lg"
                  className="border-brand-900 text-brand-900 hover:bg-brand-900/5"
                >
                  Explore Crops
                </Button>
              </div>

            </div>
          </motion.div>

        </Container>
      </section>

    </main>
  );
}
