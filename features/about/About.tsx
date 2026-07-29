/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Balanced two-column grid (text left, portrait right).
 * Explicit top margin prevents flush contact with Hero.
 *
 * Changes:
 * • July 29, 2026 – Replaced float with CSS Grid to eliminate empty right space
 * • July 29, 2026 – Forced reliable 1.25-inch gap after Hero (mt-[1.25in])
 * • July 29, 2026 – Content now fills its column instead of staying narrow
 * • July 29, 2026 – Image placed on the right
 * • July 29, 2026 – Soft ambient wash + volume retained
 * -----------------------------------------------------------------------------
 */
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
        px-6
        mt-[1.25in]          /* ← forced gap after Hero – will not collapse */
        pt-16
        pb-24
        md:mt-[1.5in]
        md:pt-20
        md:pb-28
      "
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_75%_35%,rgba(232,200,188,0.16),transparent_55%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1100px)] h-px bg-[#E8DDD8]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-12
          lg:gap-16
          items-center
        "
      >
        {/* Text — left side, takes majority of width */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <AboutContent />
        </div>

        {/* Portrait — right side */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
