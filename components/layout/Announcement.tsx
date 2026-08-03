/**
 * -----------------------------------------------------------------------------
 * File: components/layout/Announcement.tsx
 *
 * Description:
 * Top slogan bar matching brand graphic:
 * WHERE EVERY SERVICE IS tailored just for you ♥
 *
 * Updated: August 2, 2026
 * -----------------------------------------------------------------------------
 */
export default function Announcement() {
  return (
    <div
      className="
        relative z-[60]
        flex w-full items-center justify-center
        bg-[#C9A0A8]
        px-3
        py-[0.65rem]
        sm:px-4
        sm:py-3
        md:py-3.5
      "
      role="note"
    >
      <p
        className="
          m-0
          flex
          flex-wrap
          items-baseline
          justify-center
          gap-x-1.5
          sm:gap-x-2
          text-center
        "
      >
        {/* Uppercase line — matches the graphic */}
        <span
          className="
            text-[0.58rem]
            sm:text-[0.65rem]
            md:text-[0.72rem]
            lg:text-[0.78rem]
            font-normal
            uppercase
            tracking-[0.28em]
            sm:tracking-[0.32em]
            md:tracking-[0.36em]
            text-[#F7EDE8]
          "
          style={{
            fontFamily:
              "var(--font-inter), 'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Where every service is
        </span>

        {/* Cursive phrase — same role as the script in the graphic */}
        <span
          className="
            text-[0.95rem]
            sm:text-[1.05rem]
            md:text-[1.2rem]
            lg:text-[1.35rem]
            font-normal
            leading-none
            text-[#F7EDE8]
          "
          style={{
            fontFamily:
              "var(--font-script), 'Great Vibes', 'Allura', cursive",
          }}
        >
          tailored just for you
        </span>

        {/* Heart */}
        <span
          className="
            text-[0.7rem]
            sm:text-[0.8rem]
            md:text-[0.9rem]
            leading-none
            text-[#F7EDE8]
            opacity-95
          "
          aria-hidden
        >
          ♥
        </span>
      </p>
    </div>
  );
}
