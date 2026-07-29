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
 * • Added ~1 inch (96px) of top breathing room below the navbar
 *   so hero content is no longer pressed against the bar
 * • Image left / text right layout preserved
 * • Image kept at reduced size for proportion
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
        /* navbar height + ~1 inch (96px) clearance */
        pt-[296px] md:pt-[316px]
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
            pb-16 md:pb-20 lg:pb-24
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
