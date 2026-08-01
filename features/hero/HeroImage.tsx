/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Luxury hero banner image container.
 *
 * Updates:
 * • Added navbar spacing
 * • Added premium rounded frame
 * • Improved image containment
 * • Maintained responsive scaling
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div
      className="
        absolute

        top-10
        md:top-12

        left-0
        right-0
        bottom-0

        rounded-t-[2.5rem]

        overflow-hidden
      "
    >

      {/* Main Hero Image */}
      <Image
        src="/hero/just-wax-by-kim-banner.jpg"
        alt="Luxury waxing studio experience at Just Wax by Kim"

        fill

        priority

        sizes="100vw"

        className="
          object-cover
          object-center
          scale-[1.02]
        "
      />


      {/* Editorial Dark Overlay */}
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


      {/* Bottom Luxury Fade */}
      <div
        aria-hidden
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-[#3B2A26]/30
          via-transparent
          to-transparent
        "
      />


      {/* Soft Warm Glow */}
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
