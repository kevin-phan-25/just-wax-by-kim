/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury hero banner image.
 *
 * Changes:
 * • Full-width responsive banner
 * • Optimized for generated banner artwork
 * • Soft luxury overlay
 * • Keeps image focus centered
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-[32px] shadow-2xl">
      <Image
        src="/images/hero/just-wax-by-kim-banner.jpg"
        alt="Luxury waxing experience"
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
