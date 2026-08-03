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

import { ServicePricingPage } from "@/features/services";
import { ladiesServices } from "@/features/services/data/ladies.data";

import Gallery from "@/features/gallery";
import Testimonials from "@/features/testimonials";
import Instagram from "@/features/instagram";
import FAQ from "@/features/faq";
import { Booking } from "@/features/booking";
import Contact from "@/features/contact";

export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <Mission />

      <ServicePricingPage
        id="services"
        title="Ladies Waxing"
        description="Professional waxing services designed for comfort, confidence, and exceptional care."
        services={ladiesServices}
      />

      <Gallery />

      <Testimonials />

      <Instagram />

      <FAQ />

      <Booking />

      <Contact />

    </main>
  );
}
