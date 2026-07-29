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
 * • Matched Hero → About spacing with Hero top breathing room
 * • Removed margin spacing issue
 * • Uses internal section padding for reliable separation
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

        /*
          Large editorial transition from Hero.
          Uses padding instead of margin so spacing
          cannot collapse between sections.
        */
        pt-[200px]

        pb-20

        md:pt-[200px]
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
