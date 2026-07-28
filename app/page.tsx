/**
 * -----------------------------------------------------------------------------
 * File: page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 * - July 28, 2026
 *   - Added elegant dividers between every major section
 *   - Clearer visual separation so the eye can rest and focus
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
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      <Divider />

      {/* Mission */}
      <Mission />

      <Divider />

      {/* About */}
      <section id="about">
        <About />
      </section>

      <Divider />

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      <Divider />

      {/* Studio / Experience */}
      <section id="studio">
        <Experience />
      </section>

      <Divider />

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      <Divider />

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      <Divider />

      {/* Instagram */}
      <section id="instagram">
        <Instagram />
      </section>

      <Divider />

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      <Divider />

      {/* Booking */}
      <section id="booking">
        <Booking />
      </section>

      <Divider />

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
