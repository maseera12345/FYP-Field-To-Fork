import { useId, useState } from "react";
import { cn } from "../../utils/cn";

// Lightweight SVG charts (no extra npm package needed).
// File path: src/components/charts/Charts.jsx

export const fmtRs = (n) => `Rs ${Math.round(n).toLocaleString()}`;
const shortDate = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
const longDate = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Tiny trend line used inside table rows. */
export function Sparkline({ data, className }) {
  const w = 96;
  const h = 32;
  const min = Math.min(...data);
  const span = Math.max(...data) - min || 1;
  const d = data
    .map((v, i) => `${i ? "L" : "M"}${((i / (data.length - 1)) * w).toFixed(1)} ${(h - 3 - ((v - min) / span) * (h - 6)).toFixed(1)}`)
    .join(" ");
  const up = data[data.length - 1] >= data[0];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("h-8 w-24", className)} aria-hidden="true">
      <path d={d} fill="none" stroke={up ? "#2E9E5B" : "#D64545"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Interactive area chart. data = [{ date: Date, value: number }] */
export function PriceChart({ data, className }) {
  const gid = useId().replace(/:/g, "");
  const [hover, setHover] = useState(null);

  const W = 800;
  const H = 320;
  const P = { l: 64, r: 20, t: 20, b: 36 };
  const vals = data.map((d) => d.value);
  const rawMin = Math.min(...vals);
  const rawMax = Math.max(...vals);
  const pad = (rawMax - rawMin) * 0.15 || rawMax * 0.05;
  const lo = rawMin - pad;
  const hi = rawMax + pad;
  const x = (i) => P.l + (i / (data.length - 1)) * (W - P.l - P.r);
  const y = (v) => P.t + (1 - (v - lo) / (hi - lo)) * (H - P.t - P.b);

  const line = data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(" ");
  const area = `${line} L${x(data.length - 1).toFixed(1)} ${H - P.b} L${x(0).toFixed(1)} ${H - P.b} Z`;
  const yTicks = [0, 1, 2, 3, 4].map((i) => lo + ((hi - lo) * i) / 4);
  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(t * (data.length - 1)));
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const rel = ((e.clientX - r.left) / r.width) * W;
    const i = Math.round(((rel - P.l) / (W - P.l - P.r)) * (data.length - 1));
    setHover(Math.max(0, Math.min(data.length - 1, i)));
  };

  const hp = hover !== null ? data[hover] : null;
  const tipLeft = hover !== null ? Math.min(88, Math.max(12, (x(hover) / W) * 100)) : 0;
  const tipTop = hover !== null ? (y(hp.value) / H) * 100 : 0;

  return (
    <div
      className={cn("relative w-full touch-pan-y select-none", className)}
      onPointerMove={onMove}
      onPointerDown={onMove}
      onPointerLeave={() => setHover(null)}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Price trend chart">
        <defs>
          <linearGradient id={`g${gid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E5A52" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0E5A52" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {yTicks.map((t) => (
          <g key={t}>
            <line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} stroke="#E4DFD2" strokeDasharray="3 5" />
            <text x={P.l - 10} y={y(t) + 4} textAnchor="end" fontSize="12" fill="#7A8782">
              {Math.round(t).toLocaleString()}
            </text>
          </g>
        ))}

        {xTicks.map((i) => (
          <text key={i} x={x(i)} y={H - 10} textAnchor={i === 0 ? "start" : i === data.length - 1 ? "end" : "middle"} fontSize="12" fill="#7A8782">
            {shortDate(data[i].date)}
          </text>
        ))}

        <line x1={P.l} x2={W - P.r} y1={y(avg)} y2={y(avg)} stroke="#F2A93B" strokeWidth="1.5" strokeDasharray="6 5" />
        <text x={W - P.r} y={y(avg) - 6} textAnchor="end" fontSize="12" fontWeight="600" fill="#D98E1F">
          Average {Math.round(avg).toLocaleString()}
        </text>

        <path d={area} fill={`url(#g${gid})`} />
        <path d={line} fill="none" stroke="#0E5A52" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

        {hp && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={P.t} y2={H - P.b} stroke="#0E5A52" strokeOpacity="0.35" />
            <circle cx={x(hover)} cy={y(hp.value)} r="6" fill="#fff" stroke="#0E5A52" strokeWidth="3" />
          </g>
        )}
      </svg>

      {hp && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[130%] rounded-xl bg-brand-900 px-3 py-2 text-white shadow-lift"
          style={{ left: `${tipLeft}%`, top: `${tipTop}%` }}
        >
          <p className="text-xs text-[#CFE3DF]">{longDate(hp.date)}</p>
          <p className="tabular text-sm font-bold">{fmtRs(hp.value)}</p>
        </div>
      )}
    </div>
  );
}

/** Horizontal comparison bars. items = [{ label, value }]. Highest = green, lowest = amber. */
export function CityBars({ items }) {
  const values = items.map((i) => i.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const base = min * 0.85; // bars start slightly below the lowest price so differences are visible
  const sorted = [...items].sort((a, b) => b.value - a.value);

  return (
    <div>
      <ul className="space-y-4">
        {sorted.map((it) => {
          const width = Math.max(6, ((it.value - base) / (max - base)) * 100);
          const isMax = it.value === max;
          const isMin = it.value === min;
          return (
            <li key={it.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-900">{it.label}</span>
                <span className="tabular font-bold text-ink">{fmtRs(it.value)}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-surface-alt">
                <div
                  className={cn("h-full rounded-full transition-all duration-700", isMax ? "bg-leaf-500" : isMin ? "bg-harvest-500" : "bg-brand-500")}
                  style={{ width: `${width}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-ink-muted">Bars start at {fmtRs(base)} so small differences are easy to see.</p>
    </div>
  );
}
