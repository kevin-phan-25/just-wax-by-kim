/**
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Updates:
 * • Mission moved below About
 * • Cleaner luxury conversion flow
 * • Removed unnecessary section wrappers
 *
 * Sections:
 * • Hero
 * • About
 * • Mission
 * • Services
 * • Booking
 *
 * ---
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Mission from "@/features/about/Mission";
import Services from "@/features/services";
import Booking from "@/features/booking";


export default function Home() {
  return (
    <main
      className="
        relative

        w-full

        overflow-visible

        bg-[#FBF7F4]
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
