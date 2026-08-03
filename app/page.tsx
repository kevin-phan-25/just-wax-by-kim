/**
 *
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Updates:
 * • Responsive luxury editorial flow
 * • Mission remains below About
 * • Unified global background system
 * • Preserves section-level spacing
 * • Mobile / iPad / desktop optimized
 *
 * Sections:
 * • Hero
 * • About
 * • Mission
 * • Services
 * • Booking
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
import { Services } from "@/features/services";
import { Booking } from "@/features/booking";

export default function Home() {
  return (
    <main
      className="
        relative

        w-full

        overflow-visible

        bg-[#FCF8F3]
      "
    >
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* MISSION */}
      <Mission />

      {/* SERVICES */}
      <Services />

      {/* BOOKING */}
      <Booking />
    </main>
  );
}
