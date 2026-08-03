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
 * • Added luxury floating animation
 * • Added soft ambient glow
 * • Added elegant light sweep effect
 * • Added subtle image movement
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

        z-40

        w-full

        flex

        justify-center

        animate-[float_6s_ease-in-out_infinite]
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

          shadow-[0_20px_60px_-20px_rgba(140,90,107,0.35)]

          ring-1

          ring-[#E8C8BC]/60
        "
      >

        {/* IMAGE */}
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

            animate-[slowZoom_12s_ease-in-out_infinite]
          "
        />


        {/* LUXURY LIGHT REFLECTION */}
        <div
          className="
            absolute

            inset-0

            bg-gradient-to-r

            from-transparent

            via-white/25

            to-transparent

            -translate-x-full

            animate-[shine_7s_ease-in-out_infinite]
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
            transform: translateY(-6px);
          }
        }

        @keyframes slowZoom {
          0%,
          100% {
            transform: scale(1.05);
          }

          50% {
            transform: scale(1.1);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }

          40%,
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </div>
  );
}
