/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Design:
 * • Full width luxury composition
 * • Editorial asymmetrical layout
 * • Spacious premium beauty branding
 * • Portrait + story experience
 * -----------------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F4]
        py-32
        md:py-40
      "
    >
      <AboutContent />
    </section>
  );
}
