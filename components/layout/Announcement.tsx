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
 * • Removed distracting shine animation
 * • Added subtle luxury depth
 * • Added soft ambient glow
 * • Added gentle image movement
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

          shadow-[0_25px_80px_-25px_rgba(140,90,107,0.45)]

          ring-1

          ring-[#E8C8BC]/70

          animate-[float_7s_ease-in-out_infinite]
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

            animate-[luxuryZoom_14s_ease-in-out_infinite]
          "
        />

      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes luxuryZoom {
          0%,
          100% {
            transform: scale(1.05);
          }

          50% {
            transform: scale(1.08);
          }
        }
      `}</style>

    </div>
  );
}
