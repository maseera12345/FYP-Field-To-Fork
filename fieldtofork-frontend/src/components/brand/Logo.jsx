// FieldToFork logo: wheat ear in a badge + "FieldToFork" wordmark.
const LEAF_ROWS = [-12, 0, 12];

export function WheatBadge({ size = 40, theme = "light", shape = "circle", className = "" }) {
  const dark = theme === "dark";
  const bg = dark ? "#FAF8F3" : "#0E5A52";
  const stem = dark ? "#0E5A52" : "#FFFFFF";

  return (
    <svg viewBox="-40 -40 80 80" width={size} height={size} role="img" aria-label="FieldToFork" className={className}>
      {shape === "square" ? (
        <rect x="-40" y="-40" width="80" height="80" rx="18" fill={bg} />
      ) : (
        <circle r="36" fill={bg} />
      )}
      <line x1="0" y1="-20" x2="0" y2="26" stroke={stem} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="0" cy="-24" rx="3.5" ry="8" fill="#F2A93B" />
      {LEAF_ROWS.map((y) => (
        <g key={y}>
          <ellipse cx="-8" cy={y} rx="9" ry="4" fill="#F2A93B" transform={`rotate(-40 -8 ${y})`} />
          <ellipse cx="8" cy={y} rx="9" ry="4" fill="#F2A93B" transform={`rotate(40 8 ${y})`} />
        </g>
      ))}
    </svg>
  );
}

/**
 * variant: "full" | "icon"   theme: "light" (light bg) | "dark" (dark teal bg)
 * size: badge size in px     tagline: show "Direct farmer-buyer trade"
 */
export default function Logo({ variant = "full", theme = "light", size = 40, tagline = false, className = "" }) {
  const dark = theme === "dark";
  if (variant === "icon") return <WheatBadge size={size} theme={theme} className={className} />;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <WheatBadge size={size} theme={theme} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold tracking-tight ${dark ? "text-white" : "text-brand-600"}`}
          style={{ fontSize: size * 0.55 }}
        >
          Field<span className={dark ? "text-harvest-500" : "text-harvest-600"}>To</span>Fork
        </span>
        {tagline && (
          <span
            className={`mt-1 font-medium ${dark ? "text-brand-100" : "text-ink-soft"}`}
            style={{ fontSize: Math.max(size * 0.2, 10) }}
          >
            Direct farmer-buyer trade
          </span>
        )}
      </span>
    </span>
  );
}
