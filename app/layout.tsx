/**
 * -----------------------------------------------------------------------------
 * File: layout.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Root application layout.
 *
 * This file controls:
 * - Global metadata
 * - SEO structured data
 * - Fonts
 * - Site navigation
 * - Site footer
 * - Global providers
 *
 * Changes:
 * - July 27, 2026
 *   - Added v1.0.0 production SEO.
 *
 * - July 27, 2026
 *   - Added v1.0.1 luxury typography system.
 *   - Added Playfair Display heading font.
 *   - Added Montserrat body font.
 *   - Added Vercel Analytics provider.
 *
 * -----------------------------------------------------------------------------
 */


import type { Metadata } from "next";


import Script from "next/script";


import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";


import Providers from "./providers";


import {

createMetadata

}

from "@/lib/metadata";


import {

businessSchema

}

from "@/lib/seo";


import {

headingFont,

bodyFont

}

from "@/config/fonts";


import "./globals.css";





/**
 * -----------------------------------------------------------------------------
 * Global SEO Metadata
 * -----------------------------------------------------------------------------
 */


export const metadata: Metadata = createMetadata();






export default function RootLayout({

children

}: Readonly<{

children: React.ReactNode;

}>) {



return (


<html

lang="en"

className={headingFont.className}

>


<body

className={bodyFont.className}

>



{/*
  Google / Search Engine Structured Data

  Helps Google understand:

  - Business type
  - Location
  - Brand
  - Website identity

*/}


<Script

id="business-schema"

type="application/ld+json"

strategy="afterInteractive"

dangerouslySetInnerHTML={{

__html:

JSON.stringify(

businessSchema()

)

}}

/>





<Providers>



<Navbar />




<main

id="main-content"

className="
min-h-screen
"

>


{children}


</main>




<Footer />



</Providers>




</body>


</html>


);


}
