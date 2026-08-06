/**
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Homepage slogan banner.
 *
 * Updates:
 * • Removed viewport fixed positioning
 * • Anchored inside Hero section
 * • Scrolls naturally with Hero
 * • Positioned below Navbar
 * • Preserved transparent PNG rendering
 * • Responsive sizing
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

        inset-0

        z-10

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
