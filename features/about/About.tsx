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
 * • Left   — Heading + Description
 * • Center — Portrait
 * • Right  — Credentials
 *
 * Changes:
 * • Switched from 2-column to editorial 3-column layout
 * • Portrait becomes the visual centerpiece
 * • Credentials now sit to the right of the portrait
 * • Preserved responsive mobile stacking
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
        pt-16
        pb-24
        md:mt-20
        md:pt-20
        md:pb-28
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

      <div className="relative mx-auto max-w-7xl">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.3fr_auto_0.9fr]
            items-start
            gap-12
            xl:gap-20
          "
        >
          {/* ------------------------------------------------------------------
             LEFT COLUMN
          ------------------------------------------------------------------- */}
          <div className="order-2 lg:order-1">
            <AboutContent />
          </div>

          {/* ------------------------------------------------------------------
             CENTER PORTRAIT
          ------------------------------------------------------------------- */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
            "
          >
            <AboutImage />
          </div>

          {/* ------------------------------------------------------------------
             RIGHT SIDEBAR
          ------------------------------------------------------------------- */}
          <div
            className="
              order-3
              pt-2
              lg:pt-10
            "
          >
            <Credentials />
          </div>
        </div>

      </div>
    </section>
  );
}
