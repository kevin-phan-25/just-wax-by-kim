/**
 * -----------------------------------------------------------------------------
 * File: features/hero/Hero.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Primary hero section — editorial magazine layout.
 *
 * Changes (July 29, 2026):
 * • Image moved to LEFT, text to RIGHT
 * • Content and image centered within the section
 * • Image size reduced ~50% for better proportion
 * • Removed forced full-viewport height
 * • Balanced vertical padding and grid gaps
 * • Softer ambient wash
 * -----------------------------------------------------------------------------
 */
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex items-center justify-center
        pt-[72px] md:pt-[80px]
        overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />

      <div className="container-luxury relative z-10 w-full">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-12
            gap-10 lg:gap-12
            items-center justify-items-center
            py-14 md:py-16 lg:py-18
          "
        >
          {/* Image — LEFT */}
          <div className="lg:col-span-5 w-full flex justify-center order-1">
            <HeroImage />
          </div>

          {/* Content — RIGHT */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-start order-2">
            <HeroContent />
          </div>
        </div>
      </div>

      {/* Thin bottom rule */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(92%,1200px)] h-px bg-[#E8DDD8]"
      />
    </section>
  );
}
