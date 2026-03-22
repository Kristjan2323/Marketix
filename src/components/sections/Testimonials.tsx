"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { testimonials } from "@/lib/constants";

const avatarGradients = [
  "bg-gradient-to-br from-accent to-[#7b61ff]",
  "bg-gradient-to-br from-accent2 to-[#ff9a5c]",
  "bg-gradient-to-br from-[#7b61ff] to-[#61b5ff]",
  "bg-gradient-to-br from-accent to-accent2",
];

export function Testimonials() {
  return (
    <section className="py-32 bg-bg relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent to-transparent" />

      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Client Love"
            title="What they say about us."
            centered
          />
        </AnimateOnScroll>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="rounded-card border border-white/[0.04] bg-card p-8">
                <div className="font-display text-[4rem] leading-none text-accent/30 mb-2">
                  &ldquo;
                </div>
                <div className="text-xs text-accent tracking-[0.15em] mb-4">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-muted text-[0.95rem] italic leading-[1.8] mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-bg ${avatarGradients[i]}`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg">{t.name}</div>
                    <div className="text-xs text-muted">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
