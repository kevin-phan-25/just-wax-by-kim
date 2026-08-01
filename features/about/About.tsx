/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Single editorial column
 * • Image wrapped by story text
 * • Magazine-inspired composition
 * • Full width luxury spacing
 *
 * Updates:
 * • Removed three-column grid
 * • Removed Credentials section
 * • About image now sits inside editorial content
 * • Text wraps naturally around portrait
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
          lg:px-14
          xl:px-20
        "
      >
        <AboutContent />
      </div>
    </section>
  );
}
