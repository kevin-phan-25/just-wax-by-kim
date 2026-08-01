/**
 * ---
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Responsive luxury hero banner image.
 *
 * Updates:
 * • Matches luxury navbar spacing layout
 * • Prevents top/bottom cropping
 * • Preserves full artwork
 * • Removes excess whitespace
 * • Responsive desktop/tablet/mobile scaling
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


      {/* Luxury left depth overlay */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          rounded-[2.5rem]

          bg-gradient-to-r

          from-[#2D211D]/15

          via-transparent

          to-transparent
        "
      />


      {/* Subtle bottom luxury fade */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          rounded-[2.5rem]

          bg-gradient-to-t

          from-[#3B2A26]/10

          via-transparent

          to-transparent
        "
      />

    </div>
  );
}
