/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main homepage composition.
 *
 * This file controls the order of homepage sections.
 *
 * Changes:
 * - July 27, 2026
 *   - Added v0.3.0 luxury hero experience.
 *   - Connected feature-based homepage architecture.
 *
 * - July 27, 2026
 *   - Added v0.4.0 About Kim experience.
 *   - Added Mission section.
 *
 * - July 27, 2026
 *   - Added v0.5.0 Services Experience.
 *
 * - July 27, 2026
 *   - Added v0.6.0 Booking Experience.
 *
 * -----------------------------------------------------------------------------
 */


import Hero from "@/features/hero";

import About from "@/features/about";

import Mission from "@/features/about/Mission";

import Services from "@/features/services";

import Booking from "@/features/booking";



export default function Home() {


  return (

    <main>


      {/* 
        Hero Experience
        Luxury first impression
      */}

      <Hero />



      {/*
        About Kim
        Builds trust and personal connection
      */}

      <About />



      {/*
        Brand Mission
        Reinforces philosophy
      */}

      <Mission />



      {/*
        Services Catalog
        Main conversion section
      */}

      <Services />



      {/*
        Booking Experience
        Appointment conversion
      */}

      <Booking />


    </main>

  );


}
