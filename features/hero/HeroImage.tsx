/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroImage.tsx
 *
 * Description:
 * Luxury hero banner image container.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Removed decorative divider line
 * - Simplified hero presentation
 * - Maintained luxury image treatment
 *
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2px]
        aspect-[16/7]
        w-full
      "
    >

      {/* Main Image */}
      <Image
        src="/hero/just-wax-by-kim-banner.jpg"
        alt="Luxury waxing studio"
        fill
        priority
        className="
          object-cover
          object-center
        "
      />


      {/* Luxury Gradient Overlay */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#2D211D]/25
          via-transparent
          to-[#2D211D]/10
        "
      />


      {/* Soft Bottom Fade */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#3B2A26]/12
          via-transparent
          to-transparent
        "
      />

    </div>
  );
}
