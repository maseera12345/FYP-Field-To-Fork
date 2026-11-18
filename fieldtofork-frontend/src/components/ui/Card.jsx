import { cn } from "../../utils/cn";

export default function Card({ hover = false, padding = "p-5 sm:p-6", className, children, ...props }) {
  return (
    <div className={cn("card", hover && "card-hover", padding, className)} {...props}>
      {children}
    </div>
  );
}
