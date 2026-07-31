/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Responsive Update:
 * • Responsive navbar clearance
 * • Mobile/tablet optimized spacing
 * • Editorial desktop layout
 * • Ambient luxury background
 *
 * -----------------------------------------------------------------------------
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />

      {/* Responsive navbar clearance */}
      <div className="nav-clearance" />

      {/* Hero */}
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
