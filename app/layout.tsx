/**
 * ---
 * File:
 * app/layout.tsx
 *
 * Description:
 * Root application layout.
 *
 * Controls:
 * • Global metadata
 * • SEO structured data
 * • Fonts
 * • Announcement slogan bar
 * • Site navigation
 * • Site footer
 * • Global providers
 *
 * Typography:
 * • Playfair Display → luxury editorial headings
 * • Montserrat → body, navigation, buttons
 * • Great Vibes → slogan script (“tailored just for you”)
 *
 * Updated: August 2, 2026
 * ---
 */
import type { Metadata } from "next";
import Script from "next/script";
import { Great_Vibes } from "next/font/google";
import Announcement from "@/components/layout/Announcement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import { createMetadata } from "@/lib/metadata";
import { businessSchema } from "@/lib/seo";
import { headingFont, bodyFont } from "@/config/fonts";
import "./globals.css";

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${headingFont.variable}
        ${bodyFont.variable}
        ${scriptFont.variable}
      `}
    >
      <body
        className="
          min-h-screen
          flex
          flex-col
          bg-[#FCF8F3]
          text-[#3B2A26]
          antialiased
        "
      >
        {/* SEO STRUCTURED DATA */}
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        <Providers>
          {/* BRAND SLOGAN BAR */}
          <Announcement />

          {/* GLOBAL NAVIGATION */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main
            className="
              flex-1
              w-full
              overflow-x-hidden
            "
          >
            {children}
          </main>
        </Providers>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
