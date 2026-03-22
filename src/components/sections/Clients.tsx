"use client";

import { clientLogos } from "@/lib/constants";

export function Clients() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-6 border-y border-white/[0.04] overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex items-center whitespace-nowrap" style={{ width: "max-content" }}>
          {logos.map((name, i) => (
            <span
              key={i}
              className="px-8 font-display text-[1.2rem] font-bold uppercase tracking-[0.15em] text-muted/40 select-none"
            >
              <span className="mr-8 text-[0.6rem] text-accent align-middle">&#x25C6;</span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
