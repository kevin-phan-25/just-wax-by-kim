/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroImage.tsx
 *
 * Description:
 * Full-width luxury hero banner.
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-[32px] shadow-xl">
      <Image
        src="public/hero/just-wax-by-kim.jpg"
        alt="Just Wax by Kim"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Luxury Gradient Overlay */}
      <div
        aria-hidden
        className="
          absolute inset-0
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
          absolute inset-0
          bg-gradient-to-t
          from-[#3B2A26]/12
          via-transparent
          to-transparent
        "
      />

      {/* Decorative Accent */}
      <div
        aria-hidden
        className="
          absolute bottom-8 left-1/2
          -translate-x-1/2
          w-20 h-px
          bg-[#D4A9B6]
        "
      />
    </div>
  );
}
