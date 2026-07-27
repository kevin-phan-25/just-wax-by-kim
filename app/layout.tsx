/**
 * -----------------------------------------------------------------------------
 * File: layout.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Root application layout.
 *
 * Changes:
 * - July 27, 2026
 *   - Added global fonts.
 *   - Added navigation and footer shell.
 *
 * -----------------------------------------------------------------------------
 */


import type { Metadata } from "next";

import "./globals.css";

import {
  headingFont,
  bodyFont,
} from "@/config/fonts";

import Navbar
from "@/components/layout/Navbar";

import Footer
from "@/components/layout/Footer";


export const metadata: Metadata = {

  title:
    "Just Wax by Kim | More Than Just a Wax",

  description:
    "Luxury waxing services designed around confidence and comfort.",

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


return (

<html lang="en">

<body
className={`
${headingFont.variable}
${bodyFont.variable}
`}
>


<Navbar />


<main>

{children}

</main>


<Footer />


</body>

</html>

);

}
