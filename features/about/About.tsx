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
 * • Increased top spacing so About sits a full 2 inches below the Hero
 * • Clean, even breathing room between the two thin rules
 * • Preserved editorial layout
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
        mt-48          /* ← 2 inches (192 px) after the Hero bottom rule */
        pt-16          /* ← modest internal padding so content isn’t flush with the divider */
        pb-20
        md:mt-52
        md:pt-20
        md:pb-28
      "
    >
      {/* Section divider – now sits a full 2" below the Hero rule */}
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
