/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Hero portrait image with soft floating frame.
 *
 * Changes (July 29, 2026):
 * • Left-side placement
 * • Reduced size for proportion (~280–300px max)
 * • Consistent 4/5 aspect ratio
 * -----------------------------------------------------------------------------
 */
import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      <div
        className="
          relative aspect-[4/5]
          overflow-hidden rounded-[24px]
          border border-[#E8DDD8]
          shadow-[0_20px_50px_rgba(59,42,38,0.07)]
          bg-[#F6E7E1]
        "
      >
        <Image
          src="/hero/hero-main.jpg"
          alt="Just Wax by Kim — refined luxury waxing experience"
          fill
          priority
          sizes="(max-width: 768px) 280px, 300px"
          className="object-cover object-center"
        />

        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-t from-[#3B2A26]/08 via-transparent to-transparent
          "
        />
      </div>

      <div
        aria-hidden
        className="
          absolute -bottom-4 left-1/2 -translate-x-1/2
          w-12 h-px bg-[#D4A9B6]
        "
      />
    </div>
  );
}
