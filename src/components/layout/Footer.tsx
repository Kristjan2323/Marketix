import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
];

const serviceLinks = [
  { label: "Brand Identity", href: "/services" },
  { label: "Digital Strategy", href: "/services" },
  { label: "Content Creation", href: "/services" },
  { label: "Web Design", href: "/services" },
];

const socialLinks = [
  { label: "\ud835\udd4f", title: "Twitter" },
  { label: "ig", title: "Instagram" },
  { label: "in", title: "LinkedIn" },
  { label: "dr", title: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-16 pb-8">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-4 block font-display text-xl font-extrabold tracking-tight text-fg"
            >
              MARK<span className="text-accent">TX</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-[300px]">
              A creative marketing studio crafting brands that break through the noise. Based everywhere, working globally.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.12em] text-fg mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.12em] text-fg mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.12em] text-fg mb-5">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Marketix Studio. All rights reserved.
          </span>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href="#"
                title={link.title}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
