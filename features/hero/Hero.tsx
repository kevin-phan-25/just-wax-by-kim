/**
 * ------------------------------------------------------------------
 * File: features/hero/Hero.tsx
 *
 * Description:
 * Full-width luxury hero banner.
 *
 * Changes:
 * • Navbar overlap removed
 * • Hero image shifted down 6 inches
 * • Keeps hero background intact
 * • Preserves editorial spacing
 * ------------------------------------------------------------------
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden

        pt-[168px]
        pb-24
      "
    >

      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />


      {/* Hero Image Container */}
      <div
        className="
          container-luxury

          relative
          z-10

          pt-[696px]
        "
      >
        <HeroImage />
      </div>


      {/* Bottom divider */}
      <div
        aria-hidden
        className="
          absolute

          bottom-0
          left-1/2

          -translate-x-1/2

          w-[min(92%,1200px)]

          h-px

          bg-[#E8DDD8]
        "
      />

    </section>
  );
}
