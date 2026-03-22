"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { caseStudies } from "@/lib/constants";

const gradients = [
  "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  "bg-gradient-to-br from-[#2d1b30] via-[#1a0e2e] to-[#0a0a1e]",
  "bg-gradient-to-br from-[#1b2d1e] via-[#0e2e1a] to-[#0a1e0e]",
  "bg-gradient-to-br from-[#2d2b1b] via-[#2e1e0e] to-[#1e1a0a]",
];

export function CaseStudies() {
  const featured = caseStudies.slice(0, 4);

  return (
    <section className="py-32 bg-[#0e0e0e]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that speak volumes."
            subtitle="A curated selection of our recent collaborations with ambitious brands."
          />
        </AnimateOnScroll>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((study, i) => (
            <AnimateOnScroll key={study.slug} delay={i * 0.1}>
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-card aspect-[16/10] bg-card cursor-pointer">
                  {/* Background */}
                  <div className={`absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${gradients[i % gradients.length]}`} />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent z-[1]" />

                  {/* Number */}
                  <span className="absolute top-6 right-6 font-display text-sm font-extrabold text-accent opacity-60 z-[2]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content — revealed on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-[2] translate-y-2.5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-[0.7rem] uppercase tracking-[0.12em] text-accent font-semibold mb-2">
                      {study.category}
                    </div>
                    <div className="font-display text-2xl font-bold text-fg">
                      {study.client}
                    </div>
                    <div className="text-sm text-muted mt-1">{study.tagline}</div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            View All Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
