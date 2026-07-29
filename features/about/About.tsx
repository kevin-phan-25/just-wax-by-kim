/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Editorial text flow
 * • Portrait floats within content
 * • Credentials positioned beneath portrait
 *
 * Changes:
 * • Replaced rigid grid layout with editorial composition
 * • Portrait now integrates with text flow
 * • Improved luxury magazine-style spacing
 * -----------------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Credentials from "./Credentials";

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
        pt-20
        pb-28
        md:mt-20
        md:pt-24
        md:pb-32
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_80%_30%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      {/* Top divider */}
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

      <div className="relative mx-auto max-w-6xl">

        <div
          className="
            relative
            text-[#3B2A26]
          "
        >

          {/* Floating portrait */}
          <div
            className="
              float-none
              md:float-right
              md:ml-14
              lg:ml-20
              mb-12
              md:mb-8
            "
          >
            <AboutImage />

            {/* Credentials under image */}
            <div
              className="
                mt-14
                w-full
              "
            >
              <Credentials />
            </div>
          </div>


          {/* Editorial copy */}
          <AboutContent />

        </div>

      </div>
    </section>
  );
}
