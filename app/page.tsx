/**
 *
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition for Just Wax by Kim.
 *
 * Changes:
 *
 * - Removed Experience section
 * - Fixed Services component import
 * - Maintained section spacing
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
import Services from "@/features/services";
import Gallery from "@/features/gallery";
import Testimonials from "@/features/testimonials";
import Instagram from "@/features/instagram";
import FAQ from "@/features/faq";
import { Booking } from "@/features/booking";
import Contact from "@/features/contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Hero />

      <About />

      <Mission />

      <Services />

      <Gallery />

      <Testimonials />

      <Instagram />

      <FAQ />

      <Booking />

      <Contact />
    </main>
  );
}
