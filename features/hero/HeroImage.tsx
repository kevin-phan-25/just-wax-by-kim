/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Responsive luxury hero banner image.
 *
 * Updates:
 * • Mobile optimized crop
 * • Tablet optimized scaling
 * • Desktop cinematic banner
 * • Better focal point control
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

        overflow-hidden

        rounded-t-[2.5rem]
      "
    >

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

          object-[65%_center]

          sm:object-[60%_center]

          md:object-center

          lg:object-center

          scale-110
          sm:scale-105
          lg:scale-[1.02]
        "
      />


      {/* Soft luxury overlay */}
      <div
        aria-hidden
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#2D211D]/45

          via-[#2D211D]/15

          to-transparent
        "
      />


      {/* Bottom fade */}
      <div
        aria-hidden
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-[#3B2A26]/35

          via-transparent

          to-transparent
        "
      />


    </div>
  );
}
