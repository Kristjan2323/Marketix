"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/shared/GradientBlob";

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Background orbs */}
      <GradientBlob className="top-[-10%] right-[-5%] h-[500px] w-[500px]" color="accent" />
      <GradientBlob className="bottom-[-15%] left-[-10%] h-[400px] w-[400px]" color="accent2" />
      <GradientBlob className="top-[40%] left-[40%] h-[300px] w-[300px] !opacity-20" color="purple" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 w-full">
        {/* Headline */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              We Build
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Brands That
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-accent">Break Through</span>{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #f0ece4" }}>
                Noise
              </span>
            </motion.span>
          </span>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[1.15rem] text-muted max-w-[500px] mb-10"
        >
          A creative marketing studio that blends strategy, design &amp; technology to craft unforgettable brand experiences that drive real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="/case-studies">
            View Our Work <ArrowRight className="h-[18px] w-[18px]" />
          </Button>
          <Button href="/contact" variant="outline">
            Start a Project
          </Button>
        </motion.div>

      </Container>
    </section>
  );
}
