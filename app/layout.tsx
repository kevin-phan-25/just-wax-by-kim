/**
 * -----------------------------------------------------------------------------
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
 * • Global providers
 *
 * Site navigation and footer are handled by the studio layout so that
 * private pages such as /site-access can render completely independently.
 *
 * -----------------------------------------------------------------------------
 */

import type { Metadata } from "next";

import Script from "next/script";

import {
  Great_Vibes,
  Allura,
} from "next/font/google";

import Providers from "./providers";

import {
  createMetadata,
} from "@/lib/metadata";

import {
  businessSchema,
} from "@/lib/seo";

import {
  headingFont,
  bodyFont,
} from "@/config/fonts";

import "./globals.css";


/**
 * Homepage slogan script
 */
const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});


/**
 * Service card overlay branding
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
