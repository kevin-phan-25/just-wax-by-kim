/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 *
 * Changes:
 * • Forced 1.25-inch gap after Hero using arbitrary value
 * • Guarantees space even if margin collapse or other styles interfere
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
        mt-[1.25in]     /* ← forced 1.25 inches – cannot be collapsed easily */
        pt-10
        pb-20
        md:mt-[1.5in]
        md:pt-14
        md:pb-28
      "
    >
      {/* Section divider */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(92%,1200px)]
          h-px
          bg-[#E8DDD8]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-12
          lg:gap-20
          items-center
        "
      >
        {/* Content */}
        <div className="lg:col-span-7 order-1">
          <AboutContent />
        </div>

        {/* Image */}
        <div className="lg:col-span-5 order-2 flex justify-center">
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
