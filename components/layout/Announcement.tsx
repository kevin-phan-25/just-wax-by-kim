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
  • Expanded image visibility
  • Reduced aggressive crop
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

          w-[92%]

          sm:w-[80%]

          md:w-[70%]

          lg:w-[60%]

          xl:w-[55%]

          h-[65px]

          sm:h-[75px]

          md:h-[85px]

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

            scale-[1.05]
          "
        />
      </div>
    </div>
  );
}
