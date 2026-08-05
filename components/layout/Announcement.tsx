/**
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Floating homepage slogan banner.
 *
 * Updates:
 * • Positioned above hero image
 * • Scrolls naturally with page
 * • Preserved transparent PNG rendering
 * • Responsive mobile / iPad / desktop sizing
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

        -top-[80px]
        sm:-top-[90px]
        md:-top-[110px]
        xl:-top-[130px]

        left-0
        right-0

        z-50

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
