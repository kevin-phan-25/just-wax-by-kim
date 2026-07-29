/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Full-width 2-column grid with reduced dead space.
 *
 * Changes:
 * • July 29, 2026 – Tightened column gap
 * • July 29, 2026 – Larger portrait to fill the right side
 * • July 29, 2026 – Added soft vertical accent to reduce emptiness
 * • July 29, 2026 – Body text uses more of the left column
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

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-10
            xl:gap-12
            items-center
          "
        >
          {/* LEFT — Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* RIGHT — Image + soft accent */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Soft vertical accent line to fill space */}
            <div
              aria-hidden
              className="
                hidden lg:block
                absolute left-0 top-1/2 -translate-y-1/2
                w-px h-40 bg-[#E8DDD8]/80
              "
            />
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
