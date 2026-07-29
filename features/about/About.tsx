/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 * Entire block is centered. Text on the left, portrait pushed to the right.
 *
 * Changes:
 * • July 29, 2026 – Centered the whole content block (mx-auto)
 * • July 29, 2026 – Flex layout so image is pushed right inside the centered container
 * • July 29, 2026 – Safe top spacing that does not push the section off-screen
 * • July 29, 2026 – Removed large empty right-side space
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

      {/* Centered container */}
      <div className="relative mx-auto max-w-5xl">
        <div
          className="
            flex flex-col
            lg:flex-row
            items-center
            justify-between
            gap-12
            lg:gap-16
          "
        >
          {/* Text — left */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* Image — pushed right */}
          <div className="w-full lg:w-[40%] order-1 lg:order-2 flex justify-center lg:justify-end">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
