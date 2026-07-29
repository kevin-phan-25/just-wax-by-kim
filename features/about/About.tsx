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
 * • Left   — Story content
 * • Center — Portrait
 * • Right  — Credentials
 *
 * Changes:
 * • Moved credentials back beside portrait
 * • Removed bottom stacking layout
 * • Created balanced editorial 3-column composition
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
          absolute inset-0
          bg-[radial-gradient(ellipse_at_80%_30%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      {/* Divider */}
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

      <div className="relative mx-auto max-w-7xl">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.1fr_auto_0.9fr]
            items-center
            gap-12
            xl:gap-20
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              order-2
              lg:order-1
            "
          >
            <AboutContent />
          </div>


          {/* IMAGE */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:translate-x-4
            "
          >
            <AboutImage />
          </div>


          {/* CREDENTIALS */}
          <div
            className="
              order-3
              flex
              items-center
            "
          >
            <Credentials />
          </div>

        </div>

      </div>
    </section>
  );
}
