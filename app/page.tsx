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
 * - July 27, 2026
 *   - Added v0.7.0 Gallery Experience.
 *
 * - July 27, 2026
 *   - Added v0.8.0 Testimonials Experience.
 *   - Added Instagram Social Experience.
 *
 * -----------------------------------------------------------------------------
 */


import Hero from "@/features/hero";

import About from "@/features/about";

import Mission from "@/features/about/Mission";

import Services from "@/features/services";

import Gallery from "@/features/gallery";

import Testimonials from "@/features/testimonials";

import Instagram from "@/features/instagram";

import Booking from "@/features/booking";



export default function Home() {


  return (

    <main>


      {/*
        v0.3.0

        Luxury Hero Experience

        First impression:
        Brand identity + primary CTA
      */}

      <Hero />



      {/*
        v0.4.0

        About Kim Experience

        Builds trust and personal connection
      */}

      <About />



      {/*
        v0.4.0

        Brand Mission

        Explains the philosophy behind
        Just Wax by Kim
      */}

      <Mission />



      {/*
        v0.5.0

        Services Experience

        Displays waxing services
        and value proposition
      */}

      <Services />



      {/*
        v0.7.0

        Gallery Experience

        Builds visual trust through:
        - Studio photos
        - Luxury atmosphere
        - Brand presentation
      */}

      <Gallery />



      {/*
        v0.8.0

        Testimonials Experience

        Builds customer confidence:
        - Reviews
        - Client feedback
        - Social proof
      */}

      <Testimonials />



      {/*
        v0.8.0

        Instagram Experience

        Shows:
        - Social presence
        - Brand personality
        - Recent content
      */}

      <Instagram />



      {/*
        v0.6.0

        Booking Experience

        Final conversion point:
        Appointment scheduling
      */}

      <Booking />


    </main>

  );


}
