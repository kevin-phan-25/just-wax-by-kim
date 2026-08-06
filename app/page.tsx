/**
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Homepage composition.
 *
 * Updates:
 * • Removed global Announcement rendering
 * • Announcement now lives inside Hero section
 * • Preserved homepage section flow
 *
 * ---
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services/Services";
import { Booking } from "@/features/booking";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />


      {/* ABOUT */}
      <About />


      {/* SERVICES */}
      <Services />


      {/* BOOKING */}
      <Booking />
    </>
  );
}
