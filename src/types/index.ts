export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  metric: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: string;
  stats: { label: string; value: string }[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
  };
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}
