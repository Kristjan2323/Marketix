"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/constants";

const serviceEmojis = ["📱", "🎨", "🎯", "🎬", "📈", "✍️"];

export function ServicesContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.95] text-fg">
              Full-Service Creative Marketing
            </h1>
            <p className="mt-6 text-lg text-muted md:text-xl max-w-xl mx-auto">
              Everything your brand needs to grow — strategy, execution, and optimization, all under one roof.
            </p>
          </div>
        </Container>
      </section>

      {/* Service detail blocks */}
      <section className="pb-24">
        <Container>
          <div className="space-y-24">
            {services.map((service, i) => {
              const isReversed = i % 2 === 1;
              return (
                <AnimateOnScroll key={service.title}>
                  <div className={`flex flex-col gap-12 lg:flex-row lg:items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-accent/10 bg-glass text-2xl">
                        {serviceEmojis[i]}
                      </div>
                      <h2 className="font-display text-3xl font-bold text-fg">
                        {service.title}
                      </h2>
                      <p className="text-muted leading-relaxed text-lg">
                        {service.description}
                      </p>
                      {service.deliverables && (
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-muted">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Visual */}
                    <div className="flex-1">
                      <div className="aspect-square rounded-card bg-card flex items-center justify-center relative overflow-hidden">
                        <div className="text-7xl">{serviceEmojis[i]}</div>
                        <span className="absolute bottom-2 right-4 font-display text-[6rem] font-extrabold text-white/[0.03] leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </PageTransition>
  );
}
