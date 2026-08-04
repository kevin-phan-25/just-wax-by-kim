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
 * • Fixed mobile clipping
 * • Forced viewport-safe rendering
 * • Centered banner across all devices
 * • Optimized wide PNG aspect ratio
 * • Preserved transparent PNG appearance
 * • Responsive mobile / iPad / desktop positioning
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

        top-[115px]
        sm:top-[125px]
        md:top-[150px]
        xl:top-[175px]

        left-1/2
        -translate-x-1/2

        z-40

        w-screen

        flex
        justify-center
        items-center

        overflow-hidden
      "
    >
      <div
        className="
          flex
          justify-center
          items-center

          w-[90vw]

          max-w-[700px]

          px-4
        "
      >
        <img
          src="/hero/slogan_banner.png"
          alt="Where every service is tailored just for you"
          className="
            block

            w-full

            h-auto

            object-contain
          "
        />
      </div>
    </div>
  );
}
