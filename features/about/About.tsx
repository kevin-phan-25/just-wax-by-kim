/**
 * -----------------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout
 * • Left   — Heading + Description
 * • Center — Portrait
 * • Right  — Credentials
 *
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
      "
    >
      {/* Ambient Glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_80%_30%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      {/* Top Divider */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-px
          w-[min(92%,1240px)]
          bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_auto_0.85fr]
            items-center
            gap-y-16
            gap-x-12
            xl:gap-x-24
          "
        >
          {/* LEFT */}
          <div
            className="
              order-2
              lg:order-1
              self-center
            "
          >
            <AboutContent />
          </div>

          {/* CENTER */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              self-center
            "
          >
            <AboutImage />
          </div>

          {/* RIGHT */}
          <div
            className="
              order-3
              flex
              items-center
              justify-start
              h-full
            "
          >
            <Credentials />
          </div>
        </div>
      </div>
    </section>
  );
}
