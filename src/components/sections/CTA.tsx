"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-card p-12 lg:p-20 text-center">
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,255,46,0.06),transparent_60%)]" />

            {/* Orbs */}
            <div className="absolute -top-24 -right-12 h-[300px] w-[300px] rounded-full bg-accent/15 blur-[100px]" />
            <div className="absolute -bottom-24 -left-12 h-[300px] w-[300px] rounded-full bg-accent2/15 blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent mb-4 justify-center">
                Start Something Great
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] text-fg max-w-[700px] mx-auto mb-4">
                Ready to make your brand{" "}
                <span className="text-accent">unforgettable</span>?
              </h2>
              <p className="text-muted text-[1.05rem] max-w-[500px] mx-auto mb-8">
                Let&apos;s chat about your next big move. We&apos;re always excited to meet ambitious brands with bold ideas.
              </p>
              <Button href="/contact" size="lg">
                Get in Touch <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
