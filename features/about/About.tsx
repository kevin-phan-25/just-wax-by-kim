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
 * • Left — Brand story
 * • Center — Portrait focal point
 * • Right — Experience highlights
 *
 * Changes (July 29, 2026):
 * • Added ~1 inch (96px) gap between Hero bottom and About top
 * • Cleaned top spacing so the transition no longer feels broken
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
        /* ~1 inch gap after Hero */
        mt-24
        pt-16
        pb-28
        md:mt-24
        md:pt-20
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
          bg-[radial-gradient(ellipse_at_75%_35%,rgba(232,200,188,0.16),transparent_55%)]
        "
      />

      {/* Top divider — sits at the start of the 1in gap zone */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(92%,1240px)]
          h-px
          bg-[#E8DDD8]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_auto_1fr]
            items-center
            gap-16
            xl:gap-24
          "
        >
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 max-w-xl">
            <AboutContent />
          </div>

          {/* IMAGE */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:translate-x-6
              xl:translate-x-10
            "
          >
            <AboutImage />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-3 flex items-center justify-start lg:pl-6">
            <Credentials />
          </div>
        </div>
      </div>
    </section>
  );
}
