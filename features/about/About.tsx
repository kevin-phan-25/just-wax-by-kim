/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Balanced two-column grid (text left, portrait right).
 *
 * Changes:
 * • July 29, 2026 – Removed extreme inch margins that pushed section off-screen
 * • July 29, 2026 – Restored safe, visible gap after Hero (mt-16 / md:mt-20)
 * • July 29, 2026 – Grid layout so content fills the section (no empty right side)
 * • July 29, 2026 – Image on the right
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
        mt-16
        pt-16
        pb-24
        md:mt-20
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
        {/* Text — left */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <AboutContent />
        </div>

        {/* Portrait — right */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
