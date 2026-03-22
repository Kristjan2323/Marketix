import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-fg">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border border-white/[0.08] bg-card px-4 py-3.5 text-fg placeholder:text-muted/50 transition-all duration-200",
            "focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/10",
            error && "border-accent2 focus:border-accent2 focus:ring-accent2/10",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-accent2">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
