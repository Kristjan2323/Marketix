import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {eyebrow && (
        <div className={cn(
          "inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent mb-4",
          !centered && "before:content-[''] before:w-[30px] before:h-px before:bg-accent"
        )}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] text-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-[1.05rem] max-w-[550px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
