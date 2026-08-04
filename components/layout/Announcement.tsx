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
 * • Switched to transparent PNG asset
 * • Removed blend mode artifacts
 * • Removed artificial background layers
 * • Removed pill/card appearance
 * • Preserved floating editorial luxury appearance
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
