# Marketix — Digital Marketing Agency Website

## Project Overview

**Marketix** is a modern, high-converting digital marketing agency website built with **Next.js 14 (App Router)**. The site must feel premium, fast, and visually striking — positioning Marketix as a top-tier agency. Design should be bold, clean, and contemporary with smooth animations, strong typography, and generous whitespace.

---

## Tech Stack

| Layer              | Technology                                                    |
| ------------------ | ------------------------------------------------------------- |
| Framework          | **Next.js 14** (App Router, Server Components)                |
| Language           | **TypeScript** (strict mode)                                  |
| Styling            | **Tailwind CSS v3** + `tailwind-merge` + `clsx`               |
| Animations         | **Framer Motion** (page transitions, scroll reveals, hovers)  |
| Icons              | **Lucide React**                                              |
| Theme              | **next-themes** (dark / light mode with system detection)     |
| Forms              | **React Hook Form** + **Zod** (validation)                    |
| Email              | **Resend** SDK (contact form backend via API route)           |
| Fonts              | **next/font** — Inter (body) + Clash Display or Sora (headings)|
| Linting            | ESLint + Prettier (Tailwind plugin)                           |
| SEO                | Next.js Metadata API + JSON-LD structured data                |
| Deployment target  | **Vercel** (Edge Runtime where beneficial)                    |

---

## Design System & Visual Direction

### Color Palette

```
--primary:          #6C3CE1   (vivid purple — brand anchor)
--primary-light:    #8B5CF6
--primary-dark:     #4F21B8
--accent:           #00E5A0   (electric mint — CTA highlight)
--accent-dark:      #00C489

/* Light mode */
--background:       #FAFAFA
--surface:          #FFFFFF
--text-primary:     #0F172A
--text-secondary:   #475569
--border:           #E2E8F0

/* Dark mode */
--background-dark:  #0B0F1A
--surface-dark:     #131927
--text-primary-dark:#F1F5F9
--text-secondary-dark:#94A3B8
--border-dark:      #1E293B
```

### Typography

- **Headings:** Sora or Clash Display — bold/800, tight letter-spacing (-0.02em)
- **Body:** Inter — regular/400 & medium/500, line-height 1.7
- **Scale (desktop):** H1: 64–80px · H2: 48px · H3: 32px · Body: 16–18px · Small: 14px
- **Scale (mobile):** H1: 36–44px · H2: 32px · H3: 24px · Body: 16px

### Spacing & Layout

- Max content width: `1280px` (centered)
- Section vertical padding: `py-24` desktop / `py-16` mobile
- Grid: 12-column with `gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons/badges
- Shadows: Subtle layered shadows — `shadow-xl shadow-primary/5`

### Motion Guidelines (Framer Motion)

- **Page transitions:** Fade + slight Y-translate (duration 0.4s, ease out)
- **Scroll reveals:** Elements animate in with `y: 40 → 0`, `opacity: 0 → 1` when entering viewport (stagger children by 0.1s)
- **Hover states:** Cards lift (`y: -4`) with shadow increase. Buttons scale slightly (`scale: 1.03`)
- **Hero section:** Staggered text reveal line-by-line, floating gradient blobs with slow drift animation
- **Numbers/stats:** Count-up animation when scrolling into view
- **Keep it performant:** Use `will-change`, prefer `transform`/`opacity` only, avoid layout-triggering properties

---

## Project Structure

```
marketix/
├── public/
│   ├── images/
│   │   ├── hero/               # Hero section visuals
│   │   ├── case-studies/       # Portfolio thumbnails & full images
│   │   ├── team/               # Team member headshots
│   │   └── clients/            # Client logos (SVG preferred)
│   ├── og-image.png            # Default Open Graph image (1200×630)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (ThemeProvider, fonts, nav, footer)
│   │   ├── page.tsx            # Home / Landing page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── case-studies/
│   │   │   ├── page.tsx        # Grid listing of all case studies
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Individual case study detail page
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # POST endpoint — sends email via Resend
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky, glassmorphism, responsive hamburger
│   │   │   ├── MobileMenu.tsx      # Slide-out mobile nav with Framer Motion
│   │   │   ├── Footer.tsx          # Multi-column footer with CTA band
│   │   │   └── ThemeToggle.tsx     # Dark/light switch (sun/moon icon)
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Variants: primary, secondary, outline, ghost
│   │   │   ├── Badge.tsx           # Tag/label component
│   │   │   ├── Card.tsx            # Reusable card with hover animation
│   │   │   ├── SectionHeading.tsx  # Eyebrow + title + subtitle pattern
│   │   │   ├── Container.tsx       # Max-width wrapper
│   │   │   └── Input.tsx           # Styled form input with error state
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Home hero — headline, sub, CTA, abstract bg
│   │   │   ├── Services.tsx        # Service cards grid
│   │   │   ├── Stats.tsx           # Animated counter bar (clients, revenue, etc.)
│   │   │   ├── CaseStudies.tsx     # Featured case studies carousel/grid
│   │   │   ├── Testimonials.tsx    # Client testimonial slider
│   │   │   ├── Clients.tsx         # Logo ticker / marquee
│   │   │   ├── CTA.tsx             # Full-width call-to-action band
│   │   │   ├── Team.tsx            # Team member grid
│   │   │   ├── Process.tsx         # Step-by-step agency process
│   │   │   └── FAQ.tsx             # Accordion FAQ section
│   │   └── shared/
│   │       ├── AnimateOnScroll.tsx  # Reusable Framer Motion scroll reveal wrapper
│   │       ├── PageTransition.tsx  # Route transition wrapper
│   │       └── GradientBlob.tsx    # Decorative animated gradient background element
│   ├── lib/
│   │   ├── constants.ts        # Site metadata, nav links, service data, pricing tiers
│   │   ├── utils.ts            # cn() helper, formatters
│   │   └── resend.ts           # Resend client initialization
│   ├── hooks/
│   │   ├── useCountUp.ts       # Animated number counter hook
│   │   └── useMediaQuery.ts    # Responsive breakpoint hook
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── .env.local                  # RESEND_API_KEY, CONTACT_EMAIL_TO
```

---

## Pages — Detailed Specifications

### 1. Home Page (`/`)

The landing page is the most important page. It should instantly convey authority, professionalism, and results.

**Sections in order:**

1. **Hero**
   - Large bold headline: e.g. "We Scale Brands With Data-Driven Marketing"
   - Supporting paragraph (2 lines max)
   - Two CTAs: "Get Started" (primary, filled) + "View Our Work" (secondary, outline)
   - Abstract background: animated gradient blobs (purple/mint) with subtle grain texture overlay
   - Optional: a floating mockup dashboard/analytics graphic (CSS/SVG, not a photo)

2. **Social Proof / Clients Marquee**
   - Infinite horizontal scroll of 8–12 client logos (grayscale, colorize on hover)
   - Label above: "Trusted by 200+ brands worldwide"

3. **Services Overview**
   - Section heading with eyebrow text: "What We Do"
   - 6 service cards in a 3×2 grid (2×3 on tablet, 1-col on mobile)
   - Each card: icon (Lucide), title, short description, subtle hover lift animation
   - "Explore All Services →" link at bottom

4. **Stats Bar**
   - Full-width accent-colored band (gradient purple→mint)
   - 4 animated counters: Projects Delivered (500+), Revenue Generated ($50M+), Team Experts (40+), Client Retention (97%)

5. **Featured Case Studies**
   - 3 cards showing top case studies
   - Each: thumbnail image, client name, result metric badge (e.g. "+340% ROI"), brief tagline
   - Hover: image zoom + overlay
   - "View All Case Studies →" link

6. **Process / How We Work**
   - 4-step horizontal timeline (vertical on mobile)
   - Steps: Discovery → Strategy → Execution → Optimize
   - Each step: number, icon, title, short description
   - Connecting line/dots between steps with animated draw-on effect

7. **Testimonials**
   - Carousel/slider (auto-play with manual arrows)
   - Each slide: quote text, client name, title, company, small avatar
   - Subtle background pattern or gradient

8. **CTA Band**
   - "Ready to Grow Your Business?" + "Book a Free Consultation" button
   - Dark background with accent gradient border or glow

### 2. About Page (`/about`)

- **Hero:** Page title + mission statement paragraph
- **Story section:** 2-column layout — text left, image/illustration right
- **Values:** 4 value cards in a grid (Innovation, Transparency, Results, Partnership)
- **Team grid:** Photo, name, role, optional social links. 4-column grid. Hover reveals social icons.
- **CTA Band** (same reusable component)

### 3. Services Page (`/services`)

- **Hero:** Title + subtitle explaining full-service capability
- **Service detail blocks:** Alternate left-right layout for each service:
  1. SEO & Search Marketing
  2. Paid Advertising (PPC / Social Ads)
  3. Social Media Management
  4. Content Marketing & Strategy
  5. Email Marketing & Automation
  6. Web Design & Development
  - Each block: icon, title, detailed description (3–4 sentences), bullet list of deliverables, small illustrative graphic or icon cluster
- **CTA Band**

### 4. Pricing Page (`/pricing`)

- **Hero:** Title + "Transparent pricing for every stage of growth"
- **3 pricing tiers** displayed as cards side-by-side:
  - **Starter** — $1,500/mo — for small businesses
  - **Growth** — $3,500/mo — for scaling companies (highlighted as "Most Popular" with accent border)
  - **Enterprise** — Custom — for large orgs
  - Each card: tier name, price, description, feature checklist (checkmarks), CTA button
- **Comparison table** below (expandable on mobile): rows for each feature, columns for each tier
- **FAQ accordion** — 6–8 common pricing questions
- **CTA Band**

### 5. Case Studies Page (`/case-studies`)

**Listing page:**
- Filterable grid (category pills: All, SEO, PPC, Social, Content)
- Each card: cover image, client name, category badge, key result metric
- Hover animation: image zoom + dark overlay with "Read More" text

**Detail page (`/case-studies/[slug]`):**
- Hero with full-width image + overlay title
- Sections: Challenge → Solution → Results
- Key metrics in a highlighted stat row
- Testimonial quote from the client
- "Next Case Study" navigation at bottom
- Data sourced from a local `case-studies.ts` data file (array of objects)

### 6. Contact Page (`/contact`)

- **2-column layout:** Form on left, info on right
- **Form fields:** Name, Email, Company, Budget range (dropdown), Message (textarea)
- Validation: React Hook Form + Zod schema
- Submit → POST to `/api/contact` → sends email via Resend
- Success/error toast notification after submission
- **Right column:** Office address, email, phone, business hours, embedded map placeholder (static image or iframe)
- Social media icon links

---

## API Route — Contact Form

### `POST /api/contact`

```typescript
// Request body (validated with Zod)
{
  name: string;          // min 2 chars
  email: string;         // valid email
  company?: string;
  budget: "under-5k" | "5k-10k" | "10k-25k" | "25k-plus";
  message: string;       // min 10 chars
}

// Flow:
// 1. Validate request body with Zod
// 2. Send email via Resend to process.env.CONTACT_EMAIL_TO
// 3. Send confirmation email to the user
// 4. Return { success: true } or { error: string }

// Rate limit: basic in-memory rate limiting (5 requests per IP per 15 min)
```

---

## Dark / Light Mode Implementation

- Use `next-themes` with `attribute="class"` strategy
- Wrap app in `<ThemeProvider>` in root layout
- Toggle component in Navbar (sun/moon icon with rotate animation)
- All color values use CSS custom properties via Tailwind's `dark:` variant
- Default: system preference, with manual override persisted in localStorage
- Transition: `transition-colors duration-300` on `<html>` element

---

## SEO Requirements

- **Metadata API:** Every page exports a `metadata` object (title, description, openGraph, twitter)
- **Title template:** `%s | Marketix — Digital Marketing Agency`
- **Sitemap:** Auto-generated via `app/sitemap.ts`
- **robots.txt:** Auto-generated via `app/robots.ts`
- **JSON-LD:** Organization schema on home, LocalBusiness on contact, Article-like schema on case studies
- **Image optimization:** All images use `next/image` with proper `alt`, `width`, `height`, `priority` on hero images
- **Semantic HTML:** Proper heading hierarchy (single H1 per page), landmark elements (`<main>`, `<nav>`, `<section>`, `<article>`)
- **Core Web Vitals targets:** LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Responsive Breakpoints

Follow Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Key responsive behaviors:**
- Navbar → hamburger menu below `md`
- Grids collapse: 3-col → 2-col → 1-col
- Hero headline scales down significantly on mobile
- Pricing cards stack vertically on mobile with horizontal scroll hint on tablet
- Case study grid: 3-col → 2-col → 1-col
- Process timeline: horizontal → vertical below `md`

---

## Component Behavior Notes

### Navbar
- Sticky `top-0` with `backdrop-blur-xl` + semi-transparent background
- Hides on scroll down, reveals on scroll up (use `useMotionValueEvent` from Framer Motion)
- Logo (text "Marketix" in brand font) on left
- Nav links centered: Home, About, Services, Case Studies, Pricing, Contact
- Right side: ThemeToggle + "Get Started" CTA button
- Mobile: hamburger icon → full-screen overlay menu with staggered link animations

### Footer
- 4-column grid: Brand (logo + tagline + social icons), Services (links), Company (links), Contact (address + email)
- Bottom bar: copyright + privacy/terms links
- Subtle top border or gradient separator

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@marketix.com
NEXT_PUBLIC_SITE_URL=https://marketix.com
```

---

## Key npm Packages

```json
{
  "dependencies": {
    "next": "^14.2",
    "react": "^18.3",
    "react-dom": "^18.3",
    "framer-motion": "^11",
    "next-themes": "^0.3",
    "react-hook-form": "^7",
    "@hookform/resolvers": "^3",
    "zod": "^3.23",
    "resend": "^3",
    "lucide-react": "^0.400",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "typescript": "^5.5",
    "@types/react": "^18.3",
    "@types/node": "^20",
    "tailwindcss": "^3.4",
    "autoprefixer": "^10",
    "postcss": "^8",
    "eslint": "^8",
    "eslint-config-next": "^14.2",
    "prettier": "^3",
    "prettier-plugin-tailwindcss": "^0.6"
  }
}
```

---

## Implementation Order (Recommended)

1. **Project setup** — `create-next-app`, install all deps, configure Tailwind (custom colors, fonts), set up `next-themes`
2. **Design system** — Build all `ui/` components (Button, Card, Badge, Input, SectionHeading, Container)
3. **Layout** — Navbar (desktop + mobile), Footer, root layout with ThemeProvider + fonts
4. **Shared** — AnimateOnScroll wrapper, PageTransition, GradientBlob
5. **Home page** — Build section by section top to bottom (Hero → Clients → Services → Stats → Case Studies → Process → Testimonials → CTA)
6. **Services page**
7. **About page**
8. **Case Studies** — Data file first, then listing page, then detail page
9. **Pricing page** — Tier cards + comparison table + FAQ accordion
10. **Contact page** — Form UI → Zod schema → API route → Resend integration
11. **SEO pass** — Metadata on all pages, sitemap, robots, JSON-LD
12. **Polish** — Animation timing, responsive QA, dark mode audit, performance optimization

---

## Quality Checklist

- [ ] All pages render correctly in both light and dark mode
- [ ] All animations are smooth (60fps) and respect `prefers-reduced-motion`
- [ ] Fully responsive from 320px to 1440px+
- [ ] Contact form validates and sends email successfully
- [ ] Lighthouse score: Performance > 90, Accessibility > 95, SEO > 95
- [ ] All images optimized with next/image
- [ ] No hydration mismatches
- [ ] Semantic HTML throughout
- [ ] Keyboard navigable (focus states on all interactive elements)
- [ ] No unused dependencies or dead code

---

*Use placeholder content (realistic copy, Unsplash images via `/public/images/`) for all sections. Every piece of text should read like real agency copy — not "Lorem ipsum".*