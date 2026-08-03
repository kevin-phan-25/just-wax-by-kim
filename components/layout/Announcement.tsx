/**
 * -----------------------------------------------------------------------------
 * File: components/layout/Announcement.tsx
 *
 * Description:
 * Top brand slogan bar for Just Wax by Kim.
 * "WHERE EVERY SERVICE IS tailored just for you ♥"
 *
 * Updated: August 2, 2026
 * -----------------------------------------------------------------------------
 */
export default function Announcement() {
  return (
    <div
      className="
        relative z-[60]
        w-full
        bg-[#C9A0A8]
        text-center
        px-4
        py-2.5
        md:py-3
      "
      role="note"
    >
      <p
        className="
          m-0
          text-[0.62rem]
          sm:text-[0.68rem]
          md:text-[0.72rem]
          font-medium
          uppercase
          tracking-[0.26em]
          text-white/95
        "
      >
        Where every service is{" "}
        <span
          className="
            normal-case
            tracking-normal
            italic
            font-normal
            text-[0.8rem]
            sm:text-[0.88rem]
            md:text-[0.95rem]
            opacity-95
          "
          style={{
            fontFamily:
              "var(--font-script), 'Cormorant Garamond', Georgia, serif",
          }}
        >
          tailored just for you
        </span>
        <span className="ml-1.5 inline-block opacity-90" aria-hidden>
          ♥
        </span>
      </p>
    </div>
  );
}
