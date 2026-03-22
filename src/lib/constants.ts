import type { NavLink, Service, PricingTier, Testimonial, TeamMember, FAQ, CaseStudy } from "@/types";

export const siteConfig = {
  name: "Marketix",
  description: "We scale brands with data-driven digital marketing strategies that deliver measurable results.",
  url: "https://marketix.com",
  email: "hello@marketix.com",
  phone: "+1 (555) 234-5678",
  address: "123 Marketing Ave, Suite 400, San Francisco, CA 94105",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM PST",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    icon: "Search",
    title: "SEO & Search Marketing",
    description: "Dominate search rankings with our proven SEO strategies. We optimize every facet of your online presence to drive organic traffic that converts.",
    deliverables: ["Technical SEO audit", "Keyword research & strategy", "On-page optimization", "Link building campaigns", "Monthly reporting & analytics"],
  },
  {
    icon: "Target",
    title: "Paid Advertising",
    description: "Maximize ROI with precision-targeted PPC campaigns across Google, Meta, and LinkedIn. Every dollar works harder with our data-driven approach.",
    deliverables: ["Google Ads management", "Social media advertising", "Retargeting campaigns", "A/B testing & optimization", "Conversion tracking setup"],
  },
  {
    icon: "Share2",
    title: "Social Media Management",
    description: "Build an engaged community and amplify your brand voice across every platform. We create content that sparks conversations and drives action.",
    deliverables: ["Content calendar planning", "Community management", "Influencer partnerships", "Social listening & analytics", "Platform-specific strategies"],
  },
  {
    icon: "FileText",
    title: "Content Marketing",
    description: "Tell your brand story with compelling content that educates, entertains, and converts. From blog posts to video scripts, we craft narratives that resonate.",
    deliverables: ["Content strategy development", "Blog writing & publishing", "Video content planning", "Email newsletter creation", "Content performance tracking"],
  },
  {
    icon: "Mail",
    title: "Email Marketing",
    description: "Nurture leads and drive repeat purchases with automated email sequences that feel personal. Our campaigns consistently outperform industry benchmarks.",
    deliverables: ["Email automation flows", "Newsletter design & copy", "List segmentation", "A/B testing", "Deliverability optimization"],
  },
  {
    icon: "Monitor",
    title: "Web Design & Development",
    description: "Launch high-converting websites that look stunning and perform flawlessly. We build fast, accessible, and SEO-friendly digital experiences.",
    deliverables: ["Custom website design", "Responsive development", "CMS integration", "Performance optimization", "Ongoing maintenance & support"],
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 40, suffix: "+", label: "Team Experts" },
  { value: 97, suffix: "%", label: "Client Retention" },
];

export const processSteps = [
  {
    number: "01",
    icon: "Compass",
    title: "Discovery",
    description: "We dive deep into your business, audience, and competitive landscape to uncover growth opportunities.",
  },
  {
    number: "02",
    icon: "Lightbulb",
    title: "Strategy",
    description: "We craft a custom marketing roadmap backed by data, designed to hit your specific business objectives.",
  },
  {
    number: "03",
    icon: "Rocket",
    title: "Execution",
    description: "Our specialists bring the strategy to life with precision, launching campaigns that capture attention and drive results.",
  },
  {
    number: "04",
    icon: "BarChart3",
    title: "Optimize",
    description: "We continuously analyze performance data to refine and scale what works, maximizing your return on investment.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Marketix transformed our digital presence completely. Within 6 months, our organic traffic increased by 340% and our cost per acquisition dropped by half.",
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "TechFlow",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "The team at Marketix doesn't just run campaigns — they become an extension of your team. Their strategic thinking and execution are world-class.",
    name: "Marcus Johnson",
    title: "CEO",
    company: "GrowthLab",
    avatar: "/images/team/avatar-2.jpg",
  },
  {
    quote: "We've worked with several agencies before, but Marketix is in a different league. They delivered a 5x return on our ad spend in the first quarter.",
    name: "Emily Rodriguez",
    title: "Director of Growth",
    company: "ScaleUp",
    avatar: "/images/team/avatar-3.jpg",
  },
  {
    quote: "Their data-driven approach to content marketing helped us establish thought leadership in our industry. The results speak for themselves.",
    name: "David Park",
    title: "CMO",
    company: "Innovate Inc",
    avatar: "/images/team/avatar-4.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Alex Rivera", role: "Founder & CEO", image: "/images/team/alex.jpg", socials: { twitter: "#", linkedin: "#" } },
  { name: "Jordan Lee", role: "Head of Strategy", image: "/images/team/jordan.jpg", socials: { twitter: "#", linkedin: "#" } },
  { name: "Priya Sharma", role: "Creative Director", image: "/images/team/priya.jpg", socials: { linkedin: "#" } },
  { name: "Chris Taylor", role: "Head of SEO", image: "/images/team/chris.jpg", socials: { twitter: "#", linkedin: "#" } },
  { name: "Samantha Wu", role: "PPC Lead", image: "/images/team/samantha.jpg", socials: { linkedin: "#" } },
  { name: "Michael Brown", role: "Content Strategist", image: "/images/team/michael.jpg", socials: { twitter: "#", linkedin: "#" } },
  { name: "Lisa Nguyen", role: "Social Media Manager", image: "/images/team/lisa.jpg", socials: { linkedin: "#" } },
  { name: "Tom Anderson", role: "Web Developer", image: "/images/team/tom.jpg", socials: { twitter: "#", linkedin: "#" } },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for small businesses ready to establish their digital presence and start growing online.",
    features: [
      "2 marketing channels",
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly performance reports",
      "Email support",
      "Content calendar",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,500",
    description: "For scaling companies that need a comprehensive, multi-channel marketing strategy to accelerate growth.",
    features: [
      "5 marketing channels",
      "Advanced SEO & content strategy",
      "Paid advertising management",
      "Social media management (4 platforms)",
      "Email marketing automation",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
      "A/B testing & optimization",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring a fully customized, enterprise-grade marketing solution.",
    features: [
      "Unlimited marketing channels",
      "Full-service SEO & SEM",
      "Custom ad campaign management",
      "Complete social media strategy",
      "Advanced automation workflows",
      "Weekly strategy sessions",
      "Dedicated team of specialists",
      "Custom reporting dashboard",
      "Priority support (24/7)",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
  },
];

export const pricingFeatures = [
  { feature: "Marketing Channels", starter: "2", growth: "5", enterprise: "Unlimited" },
  { feature: "SEO Optimization", starter: "Basic", growth: "Advanced", enterprise: "Full-service" },
  { feature: "Paid Advertising", starter: "—", growth: "Included", enterprise: "Custom" },
  { feature: "Social Platforms", starter: "2", growth: "4", enterprise: "All" },
  { feature: "Email Marketing", starter: "—", growth: "Included", enterprise: "Advanced" },
  { feature: "Content Creation", starter: "4 posts/mo", growth: "12 posts/mo", enterprise: "Unlimited" },
  { feature: "Strategy Calls", starter: "Monthly", growth: "Bi-weekly", enterprise: "Weekly" },
  { feature: "Account Manager", starter: "—", growth: "Dedicated", enterprise: "Dedicated Team" },
  { feature: "Reporting", starter: "Monthly", growth: "Bi-weekly", enterprise: "Custom Dashboard" },
  { feature: "Support", starter: "Email", growth: "Email & Phone", enterprise: "24/7 Priority" },
];

export const faqs: FAQ[] = [
  {
    question: "How long does it take to see results?",
    answer: "While some channels like PPC can deliver results within weeks, organic strategies like SEO typically take 3-6 months to show significant impact. We set clear milestones and provide regular progress updates so you always know where things stand.",
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We offer both month-to-month and annual agreements. Annual plans come with a 15% discount. We believe in earning your business through results, not locking you into contracts.",
  },
  {
    question: "Can I switch plans as my business grows?",
    answer: "Absolutely. You can upgrade or adjust your plan at any time. We'll work with you to ensure your marketing strategy scales with your business needs.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses across various industries including SaaS, e-commerce, healthcare, finance, and professional services. Our data-driven approach is adaptable to any industry.",
  },
  {
    question: "How do you measure and report on performance?",
    answer: "We provide comprehensive reports that track KPIs aligned with your business goals — not just vanity metrics. You'll see exactly how your investment translates into leads, sales, and revenue.",
  },
  {
    question: "What makes Marketix different from other agencies?",
    answer: "We combine creative excellence with rigorous data analysis. Every decision we make is backed by data, and we operate as a true extension of your team — fully invested in your success.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, our Enterprise tier is fully customizable. If none of our standard plans fit your needs, we'll build a tailored solution that addresses your specific challenges and goals.",
  },
  {
    question: "What is your onboarding process like?",
    answer: "Our onboarding takes 1-2 weeks and includes a deep-dive discovery session, competitive analysis, audit of your current marketing efforts, and development of a comprehensive strategy roadmap.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "techflow-seo-transformation",
    title: "340% Organic Traffic Increase in 6 Months",
    client: "TechFlow",
    category: "SEO",
    thumbnail: "/images/case-studies/techflow-thumb.jpg",
    heroImage: "/images/case-studies/techflow-hero.jpg",
    metric: "+340% Traffic",
    tagline: "From page 5 to page 1 — a complete SEO transformation",
    challenge: "TechFlow was struggling with minimal organic visibility despite having a superior product. Their website ranked on page 5+ for critical industry keywords, and they were entirely dependent on paid advertising for lead generation.",
    solution: "We implemented a comprehensive SEO strategy including technical audit fixes, keyword-targeted content creation, strategic link building, and on-page optimization across 200+ pages. We also restructured their blog to target high-intent search queries.",
    results: "Within 6 months, TechFlow saw a 340% increase in organic traffic, moved 45 target keywords to page 1, and reduced their customer acquisition cost by 52%. Organic leads now account for 60% of their pipeline.",
    stats: [
      { label: "Traffic Increase", value: "340%" },
      { label: "Keywords on Page 1", value: "45" },
      { label: "CAC Reduction", value: "52%" },
      { label: "Organic Lead Share", value: "60%" },
    ],
    testimonial: {
      quote: "Marketix transformed our digital presence completely. The results exceeded our most optimistic projections.",
      name: "Sarah Chen",
      title: "VP of Marketing, TechFlow",
    },
  },
  {
    slug: "growthlab-ppc-campaign",
    title: "5x Return on Ad Spend for SaaS Launch",
    client: "GrowthLab",
    category: "PPC",
    thumbnail: "/images/case-studies/growthlab-thumb.jpg",
    heroImage: "/images/case-studies/growthlab-hero.jpg",
    metric: "5x ROAS",
    tagline: "Launching a new SaaS product with precision-targeted paid campaigns",
    challenge: "GrowthLab was launching a new analytics platform in a crowded market. They needed to generate awareness and qualified trials quickly, but previous campaigns with other agencies had burned budget with minimal returns.",
    solution: "We designed a full-funnel paid advertising strategy across Google Ads and LinkedIn, with detailed audience segmentation, compelling ad creative, and optimized landing pages. We implemented rigorous A/B testing and real-time bid optimization.",
    results: "The campaign delivered a 5x return on ad spend in the first quarter, generating 2,000+ qualified trial signups at a cost per trial 60% below industry average. Brand search volume increased by 180%.",
    stats: [
      { label: "Return on Ad Spend", value: "5x" },
      { label: "Qualified Trials", value: "2,000+" },
      { label: "Cost Per Trial Reduction", value: "60%" },
      { label: "Brand Search Increase", value: "180%" },
    ],
    testimonial: {
      quote: "We've worked with several agencies before, but Marketix is in a different league. The ROAS speaks for itself.",
      name: "Marcus Johnson",
      title: "CEO, GrowthLab",
    },
  },
  {
    slug: "scaleup-social-media",
    title: "200K Followers & 3x Engagement in 4 Months",
    client: "ScaleUp",
    category: "Social",
    thumbnail: "/images/case-studies/scaleup-thumb.jpg",
    heroImage: "/images/case-studies/scaleup-hero.jpg",
    metric: "+200K Followers",
    tagline: "Building a thriving social community from the ground up",
    challenge: "ScaleUp had virtually no social media presence despite being a well-funded D2C brand. Their competitors were dominating social channels, and they needed to build an engaged following quickly to support their e-commerce growth.",
    solution: "We developed a multi-platform content strategy focused on short-form video, user-generated content, and strategic influencer partnerships. We created a consistent brand voice and posting cadence across Instagram, TikTok, and Twitter.",
    results: "In just 4 months, ScaleUp grew from 5K to 200K+ followers across platforms, with engagement rates 3x the industry average. Social-driven revenue now accounts for 35% of total e-commerce sales.",
    stats: [
      { label: "Follower Growth", value: "200K+" },
      { label: "Engagement Rate", value: "3x avg" },
      { label: "Social Revenue Share", value: "35%" },
      { label: "UGC Pieces Created", value: "500+" },
    ],
    testimonial: {
      quote: "Marketix didn't just grow our following — they built a real community that drives sales every single day.",
      name: "Emily Rodriguez",
      title: "Director of Growth, ScaleUp",
    },
  },
  {
    slug: "innovate-content-strategy",
    title: "Thought Leadership That Drives 150% More Leads",
    client: "Innovate Inc",
    category: "Content",
    thumbnail: "/images/case-studies/innovate-thumb.jpg",
    heroImage: "/images/case-studies/innovate-hero.jpg",
    metric: "+150% Leads",
    tagline: "Establishing industry authority through strategic content marketing",
    challenge: "Innovate Inc had deep industry expertise but wasn't translating it into digital content. Their blog was sparse, and they had no content distribution strategy, missing a huge opportunity to capture high-intent search traffic.",
    solution: "We built a comprehensive content engine — from pillar pages and thought leadership articles to gated whitepapers and email nurture sequences. Every piece was optimized for search and mapped to the buyer journey.",
    results: "Content-driven leads increased by 150% within 5 months. Their blog now receives 80K monthly visitors, and the email nurture sequences convert at 12% — 4x their previous rate.",
    stats: [
      { label: "Lead Increase", value: "150%" },
      { label: "Monthly Blog Visitors", value: "80K" },
      { label: "Email Conversion Rate", value: "12%" },
      { label: "Content Pieces Published", value: "120+" },
    ],
    testimonial: {
      quote: "Their data-driven approach to content marketing helped us establish thought leadership in our industry.",
      name: "David Park",
      title: "CMO, Innovate Inc",
    },
  },
];

export const clientLogos = [
  "TechFlow", "GrowthLab", "ScaleUp", "Innovate Inc", "NexGen",
  "Pulse Digital", "Vertex AI", "CloudBase", "DataSync", "BrightPath",
];
