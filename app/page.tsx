/**
 * -----------------------------------------------------------------------------
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 * • Homepage focused on conversion flow
 * • Removed Gallery
 * • Removed Testimonials
 * • Removed FAQ
 * • Removed Contact
 *
 * Sections:
 * • Hero
 * • About
 * • Services
 * • Booking
 *
 * -----------------------------------------------------------------------------
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services";
import Booking from "@/features/booking";


export default function Home() {

  return (

    <main
      className="
        relative
        overflow-visible
      "
    >


      {/* HERO */}
      <Hero />



      {/* ABOUT */}
      <section
        id="about"
        className="
          mt-24
        "
      >

        <About />

      </section>




      {/* SERVICES */}
      <section
        id="services"
        className="
          mt-24
        "
      >

        <Services />

      </section>




      {/* BOOKING */}
      <section
        id="booking"
        className="
          mt-24
        "
      >

        <Booking />

      </section>



    </main>

  );

}
