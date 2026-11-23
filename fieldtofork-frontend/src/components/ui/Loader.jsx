import { Loader2 } from "lucide-react";
import { WheatBadge } from "../brand/Logo";
import { cn } from "../../utils/cn";

export function Spinner({ className }) {
  return <Loader2 className={cn("h-5 w-5 animate-spin text-brand-600", className)} aria-label="Loading" />;
}

export function Skeleton({ className }) {
  return <div className={cn("animate-pulse rounded-lg bg-surface-alt", className)} aria-hidden="true" />;
}

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="animate-pulse">
        <WheatBadge size={56} />
      </div>
    </div>
  );
}
