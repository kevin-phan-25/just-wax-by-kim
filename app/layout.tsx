/**
 *
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
 * • Great Vibes → homepage slogan script
 * • Allura → service card overlay branding
 *
 * Updated: August 4, 2026
 *
 * ---
 *
 */

import type { Metadata } from "next";
import Script from "next/script";
import { Great_Vibes, Allura } from "next/font/google";

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


const allureFont = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allure",
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
        ${allureFont.variable}
      `}
    >
      <body>
        {/* SEO STRUCTURED DATA */}
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        <Providers>
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
