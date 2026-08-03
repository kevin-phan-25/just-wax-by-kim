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
 * • Added luxury floating effect
 * • Added soft ambient shadow
 * • Added subtle image movement
 * • Added premium light reflection
 * • Preserved floating layout
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

        top-[110px]

        md:top-[140px]

        xl:top-[168px]

        left-1/2

        -translate-x-1/2

        z-40

        w-full

        flex

        justify-center

        animate-[pulse_6s_ease-in-out_infinite]
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

          shadow-[0_25px_70px_-25px_rgba(140,90,107,0.45)]

          ring-1

          ring-[#E8C8BC]/70
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

            scale-105

            transition-transform

            duration-[12000ms]

            ease-in-out

            hover:scale-110
          "
        />


        {/* Soft Luxury Shine */}
        <div
          className="
            absolute

            inset-0

            bg-gradient-to-r

            from-transparent

            via-white/30

            to-transparent

            -translate-x-full

            animate-[shine_8s_ease-in-out_infinite]
          "
        />

      </div>
    </div>
  );
}
