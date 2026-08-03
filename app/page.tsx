/**
 *
 * ---
 * File: app/page.tsx
 *
 * Description:
 * Main homepage composition for Just Wax by Kim.
 *
 * Changes:
 *
 * - July 29, 2026
 *   - Removed border-t section wrappers
 *   - Feature components own their section ids
 *
 * - August 2, 2026
 *   - Fixed Services import (exported as Service)
 *   - Removed Experience section
 *   - Maintained ~½ inch (gap-12 / 48px) separation between sections
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
import { Service as Services } from "@/features/services";
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
