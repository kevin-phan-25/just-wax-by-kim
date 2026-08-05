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
 * • Removed fixed viewport behavior
 * • Anchored to hero layout
 * • Shifted image down for mobile visibility
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

        absolute

        top-[135px]
        sm:top-[145px]
        md:top-[165px]
        xl:top-[195px]

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
