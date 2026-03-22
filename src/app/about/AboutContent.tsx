"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import { CTA } from "@/components/sections/CTA";

const values = [
  { emoji: "⚡", title: "Strategy-First", description: "Every pixel, every word is backed by data-driven insight and creative instinct." },
  { emoji: "🎯", title: "Results-Obsessed", description: "Vanity metrics are out. We chase outcomes that move your bottom line." },
  { emoji: "🤝", title: "True Partners", description: "We integrate with your team like an extension, not an outside vendor." },
];

export function AboutContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.95] text-fg">
              About Marketix
            </h1>
            <p className="mt-6 text-lg text-muted md:text-xl max-w-xl mx-auto">
              We&apos;re a collective of strategists, designers, and storytellers obsessed with creating brands that resonate.
            </p>
          </div>
        </Container>
      </section>

      {/* Story — 2 column */}
      <section className="pb-24">
        <Container>
          <AnimateOnScroll>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Visual */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden bg-card">
                  <Image
                    src="/images/team/izi.png"
                    alt="Izmir Akulli — Founder of Marketix"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-1">
                  <p className="font-heading text-lg font-bold text-fg">Izmir Akulli</p>
                  <p className="text-sm text-accent mb-2">Founder</p>
                  <p className="text-sm text-muted leading-relaxed">
                    The visionary behind Marketix, Izmir built this agency from the ground up with one goal — to help brands grow through smart strategy, bold creativity, and real results.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent before:content-[''] before:w-[30px] before:h-px before:bg-accent">
                  Who We Are
                </div>
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] text-fg">
                  We don&apos;t just market.<br />
                  We <span className="text-accent">move</span> people.
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  Marketix is a collective of strategists, designers, and storytellers obsessed with creating brands that resonate. We believe great marketing isn&apos;t about noise — it&apos;s about meaning.
                </p>
                <p className="text-muted leading-relaxed">
                  What started as a two-person consultancy has grown into a full-service creative studio serving 200+ clients worldwide. Our 97% retention rate tells the story — we let results do the talking.
                </p>

                {/* Values */}
                <div className="flex flex-col gap-6 pt-4">
                  {values.map((v) => (
                    <div key={v.title} className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-[10px] border border-accent/10 bg-glass text-xl">
                        {v.emoji}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-fg">{v.title}</h4>
                        <p className="text-sm text-muted">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CTA />
    </PageTransition>
  );
}
