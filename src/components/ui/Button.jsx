import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  cta: "bg-harvest-500 text-ink hover:bg-harvest-600",
  outline: "border border-brand-600 text-brand-600 hover:bg-brand-50",
  "outline-light": "border border-white/60 text-white hover:bg-white/10",
  ghost: "text-brand-600 hover:bg-brand-50",
  danger: "bg-danger text-white hover:bg-[#b93838]",
};

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
  icon: "h-10 w-10",
};

/**
 * Renders a <Link> when `to` is given, an <a> when `href` is given, otherwise a <button>.
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  children,
  disabled,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : LeftIcon && <LeftIcon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {RightIcon && !loading && (
        <RightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{content}</a>;
  return (
    <button type={props.type || "button"} className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
