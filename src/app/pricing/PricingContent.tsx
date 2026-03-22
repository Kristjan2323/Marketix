"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { pricingTiers, pricingFeatures, faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.95] text-fg">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-muted md:text-xl max-w-xl mx-auto">
              Transparent pricing for every stage of growth. No hidden fees, no surprises.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-card border p-8 h-full flex flex-col",
                    tier.highlighted
                      ? "border-accent/30 bg-card scale-[1.02] shadow-[0_0_40px_rgba(200,255,46,0.08)]"
                      : "border-white/[0.04] bg-card"
                  )}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[0.7rem] font-semibold text-bg">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-fg">{tier.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-extrabold text-fg">
                        {tier.price}
                      </span>
                      {tier.price !== "Custom" && (
                        <span className="text-muted">/mo</span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted">{tier.description}</p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-y border-white/[0.04]">
        <Container>
          <AnimateOnScroll>
            <h2 className="font-display text-3xl font-bold text-fg text-center mb-12">
              Compare Plans
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="py-4 text-left text-sm font-medium text-muted">Feature</th>
                    <th className="py-4 text-center text-sm font-medium text-muted">Starter</th>
                    <th className="py-4 text-center text-sm font-semibold text-accent">Growth</th>
                    <th className="py-4 text-center text-sm font-medium text-muted">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.04]">
                      <td className="py-4 text-sm font-medium text-fg">{row.feature}</td>
                      <td className="py-4 text-center text-sm text-muted">
                        {row.starter === "—" ? <span className="text-white/10">—</span> : row.starter}
                      </td>
                      <td className="py-4 text-center text-sm text-fg font-medium">
                        {row.growth === "—" ? <span className="text-white/10">—</span> : row.growth}
                      </td>
                      <td className="py-4 text-center text-sm text-muted">
                        {row.enterprise === "—" ? <span className="text-white/10">—</span> : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <FAQ faqs={faqs} />
      <CTA />
    </PageTransition>
  );
}
