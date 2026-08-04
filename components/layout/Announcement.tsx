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
 * • Reduced mobile banner footprint by 50%
 * • Prevented slogan text cropping
 * • Switched image to full visibility mode
 * • Created dainty luxury floating appearance
 * • Preserved desktop presentation
 * • Blended dots into website background
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

        top-[105px]

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

          w-[48%]

          min-w-[260px]

          sm:w-[60%]

          md:w-[65%]

          lg:w-[60%]

          xl:w-[55%]

          h-[38px]

          sm:h-[55px]

          md:h-[75px]

          overflow-hidden

          rounded-full

          shadow-[0_20px_60px_-25px_rgba(140,90,107,0.35)]

          ring-1

          ring-[#E8C8BC]/50

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

            object-contain

            object-center

            brightness-105

            saturate-[85%]

            opacity-95
          "
        />

        {/* Background blend */}
        <div
          className="
            absolute

            inset-0

            bg-[#FCF8F3]/20

            mix-blend-soft-light
          "
        />

        {/* Soft luxury fade */}
        <div
          className="
            absolute

            inset-0

            bg-gradient-to-b

            from-[#FCF8F3]/15

            via-transparent

            to-[#FCF8F3]/30
          "
        />
      </div>
    </div>
  );
}
