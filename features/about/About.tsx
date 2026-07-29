/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Full-width 2-column grid — text left, portrait right.
 * Uses the entire available space with no dead areas.
 *
 * Changes:
 * • July 29, 2026 – Switched to full-width CSS Grid (no float)
 * • July 29, 2026 – Wider container so content fills the section
 * • July 29, 2026 – Image on the right, text on the left
 * • July 29, 2026 – Eliminated empty right-side space
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
          bg-[radial-gradient(ellipse_at_80%_30%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1200px)] h-px bg-[#E8DDD8]
        "
      />

      {/* Full-width container */}
      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-14
            xl:gap-16
            items-center
          "
        >
          {/* LEFT — Text (uses 7 columns) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* RIGHT — Image (uses 5 columns) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
