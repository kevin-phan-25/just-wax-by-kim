/**
 *
 * ---
 * File:
 * app/page.tsx
 *
 * Description:
 * Main homepage composition for Just Wax by Kim.
 *
 * Updates:
 * • Homepage-only slogan banner
 * • Banner placed below fixed navbar
 * • Uses hero slogan image
 * • Preserved luxury homepage flow
 *
 * ---
 *
 */

import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services/Services";
import { Booking } from "@/features/booking";
import Announcement from "@/components/layout/Announcement";


export default function Home() {
  return (
    <>

      {/* HERO ANNOUNCEMENT BANNER */}
      <div
        className="
          pt-[110px]

          md:pt-[140px]

          xl:pt-[168px]

          bg-[#FCF8F3]
        "
      >
        <Announcement />
      </div>


      {/* HERO */}
      <Hero />


      {/* ABOUT */}
      <About />


      {/* SERVICES INTRO */}
      <Services />


      {/* BOOKING */}
      <Booking />

    </>
  );
}
