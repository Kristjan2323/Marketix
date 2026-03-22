"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import type { CaseStudy } from "@/types";

interface Props {
  study: CaseStudy;
  nextStudy: CaseStudy;
}

export function CaseStudyDetail({ study, nextStudy }: Props) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">{study.category}</Badge>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] text-fg">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-muted">
              {study.client} — {study.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Stats row */}
      <section className="py-12 border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {study.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-extrabold text-accent lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Content sections */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            <AnimateOnScroll>
              <div>
                <h2 className="font-display text-2xl font-bold text-fg mb-4">The Challenge</h2>
                <p className="text-muted leading-relaxed text-lg">{study.challenge}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <h2 className="font-display text-2xl font-bold text-fg mb-4">Our Solution</h2>
                <p className="text-muted leading-relaxed text-lg">{study.solution}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <h2 className="font-display text-2xl font-bold text-fg mb-4">The Results</h2>
                <p className="text-muted leading-relaxed text-lg">{study.results}</p>
              </div>
            </AnimateOnScroll>

            {/* Testimonial */}
            <AnimateOnScroll>
              <div className="rounded-card border border-white/[0.04] bg-card p-8 lg:p-12 text-center">
                <div className="font-display text-[4rem] leading-none text-accent/30 mb-2">&ldquo;</div>
                <blockquote className="text-xl font-medium text-fg leading-relaxed italic">
                  {study.testimonial.quote}
                </blockquote>
                <p className="mt-4 font-display font-bold text-fg">{study.testimonial.name}</p>
                <p className="text-sm text-muted">{study.testimonial.title}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Next case study */}
      <section className="py-16 border-t border-white/[0.04]">
        <Container>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">Next Case Study</p>
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group inline-flex flex-col items-center gap-2"
            >
              <span className="font-display text-2xl font-bold text-fg group-hover:text-accent transition-colors">
                {nextStudy.client}
              </span>
              <span className="flex items-center gap-2 text-accent text-sm">
                Read Case Study <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-card p-12 text-center lg:p-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,255,46,0.06),transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-fg">
                  Want Results Like These?
                </h2>
                <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                  Let&apos;s discuss how we can drive similar growth for your business.
                </p>
                <div className="mt-8">
                  <Button href="/contact" size="lg">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </PageTransition>
  );
}
