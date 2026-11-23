import { forwardRef, useId } from "react";
import { cn } from "../../utils/cn";

function FieldShell({ id, label, error, hint, children }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
          {label}
        </label>
      )}
      {children}
      {error ? (
        <p id={`${id}-msg`} role="alert" className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-msg`} className="mt-1.5 text-sm text-ink-muted">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

const errorClasses = "border-danger focus:border-danger focus:ring-danger/25";

export const Input = forwardRef(function Input({ label, error, hint, icon: Icon, className, id, ...props }, ref) {
  const uid = useId();
  const fid = id || uid;
  return (
    <FieldShell id={fid} label={label} error={error} hint={hint}>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
        )}
        <input
          ref={ref}
          id={fid}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${fid}-msg` : undefined}
          className={cn("input", Icon && "ps-10", error && errorClasses, className)}
          {...props}
        />
      </div>
    </FieldShell>
  );
});

export const Textarea = forwardRef(function Textarea({ label, error, hint, className, id, rows = 4, ...props }, ref) {
  const uid = useId();
  const fid = id || uid;
  return (
    <FieldShell id={fid} label={label} error={error} hint={hint}>
      <textarea
        ref={ref}
        id={fid}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error || hint ? `${fid}-msg` : undefined}
        className={cn("input resize-y", error && errorClasses, className)}
        {...props}
      />
    </FieldShell>
  );
});

export const Select = forwardRef(function Select({ label, error, hint, options = [], placeholder, className, id, ...props }, ref) {
  const uid = useId();
  const fid = id || uid;
  return (
    <FieldShell id={fid} label={label} error={error} hint={hint}>
      <select
        ref={ref}
        id={fid}
        aria-invalid={!!error}
        aria-describedby={error || hint ? `${fid}-msg` : undefined}
        className={cn("input appearance-none", error && errorClasses, className)}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
});
