import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Marketix — our mission, values, and the team of experts behind the data-driven marketing strategies that scale brands.",
};

export default function AboutPage() {
  return <AboutContent />;
}
