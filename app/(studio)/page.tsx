/**
 * -----------------------------------------------------------------------------
 * File:
 * app/(studio)/page.tsx
 *
 * Description:
 * Homepage composition.
 *
 * Updates:
 * • Homepage now lives inside the studio route group
 * • Automatically receives Navbar and Footer from studio layout
 * • Announcement remains inside Hero
 * • Preserved homepage section flow
 * -----------------------------------------------------------------------------
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
