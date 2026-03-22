"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/lib/constants";

function StatItem({ value, prefix, suffix, label, inView }: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold text-accent lg:text-5xl">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-muted lg:text-sm">{label}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 border-y border-white/[0.04]"
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
