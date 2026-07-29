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
 * • Restored the balanced 2-column grid + spacing that felt perfect
 * • Kept cream background + thin top rule for smooth Hero transition
 * • Image left / content right on desktop, stacked on mobile
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
        py-24
      "
    >
      {/* Thin top rule – soft transition from Hero */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(92%,1100px)]
          h-px
          bg-[#E8DDD8]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <AboutImage />
        </div>

        {/* Content */}
        <div>
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
