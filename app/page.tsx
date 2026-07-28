/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed excessive dividers
 *   - Added luxury section separation
 *   - Improved visual hierarchy
 *
 * -----------------------------------------------------------------------------
 */

import Hero from "@/features/hero";
import Mission from "@/features/about/Mission";
import About from "@/features/about";
import Services from "@/features/services";
import Experience from "@/features/experience";
import Gallery from "@/features/gallery";
import Testimonials from "@/features/testimonials";
import Instagram from "@/features/instagram";
import FAQ from "@/features/faq";
import Booking from "@/features/booking";
import Contact from "@/features/contact";


export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>


      {/* Mission */}
      <section
        className="
          border-t
          border-brand-border/60
        "
      >
        <Mission />
      </section>


      {/* About */}
      <section
        id="about"
        className="
          border-t
          border-brand-border/60
        "
      >
        <About />
      </section>


      {/* Services */}
      <section
        id="services"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Services />
      </section>


      {/* Experience */}
      <section
        id="studio"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Experience />
      </section>


      {/* Gallery */}
      <section
        id="gallery"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Gallery />
      </section>


      {/* Testimonials */}
      <section
        id="testimonials"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Testimonials />
      </section>


      {/* Instagram */}
      <section
        id="instagram"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Instagram />
      </section>


      {/* FAQ */}
      <section
        id="faq"
        className="
          border-t
          border-brand-border/60
        "
      >
        <FAQ />
      </section>


      {/* Booking */}
      <section
        id="booking"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Booking />
      </section>


      {/* Contact */}
      <section
        id="contact"
        className="
          border-t
          border-brand-border/60
        "
      >
        <Contact />
      </section>

    </main>
  );
}
