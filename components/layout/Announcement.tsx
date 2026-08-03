/**
  ---
  File:
  components/layout/Announcement.tsx

  Description:
  Floating homepage slogan banner.

  Updates:
  • Uses slogan_banner.jpg
  • Does not affect page layout
  • Floats between navbar and hero
  • Expanded pill boundaries
  • Improved image visibility
  • Homepage-only display handled by layout
  ---
*/

"use client";

export default function Announcement() {
  return (
    <div
      className="
        pointer-events-none

        absolute

        top-[110px]

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

          w-[96%]

          sm:w-[85%]

          md:w-[75%]

          lg:w-[65%]

          xl:w-[60%]

          h-[70px]

          sm:h-[80px]

          md:h-[90px]

          overflow-hidden

          rounded-full
        "
      >
        <img
          src="/hero/slogan_banner.jpg"
          alt="Where every service is tailored just for you"
          className="
            absolute

            inset-0

            w-full

            h-full

            object-cover

            object-center
          "
        />
      </div>
    </div>
  );
}
