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
 * • Fixed mobile right-side clipping
 * • Anchored to viewport instead of parent container
 * • Removed w-screen overflow issue
 * • Preserved transparent PNG rendering
 * • Responsive mobile / iPad / desktop sizing
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

        fixed

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

        overflow-visible
      "
    >
      <img
        src="/hero/slogan_banner.png"
        alt="Where every service is tailored just for you"
        className="
          block

          w-[82vw]

          sm:w-[75vw]

          md:w-[600px]

          xl:w-[700px]

          max-w-[700px]

          h-auto

          object-contain
        "
      />
    </div>
  );
}

