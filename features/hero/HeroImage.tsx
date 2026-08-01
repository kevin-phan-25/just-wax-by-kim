/**
 * ---
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Responsive luxury hero banner image.
 *
 * Updates:
 * • Removed forced height cropping
 * • Preserved complete artwork
 * • Improved desktop/mobile scaling
 * • Added luxury rounded presentation
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

        px-4
        md:px-6
        lg:px-8
      "
    >
      <Image
        src="/hero/just-wax-by-kim-underconstruction.jpg"
        alt="Luxury waxing studio experience at Just Wax by Kim"

        width={2400}
        height={1200}

        priority

        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1440px) 95vw,
          90vw
        "

        className="
          w-full
          h-auto

          object-contain

          rounded-[2.5rem]
        "
      />


      {/* Soft luxury overlay */}
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


      {/* Bottom fade */}
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
