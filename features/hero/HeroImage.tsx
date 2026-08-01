/**
 *
 * ---
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Responsive luxury hero banner image.
 *
 * Updates:
 * • Fixed banner cropping
 * • Reduced image scaling
 * • Preserved full artwork
 * • Improved desktop presentation
 *
 * ---
 *
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div
      className="
        absolute

        top-16
        md:top-20

        left-0
        right-0

        h-[75vh]

        md:h-[78vh]

        lg:h-[82vh]

        overflow-hidden

        rounded-[2.5rem]

        bg-[#FBF7F4]
      "
    >

      <Image
        src="/hero/just-wax-by-kim-underconstruction.jpg"

        alt="Luxury waxing studio experience at Just Wax by Kim"

        fill

        priority

        sizes="
          100vw
        "

        className="
          object-contain

          md:object-contain

          lg:object-contain
        "
      />


      {/* Soft luxury overlay */}
      <div
        aria-hidden
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#2D211D]/20

          via-transparent

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

          from-[#3B2A26]/15

          via-transparent

          to-transparent
        "
      />

    </div>
  );
}
