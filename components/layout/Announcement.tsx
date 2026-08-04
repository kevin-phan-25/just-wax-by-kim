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
 * • Uses inset-x-0 instead of w-screen
 * • Safe responsive widths
 * • Preserves PNG transparency
 * * ---
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

        inset-x-0

        z-40

        flex
        justify-center
      "
    >
      <img
        src="/hero/slogan_banner.png"
        alt="Where every service is tailored just for you"
        className="
          block

          w-[92%]
          xs:w-[88%]
          sm:w-[82%]
          md:w-[700px]

          max-w-[700px]

          h-auto

          object-contain

          mx-auto
        "
      />
    </div>
  );
}
