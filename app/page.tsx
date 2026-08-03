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
 * • Homepage contains only core sections
 * • Added luxury Services introduction section
 * • Removed pricing catalog from homepage
 * • Removed Mission section
 * • Removed Gallery section
 * • Removed Testimonials section
 * • Removed Instagram section
 * • Removed FAQ section
 * • Removed Contact section
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services/Services";
import { Booking } from "@/features/booking";


export default function Home() {
  return (
    <main>

      {/* HERO */}
      <Hero />


      {/* ABOUT */}
      <About />


      {/* SERVICES INTRO */}
      <Services />


      {/* BOOKING */}
      <Booking />


    </main>
  );
}
