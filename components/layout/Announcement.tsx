/**
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Floating homepage slogan banner.
 *
 * Updates:
 * • Changed viewport-fixed positioning to hero-relative positioning
 * • Banner now scrolls naturally with page content
 * • Preserved transparent PNG rendering
 * • Preserved responsive mobile / iPad / desktop sizing
 * • Maintained navbar clearance spacing
 *
 * ---
 */

"use client";

export default function Announcement() {
  return (
    <div
      className="
        pointer-events-none

        absolute

        top-[140px]
        sm:top-[150px]
        md:top-[175px]
        xl:top-[200px]

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
        src="/hero/slogan_banner_01.png"
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
