/**
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition.
 *
 * Updates:
 * • Added Mission below Hero
 * • Removed duplicate section wrappers
 * • Improved luxury conversion flow
 * • Preserved responsive spacing control
 *
 * Sections:
 * • Hero
 * • Mission
 * • About
 * • Services
 * • Booking
 *
 * ---
 */

import Hero from "@/features/hero";
import Mission from "@/features/about/Mission";
import About from "@/features/about";
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



      {/* MISSION */}
      <Mission />



      {/* ABOUT */}
      <About />



      {/* SERVICES */}
      <Services />



      {/* BOOKING */}
      <Booking />


    </main>
  );
}
