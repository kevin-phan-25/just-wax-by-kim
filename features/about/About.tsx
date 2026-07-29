/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * CSS Grid layout — text left, portrait right.
 * Soft ambient wash for volume.
 *
 * Changes:
 * • July 29, 2026 – Switched from float to pure CSS Grid
 * • July 29, 2026 – Image on the right
 * • July 29, 2026 – Centered container, no empty right-side space
 * • July 29, 2026 – Safe top spacing after Hero
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
          bg-[radial-gradient(ellipse_at_75%_30%,rgba(232,200,188,0.16),transparent_55%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,1000px)] h-px bg-[#E8DDD8]
        "
      />

      {/* Centered grid container */}
      <div className="relative mx-auto max-w-5xl lg:max-w-6xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* LEFT — Text (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* RIGHT — Image (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
