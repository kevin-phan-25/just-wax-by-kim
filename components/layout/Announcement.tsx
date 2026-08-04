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
 * • Removed pill container appearance
 * • Removed border and shadow
 * • Blended slogan image into background
 * • Reduced background visibility
 * • Created floating editorial luxury appearance
 * • Preserved responsive positioning
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

          w-[240px]

          sm:w-[320px]

          md:w-[420px]

          lg:w-[460px]

          xl:w-[500px]

          overflow-hidden

          opacity-90
        "
      >
        <img
          src="/hero/slogan_banner.jpg"
          alt="Where every service is tailored just for you"
          className="
            block

            w-full

            h-auto

            object-contain

            mix-blend-multiply

            opacity-85

            brightness-110

            saturate-[70%]
          "
        />

        {/* Soft background integration */}
        <div
          className="
            absolute

            inset-0

            bg-[#FCF8F3]/30

            mix-blend-screen
          "
        />
      </div>
    </div>
  );
}
