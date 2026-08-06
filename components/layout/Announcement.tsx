/**
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Floating homepage slogan banner.
 *
 * Updates:
 * • Removed viewport-fixed behavior
 * • Anchored to homepage hero wrapper
 * • Positioned above hero image
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

        top-[70px]

        md:top-[90px]

        xl:top-[110px]

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
