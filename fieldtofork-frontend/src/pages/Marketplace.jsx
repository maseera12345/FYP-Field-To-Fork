import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple, BadgeCheck, Calendar, Carrot, Check, LayoutGrid, Leaf, List, MapPin, MessageCircle, Package, Scale, Search,
  ShoppingCart, SlidersHorizontal, Sprout, Star, TrendingDown, TrendingUp, Wheat, X, Heart,
} from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Container from "../components/layout/Container";
import { cn } from "../utils/cn";

const image = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const IMG = {
  Grains: "photo-1574323347407-f5e1ad6d020b",
  Vegetables: "photo-1540420773420-3366772f4999",
  Fruits: "photo-1610832958506-aa56368176cf",
  "Cash crops": "photo-1595872018818-97555653a011",
};
const CATS = [
  { name: "Grains", icon: Wheat }, { name: "Vegetables", icon: Carrot }, { name: "Fruits", icon: Apple }, { name: "Cash crops", icon: Sprout },
];
const PROVINCES = ["Punjab", "Sindh", "KPK", "Balochistan"];

// SAMPLE DATA: replace with your backend API. price/mandi are Rs per 40 kg.
const CROPS = [
  { id: 1, name: "Sharbati Wheat", category: "Grains", farmer: "Muhammad Aslam", rating: 4.8, reviews: 126, city: "Bhakkar", province: "Punjab", price: 3850, mandi: 3900, tons: 12, verified: true, organic: false, days: 2 },
  { id: 2, name: "Basmati Rice (Super Kernel)", category: "Grains", farmer: "Rana Tariq", rating: 4.9, reviews: 214, city: "Sheikhupura", province: "Punjab", price: 9050, mandi: 9200, tons: 8, verified: true, organic: false, days: 5 },
  { id: 3, name: "Yellow Maize", category: "Grains", farmer: "Gul Zaman", rating: 4.4, reviews: 58, city: "Mardan", province: "KPK", price: 2650, mandi: 2700, tons: 20, verified: false, organic: false, days: 4 },
  { id: 4, name: "Fresh Tomatoes", category: "Vegetables", farmer: "Abdul Rehman", rating: 4.6, reviews: 89, city: "Hyderabad", province: "Sindh", price: 2250, mandi: 2150, tons: 3, verified: true, organic: false, days: 1 },
  { id: 5, name: "Red Onions", category: "Vegetables", farmer: "Imran Khan", rating: 4.3, reviews: 41, city: "Quetta", province: "Balochistan", price: 2500, mandi: 2600, tons: 10, verified: false, organic: false, days: 3 },
  { id: 6, name: "Potatoes (Sante)", category: "Vegetables", farmer: "Zahid Mehmood", rating: 4.7, reviews: 132, city: "Okara", province: "Punjab", price: 1750, mandi: 1800, tons: 15, verified: true, organic: false, days: 2 },
  { id: 7, name: "Sindhri Mangoes", category: "Fruits", farmer: "Syed Ali Raza", rating: 4.9, reviews: 301, city: "Mirpurkhas", province: "Sindh", price: 5400, mandi: 5200, tons: 5, verified: true, organic: true, days: 1 },
  { id: 8, name: "Kinnow (Grade A)", category: "Fruits", farmer: "Ch. Waseem", rating: 4.7, reviews: 167, city: "Sargodha", province: "Punjab", price: 3100, mandi: 3250, tons: 9, verified: true, organic: false, days: 3 },
  { id: 9, name: "Raw Cotton (Phutti)", category: "Cash crops", farmer: "Malik Nadeem", rating: 4.2, reviews: 37, city: "Multan", province: "Punjab", price: 8500, mandi: 8400, tons: 6, verified: false, organic: false, days: 6 },
  { id: 10, name: "Sugarcane", category: "Cash crops", farmer: "Haji Bashir", rating: 4.5, reviews: 74, city: "Faisalabad", province: "Punjab", price: 440, mandi: 450, tons: 40, verified: true, organic: false, days: 2 },
  { id: 11, name: "Organic Desi Wheat", category: "Grains", farmer: "Fatima Bibi", rating: 4.9, reviews: 48, city: "Swat", province: "KPK", price: 4300, mandi: 3900, tons: 2, verified: true, organic: true, days: 4 },
  { id: 12, name: "Green Chilli", category: "Vegetables", farmer: "Noor Muhammad", rating: 4.5, reviews: 63, city: "Kunri", province: "Sindh", price: 4800, mandi: 5000, tons: 4, verified: true, organic: false, days: 1 },
  { id: 13, name: "Pomegranate", category: "Fruits", farmer: "Aurangzeb", rating: 4.6, reviews: 52, city: "Quetta", province: "Balochistan", price: 6800, mandi: 7100, tons: 3, verified: true, organic: true, days: 2 },
  { id: 14, name: "Mustard Seed", category: "Cash crops", farmer: "Rao Shahid", rating: 4.3, reviews: 29, city: "Bahawalpur", province: "Punjab", price: 6100, mandi: 6000, tons: 7, verified: false, organic: false, days: 5 },
];
const MAX_PRICE = 10000;
const PAGE = 9;

const vsMandi = (c) => ((c.price - c.mandi) / c.mandi) * 100;

function MandiTag({ crop }) {
  const d = vsMandi(crop);
  if (d <= -1) return <Badge tone="leaf" icon={TrendingDown}>{Math.abs(d).toFixed(1)}% below mandi</Badge>;
  if (d >= 1) return <Badge tone="harvest" icon={TrendingUp}>{d.toFixed(1)}% above mandi</Badge>;
  return <Badge tone="neutral">At mandi rate</Badge>;
}

function CropCard({ crop, view, wished, inCart, compared, onWish, onCart, onCompare }) {
  const list = view === "list";
  return (
    <Card hover padding="p-0" className={cn("group flex h-full overflow-hidden", list ? "flex-col sm:flex-row" : "flex-col")}>
      <div className={cn("relative shrink-0 overflow-hidden bg-brand-50", list ? "h-48 sm:h-auto sm:w-64" : "h-48")}>
        <img
          src={image(IMG[crop.category])}
          alt={crop.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <Badge tone="neutral" className="absolute start-3 top-3 bg-white/95">{crop.category}</Badge>
        {crop.organic && <Badge tone="leaf" icon={Leaf} className="absolute bottom-3 start-3 bg-white/95">Organic</Badge>}
        <button
          onClick={onWish}
          aria-pressed={wished}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-card transition hover:scale-110"
        >
          <Heart className={cn("h-[18px] w-[18px]", wished ? "fill-danger text-danger" : "text-ink-soft")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-brand-900">{crop.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
            <Star className="h-4 w-4 fill-harvest-500 text-harvest-500" aria-hidden="true" /> {crop.rating}
            <span className="font-normal text-ink-muted">({crop.reviews})</span>
          </span>
        </div>

        <p className="mt-1.5 flex items-center gap-1 text-sm text-ink-soft">
          {crop.farmer} {crop.verified && <BadgeCheck className="h-4 w-4 text-success" aria-label="Verified farmer" />}
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {crop.city}, {crop.province}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden="true" /> Harvested {crop.days}d ago</span>
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="tabular text-2xl font-extrabold text-brand-600">Rs {crop.price.toLocaleString()}</p>
            <p className="text-xs text-ink-muted">per 40 kg · {crop.tons} tons available</p>
          </div>
          <MandiTag crop={crop} />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Button size="sm" className="flex-1" variant={inCart ? "outline" : "primary"} leftIcon={inCart ? Check : ShoppingCart} onClick={onCart}>
            {inCart ? `In cart (${inCart})` : "Add to cart"}
          </Button>
          <Button to="/login" variant="outline" size="icon" aria-label={`Message ${crop.farmer}`}><MessageCircle className="h-4 w-4" /></Button>
          <button
            onClick={onCompare}
            aria-pressed={compared}
            aria-label="Compare"
            className={cn("flex h-10 w-10 items-center justify-center rounded-xl border transition", compared ? "border-harvest-500 bg-harvest-50 text-harvest-600" : "border-line-strong text-ink-soft hover:border-brand-600 hover:text-brand-600")}
          >
            <Scale className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default function Marketplace() {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [dealsOnly, setDealsOnly] = useState(false);
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [limit, setLimit] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [wish, setWish] = useState([]);
  const [cart, setCart] = useState({});
  const [compare, setCompare] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const toggle = (setter) => (v) => { setter((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v])); setLimit(PAGE); };
  const toggleCat = toggle(setCats);
  const toggleProv = toggle(setProvinces);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = CROPS.filter((c) =>
      (!q || [c.name, c.city, c.farmer, c.category].some((s) => s.toLowerCase().includes(q))) &&
      (!cats.length || cats.includes(c.category)) &&
      (!provinces.length || provinces.includes(c.province)) &&
      c.price <= maxPrice &&
      (!verifiedOnly || c.verified) && (!organicOnly || c.organic) && (!dealsOnly || vsMandi(c) <= -1)
    );
    const s = {
      low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating, fresh: (a, b) => a.days - b.days, deals: (a, b) => vsMandi(a) - vsMandi(b),
    }[sort];
    return s ? [...list].sort(s) : list;
  }, [query, cats, provinces, maxPrice, verifiedOnly, organicOnly, dealsOnly, sort]);

  const activeCount = cats.length + provinces.length + (maxPrice < MAX_PRICE ? 1 : 0) + [verifiedOnly, organicOnly, dealsOnly].filter(Boolean).length;
  const clearAll = () => { setQuery(""); setCats([]); setProvinces([]); setMaxPrice(MAX_PRICE); setVerifiedOnly(false); setOrganicOnly(false); setDealsOnly(false); setSort("featured"); setLimit(PAGE); };
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const addCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const toggleWish = (id) => setWish((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  const toggleCompare = (id) => setCompare((c) => (c.includes(id) ? c.filter((x) => x !== id) : c.length < 3 ? [...c, id] : c));
  const compared = compare.map((id) => CROPS.find((c) => c.id === id));

  const Toggle = ({ checked, onChange, children }) => (
    <label className="flex cursor-pointer items-center justify-between gap-3 py-1.5 text-sm text-ink">
      {children}
      <input type="checkbox" checked={checked} onChange={(e) => { onChange(e.target.checked); setLimit(PAGE); }} className="peer sr-only" />
      <span className="relative h-6 w-11 shrink-0 rounded-full bg-line-strong transition peer-checked:bg-brand-600 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600/40 after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5" />
    </label>
  );

  const filters = (
    <div className="space-y-7">
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-soft">Category</h3>
        <div className="space-y-1">
          {CATS.map(({ name, icon: Icon }) => (
            <label key={name} className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm transition hover:bg-brand-50">
              <input type="checkbox" checked={cats.includes(name)} onChange={() => toggleCat(name)} className="h-4 w-4 rounded border-line-strong accent-[#0E5A52]" />
              <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              <span className="flex-1 font-medium">{name}</span>
              <span className="tabular text-xs text-ink-muted">{CROPS.filter((c) => c.category === name).length}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-soft">Province</h3>
        <div className="flex flex-wrap gap-2">
          {PROVINCES.map((p) => (
            <button key={p} onClick={() => toggleProv(p)} aria-pressed={provinces.includes(p)}
              className={cn("rounded-full border px-3.5 py-1.5 text-sm font-semibold transition", provinces.includes(p) ? "border-brand-600 bg-brand-600 text-white" : "border-line-strong bg-white text-ink-soft hover:border-brand-600")}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink-soft">Max price</h3>
          <span className="tabular text-sm font-bold text-brand-600">Rs {maxPrice.toLocaleString()}</span>
        </div>
        <input type="range" min={400} max={MAX_PRICE} step={100} value={maxPrice} aria-label="Maximum price"
          onChange={(e) => { setMaxPrice(Number(e.target.value)); setLimit(PAGE); }} className="w-full accent-[#0E5A52]" />
        <p className="mt-1 text-xs text-ink-muted">Price per 40 kg</p>
      </div>

      <div className="border-t border-line pt-4">
        <Toggle checked={verifiedOnly} onChange={setVerifiedOnly}>Verified farmers only</Toggle>
        <Toggle checked={organicOnly} onChange={setOrganicOnly}>Organic only</Toggle>
        <Toggle checked={dealsOnly} onChange={setDealsOnly}>Below mandi price</Toggle>
      </div>

      {activeCount > 0 && <Button variant="outline" className="w-full" onClick={clearAll}>Clear all filters ({activeCount})</Button>}
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-900 pb-16 pt-14 text-white">
        <div className="pointer-events-none absolute -end-20 -top-20 h-96 w-96 rounded-full bg-harvest-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -start-24 bottom-0 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-[#CFE3DF]"><Sprout className="h-4 w-4" aria-hidden="true" /> Marketplace</p>
              <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">Buy fresh crops directly from the farmers who grow them.</h1>
              <p className="mt-4 max-w-xl text-lg text-[#CFE3DF]">Compare prices against live mandi rates and deal with verified farmers. No middlemen.</p>
            </div>
            <dl className="grid grid-cols-3 gap-3 text-center">
              {[[CROPS.length, "Live listings"], [CROPS.filter((c) => c.verified).length, "Verified sellers"], [CROPS.filter((c) => vsMandi(c) <= -1).length, "Below mandi"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                  <dt className="sr-only">{l}</dt>
                  <dd className="tabular text-2xl font-extrabold text-white">{n}</dd>
                  <dd className="text-xs text-[#CFE3DF]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-8 max-w-3xl">
            <Search className="pointer-events-none absolute start-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setLimit(PAGE); }}
              placeholder="Search crop, city or farmer, e.g. “wheat Bhakkar”"
              aria-label="Search crops"
              className="w-full rounded-2xl border-0 bg-white py-4 ps-14 pe-5 text-base text-ink shadow-lift placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-harvest-500"
            />
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-ink-soft"><span className="tabular font-bold text-ink">{results.length}</span> crops found</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" className="lg:hidden" leftIcon={SlidersHorizontal} onClick={() => setFiltersOpen(true)}>
              Filters{activeCount ? ` (${activeCount})` : ""}
            </Button>
            <select aria-label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)} className="input w-auto py-2 text-sm font-medium">
              <option value="featured">Featured</option>
              <option value="deals">Best deals vs mandi</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="rating">Top rated</option>
              <option value="fresh">Freshest harvest</option>
            </select>
            <div className="inline-flex rounded-xl bg-surface-alt p-1">
              {[["grid", LayoutGrid, "Grid view"], ["list", List, "List view"]].map(([k, Icon, label]) => (
                <button key={k} onClick={() => setView(k)} aria-label={label} aria-pressed={view === k}
                  className={cn("flex h-8 w-9 items-center justify-center rounded-lg transition", view === k ? "bg-white text-brand-600 shadow-card" : "text-ink-muted hover:text-brand-600")}>
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <Button to="/buyer/cart" variant="primary" size="sm" leftIcon={ShoppingCart}>Cart{cartCount ? ` (${cartCount})` : ""}</Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
          {/* SIDEBAR (desktop) */}
          <aside className="hidden lg:block">
            <Card className="sticky top-24">{filters}</Card>
          </aside>

          {/* LISTINGS */}
          <div>
            {results.length === 0 ? (
              <Card className="mx-auto max-w-lg py-14 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-harvest-50 text-harvest-600"><Package className="h-7 w-7" aria-hidden="true" /></span>
                <h2 className="text-xl font-bold">No crops found</h2>
                <p className="mt-2 text-ink-soft">Try a different search or remove some filters.</p>
                <Button className="mt-6" onClick={clearAll}>Clear all filters</Button>
              </Card>
            ) : (
              <>
                <div className={cn("grid gap-6", view === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1")}>
                  {results.slice(0, limit).map((crop, i) => (
                    <motion.div key={crop.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}>
                      <CropCard
                        crop={crop} view={view}
                        wished={wish.includes(crop.id)} inCart={cart[crop.id]} compared={compare.includes(crop.id)}
                        onWish={() => toggleWish(crop.id)} onCart={() => addCart(crop.id)} onCompare={() => toggleCompare(crop.id)}
                      />
                    </motion.div>
                  ))}
                </div>
                {limit < results.length && (
                  <div className="mt-10 text-center">
                    <Button variant="outline" size="lg" onClick={() => setLimit((l) => l + PAGE)}>Load more crops</Button>
                    <p className="mt-2 text-sm text-ink-muted">Showing {Math.min(limit, results.length)} of {results.length}</p>
                  </div>
                )}
              </>
            )}

            <p className="mt-10 text-sm text-ink-muted">
              Compare badges use the latest <Link to="/mandi-prices" className="font-semibold text-brand-600 underline-offset-2 hover:underline">mandi prices</Link>. Prices shown are per 40 kg.
            </p>
          </div>
        </div>
      </Container>

      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-brand-900/50" onClick={() => setFiltersOpen(false)} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.25 }}
              className="absolute inset-y-0 start-0 flex w-[88%] max-w-sm flex-col bg-surface-page shadow-lift" role="dialog" aria-label="Filters">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-50"><X className="h-5 w-5" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">{filters}</div>
              <div className="border-t border-line p-4"><Button className="w-full" onClick={() => setFiltersOpen(false)}>Show {results.length} crops</Button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPARE BAR */}
      <AnimatePresence>
        {compare.length > 0 && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 shadow-lift backdrop-blur">
            <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-ink-soft">Compare ({compare.length}/3):</span>
                {compared.map((c) => (
                  <span key={c.id} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 py-1 pe-1.5 ps-3 text-sm font-semibold text-brand-700">
                    {c.name}
                    <button onClick={() => toggleCompare(c.id)} aria-label={`Remove ${c.name}`} className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-brand-100"><X className="h-3.5 w-3.5" /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setCompare([])}>Clear</Button>
                <Button size="sm" leftIcon={Scale} disabled={compare.length < 2} onClick={() => setShowCompare(true)}>Compare now</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPARE DIALOG */}
      <AnimatePresence>
        {showCompare && compared.length >= 2 && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-brand-900/60" onClick={() => setShowCompare(false)} />
            <motion.div initial={{ scale: 0.96, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 16 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl2 bg-white p-6 shadow-lift" role="dialog" aria-label="Compare crops">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-extrabold">Compare crops</h2>
                <button onClick={() => setShowCompare(false)} aria-label="Close" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-50"><X className="h-5 w-5" /></button>
              </div>
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr><th className="w-32" />{compared.map((c) => <th key={c.id} className="px-3 pb-3 text-start align-bottom text-base font-bold text-brand-900">{c.name}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ["Price / 40 kg", (c) => `Rs ${c.price.toLocaleString()}`, (c) => c.price, "min"],
                    ["Mandi rate", (c) => `Rs ${c.mandi.toLocaleString()}`],
                    ["Vs mandi", (c) => `${vsMandi(c) > 0 ? "+" : ""}${vsMandi(c).toFixed(1)}%`, (c) => vsMandi(c), "min"],
                    ["Available", (c) => `${c.tons} tons`, (c) => c.tons, "max"],
                    ["Rating", (c) => `${c.rating} (${c.reviews})`, (c) => c.rating, "max"],
                    ["Farmer", (c) => c.farmer + (c.verified ? " ✓" : "")],
                    ["Location", (c) => `${c.city}, ${c.province}`],
                    ["Harvested", (c) => `${c.days} days ago`, (c) => c.days, "min"],
                    ["Organic", (c) => (c.organic ? "Yes" : "No")],
                  ].map(([label, show, num, best]) => {
                    const nums = num ? compared.map(num) : [];
                    const target = best === "min" ? Math.min(...nums) : Math.max(...nums);
                    return (
                      <tr key={label} className="border-t border-line">
                        <td className="py-3 pe-3 font-semibold text-ink-soft">{label}</td>
                        {compared.map((c) => (
                          <td key={c.id} className={cn("px-3 py-3", num && num(c) === target && "font-bold text-success")}>{show(c)}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-ink-muted">Green marks the best value in each row.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}