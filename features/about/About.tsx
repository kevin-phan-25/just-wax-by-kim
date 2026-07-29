/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Classic 2-column layout: text on the left, portrait on the right.
 * Entire block is centered on the page.
 *
 * Changes:
 * • July 29, 2026 – Switched to clear 2-column grid (left / right)
 * • July 29, 2026 – Centered container (max-w-5xl / max-w-6xl)
 * • July 29, 2026 – Safe top spacing after Hero
 * • July 29, 2026 – Image pushed to the right column
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
          bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,200,188,0.15),transparent_55%)]
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

      {/* Centered 2-column container */}
      <div className="relative mx-auto max-w-5xl lg:max-w-6xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            xl:gap-20
            items-center
          "
        >
          {/* LEFT — Text */}
          <div className="order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* RIGHT — Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
