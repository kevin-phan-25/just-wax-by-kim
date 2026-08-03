/**
 *
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Floating homepage slogan banner.
 *
 * Updates:
 * • Removed distracting fade effects
 * • Added subtle luxury depth
 * • Added soft premium shadow
 * • Added gentle hover movement
 * • Blended banner dots into website background
 * • Preserved floating layout
 *
 * ---
 *
 */

"use client";

export default function Announcement() {
  return (
    <div
      className="
        pointer-events-none

        absolute

        top-[110px]

        md:top-[140px]

        xl:top-[168px]

        left-1/2

        -translate-x-1/2

        z-40

        w-full

        flex

        justify-center
      "
    >
      <div
        className="
          relative

          w-[96%]

          sm:w-[85%]

          md:w-[75%]

          lg:w-[65%]

          xl:w-[60%]

          h-[70px]

          sm:h-[80px]

          md:h-[90px]

          overflow-hidden

          rounded-full

          shadow-[0_25px_80px_-25px_rgba(140,90,107,0.45)]

          ring-1

          ring-[#E8C8BC]/70

          transition-transform

          duration-700

          hover:-translate-y-1
        "
      >
        <img
          src="/hero/slogan_banner.jpg"
          alt="Where every service is tailored just for you"
          className="
            absolute

            inset-0

            w-full

            h-full

            object-cover

            object-center

            scale-105

            brightness-105

            saturate-[85%]

            opacity-90

            transition-transform

            duration-[12000ms]

            ease-in-out

            hover:scale-110
          "
        />

        {/* Background blend to soften dots */}
        <div
          className="
            absolute

            inset-0

            bg-[#FCF8F3]/25

            mix-blend-soft-light
          "
        />

        {/* Luxury fade into website background */}
        <div
          className="
            absolute

            inset-0

            bg-gradient-to-b

            from-[#FCF8F3]/20

            via-transparent

            to-[#FCF8F3]/35
          "
        />
      </div>
    </div>
  );
}
