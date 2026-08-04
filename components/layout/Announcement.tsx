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
 * • Added viewport-safe sizing
 * • Improved centering behavior
 * • Preserved transparent PNG rendering
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

        left-0
        right-0

        z-40

        flex
        justify-center
        items-center

        px-4
      "
    >
      <div
        className="
          w-full
          max-w-[260px]

          sm:max-w-[340px]

          md:max-w-[440px]

          lg:max-w-[500px]

          xl:max-w-[560px]
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
