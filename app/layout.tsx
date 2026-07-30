/**
 * -----------------------------------------------------------------------------
 * File: layout.tsx
 *
 * Created:
 * July 27, 2026
 *
 * Description:
 * Root application layout.
 *
 * Controls:
 * - Global metadata
 * - SEO structured data
 * - Fonts
 * - Site navigation
 * - Site footer
 * - Global providers
 *
 * -----------------------------------------------------------------------------
 */

import type { Metadata } from "next";

import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
 * -----------------------------------------------------------------------------
 * Global SEO Metadata
 * -----------------------------------------------------------------------------
 */

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
      className={headingFont.className}
    >

      <body
        className={`
          ${bodyFont.className}

          min-h-screen
          flex
          flex-col
        `}
      >


        {/* SEO Structured Data */}
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



        <Providers>


          {/* Navigation */}
          <Navbar />



          {/* Page Content */}
          <main
            className="
              flex-1
            "
          >
            {children}
          </main>



          {/* Footer */}
          <Footer />


        </Providers>


      </body>

    </html>

  );

}
