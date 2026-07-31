/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Luxury hero banner image container.
 *
 * Updates:
 * • Improved image scaling behavior
 * • Stabilized focal point positioning
 * • Added premium overlays
 * • Optimized for responsive hero heights
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";


export function HeroImage() {

  return (

    <div
      className="
        absolute
        inset-0
      "
    >

      {/* Main Hero Image */}
      <Image
        src="/hero/just-wax-by-kim-banner.jpg"
        alt="Luxury waxing studio experience at Just Wax by Kim"
        fill
        priority
        sizes="
          100vw
        "
        className="
          object-cover

          object-center

          scale-[1.02]
        "
      />



      {/* Editorial darkening overlay */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          bg-gradient-to-r

          from-[#2D211D]/35

          via-[#2D211D]/10

          to-[#2D211D]/15
        "
      />



      {/* Bottom luxury fade */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-[#3B2A26]/25

          via-transparent

          to-transparent
        "
      />



      {/* Soft warm glow */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          bg-[radial-gradient(circle_at_25%_40%,rgba(232,200,188,0.22),transparent_45%)]
        "
      />


    </div>

  );

}
