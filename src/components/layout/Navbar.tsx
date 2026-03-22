"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 100);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.04] backdrop-blur-[20px] bg-bg/70"
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-20">
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tight text-fg"
            >
              Market<span className="text-accent">ix</span>
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[0.85rem] font-medium uppercase tracking-[0.08em] text-fg/80 transition-colors hover:text-fg"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.85rem] font-semibold tracking-[0.04em] text-bg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,255,46,0.3)] md:block"
              >
                Let&apos;s Talk
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-full p-2 text-fg/80 hover:text-fg md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
