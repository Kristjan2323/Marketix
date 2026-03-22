import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for every stage of growth. Choose from Starter, Growth, or Enterprise plans to accelerate your digital marketing results.",
};

export default function PricingPage() {
  return <PricingContent />;
}
