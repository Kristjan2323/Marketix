"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { services } from "@/lib/constants";

const serviceEmojis = ["🎨", "📱", "✏️", "🌐", "📊", "🎬"];
const serviceTags: string[][] = [
  ["Technical SEO", "Keyword Strategy", "Link Building"],
  ["Paid Media", "SEO/SEM", "Analytics"],
  ["Social Media", "Copywriting", "Video"],
  ["UI/UX", "Development", "CRO"],
  ["Funnels", "A/B Testing", "Automation"],
  ["Brand Films", "Motion", "Editing"],
];

export function Services() {
  return (
    <section className="py-32 bg-gradient-to-b from-bg to-[#0e0e0e]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="What We Do"
            title="Services built for growth."
            subtitle="End-to-end marketing solutions tailored to ambitious brands ready to scale."
          />
        </AnimateOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-card border border-white/[0.04] bg-card p-10 transition-all duration-500 hover:border-accent/[0.15] hover:-translate-y-2 hover:bg-card-hover cursor-default">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute top-2 right-6 font-display text-[4rem] font-extrabold text-white/[0.03] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] border border-accent/10 bg-glass text-2xl">
                  {serviceEmojis[i]}
                </div>

                <h3 className="font-display text-[1.3rem] font-bold text-fg mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {serviceTags[i]?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] px-3 py-1 text-[0.7rem] uppercase tracking-[0.06em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
