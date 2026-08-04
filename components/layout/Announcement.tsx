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
 * • Preserved full slogan visibility
 * • Matched pill aspect ratio to artwork
 * • Removed white side gaps
 * • Prevented image enlargement
 * • Created dainty luxury floating appearance
 * • Preserved desktop presentation
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

          w-[42%]

          min-w-[240px]

          sm:w-[52%]

          md:w-[58%]

          lg:w-[55%]

          xl:w-[50%]

          aspect-[5/1]

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

            object-cover

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

            bg-[#FCF8F3]/10

            mix-blend-soft-light
          "
        />

        {/* Soft luxury fade */}
        <div
          className="
            absolute

            inset-0

            bg-gradient-to-b

            from-[#FCF8F3]/10

            via-transparent

            to-[#FCF8F3]/25
          "
        />
      </div>
    </div>
  );
}
