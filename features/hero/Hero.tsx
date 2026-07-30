/**
 * -----------------------------------------------------------------------------
 * File: features/hero/Hero.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Full-width luxury hero banner.
 *
 * Changes:
 * • Removed HeroContent
 * • Banner image only
 * • Hero starts ~4 inches from viewport top
 * • Preserved luxury section spacing
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
        pt-[384px]
        pb-24
      "
    >
      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />

      <div className="container-luxury relative z-10">
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
