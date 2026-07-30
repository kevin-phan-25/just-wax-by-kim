/**
 * -----------------------------------------------------------------------------
 * File: app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Changes:
 * • Unified section spacing
 * • Hero follows same rhythm as all sections
 * -----------------------------------------------------------------------------
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
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
    <main className="space-y-24">
      <Hero />
      <About />
      <Mission />
      <Services />
      <Experience />
      <Gallery />
      <Testimonials />
      <Instagram />
      <FAQ />
      <Booking />
      <Contact />
    </main>
  );
}
