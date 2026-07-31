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
 * • Site navigation
 * • Site footer
 * • Global providers
 *
 * Updates:
 * • Responsive navbar spacing support
 * • Cleaner page structure
 * • Preserves luxury editorial layout
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

          bg-[#FCF8F3]

          text-[#3B2A26]
        `}
      >



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




        <Providers>


          {/* GLOBAL NAVIGATION */}

          <Navbar />



          {/* PAGE CONTENT */}

          <main
            className="
              flex-1

              w-full
            "
          >

            {children}

          </main>



        </Providers>



        {/* FOOTER */}

        <Footer />


      </body>


    </html>

  );

}
