/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Responsive:
 * • Responsive navbar clearance
 * • Mobile/tablet optimized spacing
 * • Editorial desktop layout
 * • Ambient luxury background
 * -----------------------------------------------------------------------------
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F4]
      "
    >

      {/* Ambient background */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#F8EFEA]
          via-[#FBF7F4]
          to-[#FBF7F4]
        "
      />


      {/* Responsive navbar clearance */}
      <div
        className="
          nav-clearance
        "
      />


      {/* Hero Content */}
      <div
        className="
          container-luxury
          relative
          z-10

          pb-12
          md:pb-16
          xl:pb-24
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

          h-px
          w-[min(92%,1200px)]

          bg-[#E8DDD8]
        "
      />

    </section>
  );
}
