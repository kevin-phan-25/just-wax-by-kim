/**
 * -----------------------------------------------------------------------------
 * File:
 * app/layout.tsx
 *
 * Description:
 * Root application layout.
 *
 * Responsibilities:
 * • Global metadata
 * • SEO structured data
 * • Global fonts
 * • Global CSS
 * • Global providers
 *
 * IMPORTANT:
 * Navbar and Footer are intentionally NOT rendered here.
 * They are rendered by app/(studio)/layout.tsx.
 *
 * This allows /site-access to remain completely independent from
 * the public website layout.
 * -----------------------------------------------------------------------------
 */

import type { Metadata } from "next";
import Script from "next/script";

import {
  Great_Vibes,
  Allura,
} from "next/font/google";

import Providers from "./providers";

import { createMetadata } from "@/lib/metadata";
import { businessSchema } from "@/lib/seo";
import {
  headingFont,
  bodyFont,
} from "@/config/fonts";

import "./globals.css";

/**
 * Homepage slogan script font
 */
const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

/**
 * Service card overlay branding font
 */
const alluraFont = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata =
  createMetadata();

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
        ${alluraFont.variable}
      `}
    >
      <body>
        {/* SEO STRUCTURED DATA */}

        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                businessSchema
              ),
          }}
        />

        {/* GLOBAL PROVIDERS */}

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
