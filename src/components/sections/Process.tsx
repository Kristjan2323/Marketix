"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { processSteps } from "@/lib/constants";

const stepEmojis = ["🧭", "💡", "🚀", "📊"];

export function Process() {
  return (
    <section className="py-32 bg-bg">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="How We Work"
            title="Our proven process."
            subtitle="A structured approach that consistently delivers exceptional results."
          />
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-accent via-accent2 to-accent" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[14px] border border-accent/10 bg-glass text-2xl">
                    {stepEmojis[i]}
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-fg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
