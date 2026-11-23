import { cn } from "../../utils/cn";

const tones = {
  brand: "bg-brand-50 text-brand-700",
  leaf: "bg-leaf-50 text-[#2F6B25]",
  harvest: "bg-harvest-50 text-[#8A5A0A]",
  danger: "bg-[#FBE9E9] text-[#A32D2D]",
  warning: "bg-[#FFF4D6] text-[#7A5A00]",
  info: "bg-[#E4F0FB] text-[#1D5A9A]",
  neutral: "bg-surface-alt text-ink-soft",
};

export default function Badge({ tone = "brand", icon: Icon, className, children }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone], className)}>
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
