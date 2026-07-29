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
 * • Added transition spacing from hero
 * • Rebalanced image/content layout
 * • Reduced visual density
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
        pt-32
        pb-28
        md:pt-40
        md:pb-36
      "
    >

      {/* Soft transition from hero */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-px
          w-[min(92%,1200px)]
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
          gap-12
          lg:gap-16
          items-center
        "
      >

        {/* Content LEFT */}
        <div
          className="
            lg:col-span-7
            order-1
          "
        >
          <AboutContent />
        </div>


        {/* Image RIGHT */}
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
