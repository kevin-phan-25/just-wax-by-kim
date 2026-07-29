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
 * • Fixed “smooshed under navbar” by using an explicit spacer + padding
 * • Content starts at ~2.75–3 in from top (navbar 1.75 in + clearance)
 * • Image left / text right preserved
 * -----------------------------------------------------------------------------
 */
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/*
        Explicit spacer = navbar height (168px / 1.75in)
        + clearance (96px / 1in)
        = 264px total before hero content begins
      */}
      <div className="h-[264px] w-full flex-shrink-0" aria-hidden />

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
            pt-4
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
