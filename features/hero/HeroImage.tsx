/**
 * ---
 * File:
 * features/hero/HeroImage.tsx
 *
 * Description:
 * Luxury responsive hero image.
 *
 * Updates:
 * • Full image visibility preserved
 * • No forced cropping
 * • Responsive phone / iPad / desktop scaling
 * • Editorial rounded canvas
 * • Balanced luxury shadow
 *
 * ---
 */

import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative

        w-full

        overflow-hidden

        rounded-[1.75rem]

        sm:rounded-[2.25rem]

        md:rounded-[3rem]

        shadow-[0_30px_80px_rgba(59,42,38,0.12)]
      "
    >
      <Image
        src="/hero/just-wax-by-kim-underconstruction.jpg"
        alt="Just Wax by Kim luxury waxing studio"
        width={2400}
        height={1100}
        priority
        quality={95}
        sizes="
          100vw
          (max-width:640px) 100vw,
          (max-width:1024px) 95vw,
          1600px
        "
        className="
          block

          w-full

          h-auto

          object-contain
        "
      />
    </div>
  );
}
