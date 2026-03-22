import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to grow your business? Get in touch with Marketix for a free consultation. Let's build a marketing strategy that delivers results.",
};

export default function ContactPage() {
  return <ContactContent />;
}
