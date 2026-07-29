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
 * • Reduced spacing from hero
 * • Balanced image and content
 * • Softer luxury composition
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
        pt-24
        pb-20
        md:pt-28
        md:pb-24
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
          max-w-6xl
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
          lg:gap-16
          items-center
        "
      >

        {/* Content */}
        <div
          className="
            lg:col-span-7
            order-1
          "
        >
          <AboutContent />
        </div>


        {/* Image */}
        <div
          className="
            lg:col-span-5
            order-2
            flex
            justify-center
          "
        >
          <AboutImage />
        </div>

      </div>

    </section>
  );
}
