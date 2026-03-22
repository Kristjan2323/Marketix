import type { Metadata } from "next";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how Marketix has helped brands achieve measurable growth through data-driven digital marketing strategies. Real results, real businesses.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
