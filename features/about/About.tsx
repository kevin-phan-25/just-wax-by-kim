/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Editorial two-column composition
 * • Portrait + brand story
 * • Full width luxury spacing
 *
 * Updates:
 * • Removed credentials column
 * • Removed restrictive layout
 * • Improved whitespace
 * • Balanced image and text placement
 *
 * -----------------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="
        section-padding-lg
        w-full
      "
    >
      <div
        className="
          w-full
          px-6
          md:px-10
          lg:px-16
          xl:px-24
        "
      >
        <AboutContent />
      </div>
    </section>
  );
}
