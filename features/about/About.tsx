/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Portrait on the right, text wraps around it.
 *
 * Changes:
 * • July 29, 2026 – Returned to float for true text wrap
 * • July 29, 2026 – Reduced overall type scale to stop collisions
 * • July 29, 2026 – Controlled container width to avoid empty space
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
          bg-[radial-gradient(ellipse_at_75%_30%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      {/* Thin top rule */}
      <div
        aria-hidden
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(92%,960px)] h-px bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="relative">
          {/* Portrait — right side, text wraps around it */}
          <div
            className="
              mb-10 mx-auto
              w-full max-w-[240px] sm:max-w-[260px]
              lg:float-right
              lg:ml-10 lg:mb-6
            "
          >
            <AboutImage />
          </div>

          <AboutContent />
        </div>
      </div>
    </section>
  );
}
