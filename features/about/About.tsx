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
 * • Removed top divider / border (was cluttering Hero → About)
 * • Simplified top spacing for a cleaner transition
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
        pt-20
        pb-28
        md:pt-24
        md:pb-32
      "
    >
      {/* Soft ambient only — no hard line */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_75%_35%,rgba(232,200,188,0.14),transparent_55%)]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_auto_1fr]
            items-center
            gap-14
            xl:gap-20
          "
        >
          {/* LEFT */}
          <div className="order-2 lg:order-1 max-w-xl">
            <AboutContent />
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <AboutImage />
          </div>

          {/* RIGHT */}
          <div className="order-3 flex items-center justify-start lg:pl-4">
            <Credentials />
          </div>
        </div>
      </div>
    </section>
  );
}
