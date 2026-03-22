import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service digital marketing — SEO, PPC, social media, content marketing, email automation, and web development. Explore what we can do for your brand.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
