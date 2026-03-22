import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Marketix — Creative Marketing Studio",
    template: "%s | Marketix",
  },
  description: "A creative marketing studio that blends strategy, design & technology to craft unforgettable brand experiences that drive real results.",
  metadataBase: new URL("https://marketix.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Marketix",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} font-body antialiased`}>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Marketix",
              url: "https://marketix.com",
              description: "Creative marketing studio crafting brands that break through the noise.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Marketing Ave, Suite 400",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-234-5678",
                contactType: "sales",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
