"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import { CTA } from "@/components/sections/CTA";
import { caseStudies } from "@/lib/constants";
import { motion } from "framer-motion";

const categories = ["All", "SEO", "PPC", "Social", "Content"];

const gradients = [
  "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  "bg-gradient-to-br from-[#2d1b30] via-[#1a0e2e] to-[#0a0a1e]",
  "bg-gradient-to-br from-[#1b2d1e] via-[#0e2e1a] to-[#0a1e0e]",
  "bg-gradient-to-br from-[#2d2b1b] via-[#2e1e0e] to-[#1e1a0a]",
];

export function CaseStudiesContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.category === active);

  return (
    <PageTransition>
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.95] text-fg">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-muted md:text-xl max-w-xl mx-auto">
              Proven results across industries. See how our strategies have driven real growth.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-accent text-bg shadow-[0_0_20px_rgba(200,255,46,0.2)]"
                    : "border border-white/[0.08] text-muted hover:text-fg hover:border-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-5 md:grid-cols-2">
            {filtered.map((study, i) => (
              <AnimateOnScroll key={study.slug} delay={i * 0.1}>
                <Link href={`/case-studies/${study.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-card aspect-[16/10] bg-card cursor-pointer">
                    <div className={`absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${gradients[i % gradients.length]}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent z-[1]" />
                    <span className="absolute top-6 right-6 font-display text-sm font-extrabold text-accent opacity-60 z-[2]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute top-6 left-6 z-[2]">
                      <span className="rounded-full border border-accent/20 bg-glass px-3 py-1 text-[0.7rem] font-medium text-accent">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-[2] translate-y-2.5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-muted">{study.client}</span>
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[0.7rem] font-medium text-accent">{study.metric}</span>
                      </div>
                      <div className="font-display text-xl font-bold text-fg flex items-center gap-2">
                        {study.tagline} <ArrowRight className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </PageTransition>
  );
}
