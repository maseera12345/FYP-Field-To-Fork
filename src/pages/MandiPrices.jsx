import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Bell, BarChart3, ChevronDown, Info, LineChart, MapPin, Minus, Search, TrendingDown, TrendingUp,
} from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Container from "../components/layout/Container";
import { PriceChart, Sparkline, CityBars, fmtRs } from "../components/charts/Charts";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* SAMPLE DATA (generated). Replace buildHistory() with your real API. */
/* Prices are Rs per 40 kg (1 maund).                                  */
/* ------------------------------------------------------------------ */
const CITIES = [
  { name: "Lahore", f: 1 }, { name: "Karachi", f: 1.04 }, { name: "Multan", f: 0.98 },
  { name: "Faisalabad", f: 0.99 }, { name: "Peshawar", f: 1.02 }, { name: "Quetta", f: 1.06 },
];
const CROPS = [
  { name: "Wheat", category: "Grains", base: 3900 },
  { name: "Rice (Basmati)", category: "Grains", base: 9200 },
  { name: "Maize", category: "Grains", base: 2700 },
  { name: "Tomato", category: "Vegetables", base: 2150 },
  { name: "Onion", category: "Vegetables", base: 2600 },
  { name: "Potato", category: "Vegetables", base: 1800 },
  { name: "Kinnow", category: "Fruits", base: 3250 },
  { name: "Mango (Sindhri)", category: "Fruits", base: 5200 },
  { name: "Cotton (Phutti)", category: "Cash crops", base: 8400 },
  { name: "Sugarcane", category: "Cash crops", base: 450 },
];
const CATEGORIES = ["All", "Grains", "Vegetables", "Fruits", "Cash crops"];
const RANGES = [
  { key: "7D", days: 7 }, { key: "1M", days: 30 }, { key: "3M", days: 90 }, { key: "6M", days: 180 }, { key: "1Y", days: 365 },
];

const rng = (seed) => () => {
  seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);

function buildHistory(base, seed, days = 365) {
  const r = rng(seed);
  const step = base < 1000 ? 5 : 10;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let v = base * 0.92;
  const out = [];
  for (let i = days - 1; i >= 0; i--) {
    v += (base - v) * 0.015 + (r() - 0.5) * base * 0.02;
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    out.push({ date, value: Math.round(v / step) * step });
  }
  return out;
}

const HISTORY = {};
CROPS.forEach((c) => CITIES.forEach((ci) => { HISTORY[`${c.name}|${ci.name}`] = buildHistory(c.base * ci.f, hash(c.name + ci.name)); }));

const pct = (a, b) => ((a - b) / b) * 100;
const fmtPct = (n) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;

function Change({ value, className }) {
  const Icon = value > 0.05 ? ArrowUpRight : value < -0.05 ? ArrowDownRight : Minus;
  const tone = value > 0.05 ? "text-success" : value < -0.05 ? "text-danger" : "text-ink-muted";
  return (
    <span className={cn("tabular inline-flex items-center gap-0.5 font-semibold", tone, className)}>
      <Icon className="h-4 w-4" aria-hidden="true" /> {fmtPct(value)}
    </span>
  );
}

export default function MandiPrices() {
  const [crop, setCrop] = useState("Wheat");
  const [city, setCity] = useState("Lahore");
  const [range, setRange] = useState("3M");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState({ key: "crop", dir: "asc" });

  // Rows for the table (all crops in the selected city)
  const rows = useMemo(
    () =>
      CROPS.map((c) => {
        const h = HISTORY[`${c.name}|${city}`];
        const cur = h[h.length - 1].value;
        return {
          ...c,
          cur,
          min: Math.round(cur * 0.96),
          max: Math.round(cur * 1.04),
          d1: pct(cur, h[h.length - 2].value),
          d7: pct(cur, h[h.length - 8].value),
          spark: h.slice(-30).map((p) => p.value),
        };
      }),
    [city]
  );

  const tableRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = rows.filter((r) => (!q || r.name.toLowerCase().includes(q)) && (category === "All" || r.category === category));
    const val = { crop: (r) => r.name, cur: (r) => r.cur, d7: (r) => r.d7 };
    const f = val[sort.key];
    list.sort((a, b) => (f(a) > f(b) ? 1 : -1) * (sort.dir === "asc" ? 1 : -1));
    return list;
  }, [rows, query, category, sort]);

  const toggleSort = (key) => setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: key === "crop" ? "asc" : "desc" }));

  // Main chart data
  const days = RANGES.find((r) => r.key === range).days;
  const series = HISTORY[`${crop}|${city}`].slice(-days);
  const cur = series[series.length - 1].value;
  const first = series[0].value;
  const vals = series.map((p) => p.value);
  const high = Math.max(...vals);
  const low = Math.min(...vals);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  const rangeChange = pct(cur, first);
  const yearVals = HISTORY[`${crop}|${city}`].map((p) => p.value);
  const yearAvg = yearVals.reduce((a, b) => a + b, 0) / yearVals.length;
  const vsYear = pct(cur, yearAvg);

  // City comparison for the selected crop
  const cityItems = CITIES.map((c) => {
    const h = HISTORY[`${crop}|${c.name}`];
    return { label: c.name, value: h[h.length - 1].value };
  });
  const bestSell = [...cityItems].sort((a, b) => b.value - a.value)[0];
  const bestBuy = [...cityItems].sort((a, b) => a.value - b.value)[0];

  // Movers
  const byMove = [...rows].sort((a, b) => b.d7 - a.d7);
  const gainers = byMove.slice(0, 3);
  const losers = byMove.slice(-3).reverse();

  const stats = [
    { label: "Current price", value: fmtRs(cur), sub: `per 40 kg in ${city}` },
    { label: `Change (${range})`, value: <Change value={rangeChange} className="text-xl" />, sub: `from ${fmtRs(first)}` },
    { label: `High (${range})`, value: fmtRs(high), sub: "highest price" },
    { label: `Low (${range})`, value: fmtRs(low), sub: "lowest price" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-900 pb-24 pt-14 text-white">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 rounded-full bg-harvest-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -start-24 bottom-0 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-[#CFE3DF]">
            <LineChart className="h-4 w-4" aria-hidden="true" /> Mandi prices
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            Know the market rate before you sell or buy.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#CFE3DF]">
            Track daily mandi rates, see price trends and compare cities, so every deal is based on real numbers.
          </p>
        </Container>
      </section>

      <Container className="-mt-14 pb-16">
        {/* MAIN CHART CARD */}
        <Card padding="p-5 sm:p-7" className="shadow-lift">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">{crop}</h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
                <MapPin className="h-4 w-4" aria-hidden="true" /> {city} mandi · Rs per 40 kg
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  aria-label="Select city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input w-auto appearance-none pe-10 font-medium"
                >
                  {CITIES.map((c) => <option key={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
              </div>
              <div className="inline-flex rounded-xl bg-surface-alt p-1" role="tablist" aria-label="Time range">
                {RANGES.map((r) => (
                  <button
                    key={r.key}
                    role="tab"
                    aria-selected={range === r.key}
                    onClick={() => setRange(r.key)}
                    className={cn(
                      "rounded-lg px-3.5 py-1.5 text-sm font-semibold transition",
                      range === r.key ? "bg-brand-600 text-white shadow-card" : "text-ink-soft hover:text-brand-700"
                    )}
                  >
                    {r.key}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Crop chips */}
          <div className="-mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1">
            {CROPS.map((c) => (
              <button
                key={c.name}
                onClick={() => setCrop(c.name)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition",
                  crop === c.name ? "border-brand-600 bg-brand-600 text-white" : "border-line-strong bg-white text-ink-soft hover:border-brand-600 hover:text-brand-600"
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-surface-alt p-4">
                <p className="text-sm text-ink-soft">{s.label}</p>
                <p className="tabular mt-1 text-xl font-extrabold text-brand-900">{s.value}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <PriceChart data={series} />
          </div>

          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
            <Badge tone={vsYear > 1 ? "leaf" : vsYear < -1 ? "harvest" : "neutral"}>{vsYear > 1 ? "Above" : vsYear < -1 ? "Below" : "Near"} yearly average</Badge>
            Today's price is {Math.abs(vsYear).toFixed(1)}% {vsYear >= 0 ? "higher" : "lower"} than the 1-year average of {fmtRs(yearAvg)}.
          </p>
        </Card>

        {/* COMPARE + MOVERS */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold"><BarChart3 className="h-5 w-5 text-brand-600" aria-hidden="true" /> {crop}: city comparison</h3>
                <p className="mt-1 text-sm text-ink-soft">Today's average price in each mandi.</p>
              </div>
            </div>
            <CityBars items={cityItems} />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-leaf-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F6B25]">Best city to sell</p>
                <p className="mt-1 font-bold text-brand-900">{bestSell.label} · {fmtRs(bestSell.value)}</p>
              </div>
              <div className="rounded-2xl bg-harvest-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8A5A0A]">Cheapest to buy</p>
                <p className="mt-1 font-bold text-brand-900">{bestBuy.label} · {fmtRs(bestBuy.value)}</p>
              </div>
            </div>
          </Card>

          <div className="space-y-6 lg:col-span-2">
            <Card>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><TrendingUp className="h-5 w-5 text-success" aria-hidden="true" /> Top gainers (7 days)</h3>
              <ul className="space-y-3">
                {gainers.map((r) => (
                  <li key={r.name}>
                    <button onClick={() => setCrop(r.name)} className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-start transition hover:bg-brand-50">
                      <span className="font-semibold text-brand-900">{r.name}</span>
                      <Change value={r.d7} />
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><TrendingDown className="h-5 w-5 text-danger" aria-hidden="true" /> Top losers (7 days)</h3>
              <ul className="space-y-3">
                {losers.map((r) => (
                  <li key={r.name}>
                    <button onClick={() => setCrop(r.name)} className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-start transition hover:bg-brand-50">
                      <span className="font-semibold text-brand-900">{r.name}</span>
                      <Change value={r.d7} />
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">All crops in {city}</h2>
              <p className="mt-1 text-ink-soft">Click any row to see its full price chart above.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
              <input className="input ps-10" placeholder="Search crop" aria-label="Search crop" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold transition",
                  category === c ? "bg-brand-600 text-white" : "bg-surface-alt text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <Card padding="p-0" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead className="bg-surface-alt text-sm text-ink-soft">
                  <tr>
                    {[["crop", "Crop", "text-start"], ["cur", "Price (Rs)", "text-end"]].map(([k, label, al]) => (
                      <th key={k} className={cn("px-5 py-3 font-semibold", al)} aria-sort={sort.key === k ? (sort.dir === "asc" ? "ascending" : "descending") : "none"}>
                        <button onClick={() => toggleSort(k)} className="inline-flex items-center gap-1 hover:text-brand-700">
                          {label} {sort.key === k && <span aria-hidden="true">{sort.dir === "asc" ? "↑" : "↓"}</span>}
                        </button>
                      </th>
                    ))}
                    <th className="px-5 py-3 text-end font-semibold">Range today</th>
                    <th className="px-5 py-3 text-end font-semibold" aria-sort={sort.key === "d7" ? (sort.dir === "asc" ? "ascending" : "descending") : "none"}>
                      <button onClick={() => toggleSort("d7")} className="inline-flex items-center gap-1 hover:text-brand-700">
                        7-day change {sort.key === "d7" && <span aria-hidden="true">{sort.dir === "asc" ? "↑" : "↓"}</span>}
                      </button>
                    </th>
                    <th className="px-5 py-3 text-end font-semibold">30-day trend</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.length === 0 ? (
                    <tr><td colSpan={5} className="px-5 py-12 text-center text-ink-soft">No crops match your search.</td></tr>
                  ) : (
                    tableRows.map((r) => (
                      <tr
                        key={r.name}
                        onClick={() => { setCrop(r.name); window.scrollTo({ top: 220, behavior: "smooth" }); }}
                        className={cn("cursor-pointer border-t border-line transition hover:bg-brand-50/60", crop === r.name && "bg-brand-50/60")}
                      >
                        <td className="px-5 py-4">
                          <p className="font-semibold text-brand-900">{r.name}</p>
                          <Badge tone="neutral" className="mt-1">{r.category}</Badge>
                        </td>
                        <td className="tabular px-5 py-4 text-end text-lg font-extrabold text-brand-600">{r.cur.toLocaleString()}</td>
                        <td className="tabular px-5 py-4 text-end text-sm text-ink-soft">{r.min.toLocaleString()} – {r.max.toLocaleString()}</td>
                        <td className="px-5 py-4 text-end"><Change value={r.d7} /></td>
                        <td className="px-5 py-4"><div className="flex justify-end"><Sparkline data={r.spark} /></div></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Prices are in Rs per 40 kg (1 maund). Demo data is shown for the prototype; real mandi rates will be connected through the backend.
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl2 bg-brand-900 p-8 text-white md:flex-row md:items-center md:p-10"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-harvest-500 text-ink"><Bell className="h-6 w-6" aria-hidden="true" /></span>
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to sell at the right price?</h3>
              <p className="mt-1 max-w-lg text-[#CFE3DF]">List your crop on FieldToFork and sell directly to buyers, with the mandi rate as your guide.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/register" variant="cta" size="lg">List your crop</Button>
            <Button to="/marketplace" variant="outline-light" size="lg">Browse marketplace</Button>
          </div>
        </motion.div>
      </Container>
    </>
  );
}