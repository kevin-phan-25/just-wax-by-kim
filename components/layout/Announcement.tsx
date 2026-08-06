/**
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Homepage slogan banner anchored to hero section.
 *
 * Updates:
 * • Removed viewport-fixed behavior
 * • Anchored inside Hero wrapper
 * • Scrolls naturally with Hero
 * • Positioned below Navbar clearance
 * • Lowered stacking priority below Navbar
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

        top-[20px]

        sm:top-[30px]

        md:top-[40px]

        xl:top-[50px]

        left-0

        right-0

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
