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
 * • Homepage simplified
 * • Only Hero, About, Services, Booking sections
 * • Removed Mission section
 * • Removed Gallery section
 * • Removed Testimonials section
 * • Removed Instagram section
 * • Removed FAQ section
 * • Removed Contact section
 * • Maintained luxury section spacing
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";

import { ServicePricingPage } from "@/features/services";
import { Booking } from "@/features/booking";


export default function Home() {
  return (
    <main>

      {/* HERO */}

      <Hero />


      {/* ABOUT */}

      <About />


      {/* SERVICES */}

      <ServicePricingPage
        id="services"
        title="Ladies Waxing"
        description="
          Professional waxing services designed for comfort,
          confidence, and exceptional care.
        "
        services={ladiesServices}
      />


      {/* BOOKING */}

      <Booking />

    </main>
  );
}
