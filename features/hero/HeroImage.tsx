/**
 * ---
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Responsive luxury hero banner image.
 *
 * Updates:
 * • Balanced spacing
 * • No navbar overlap
 * • No excessive bottom gap
 *
 * ---
 */

import Image from "next/image";

export function HeroImage() {
  return (
    <div
      className="
        relative

        w-full

        overflow-hidden

        rounded-[2.5rem]

        bg-[#FBF7F4]
      "
    >

      <Image
        src="/hero/just-wax-by-kim-underconstruction.jpg"

        alt="Luxury waxing studio experience at Just Wax by Kim"

        width={2400}
        height={1200}

        priority

        sizes="
          100vw
        "

        className="
          block

          w-full

          h-auto

          object-contain

          rounded-[2.5rem]
        "
      />


      <div
        aria-hidden
        className="
          absolute
          inset-0

          rounded-[2.5rem]

          bg-gradient-to-r
          from-[#2D211D]/10
          via-transparent
          to-transparent
        "
      />

    </div>
  );
}
