/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Updates:
 * • Full width layout
 * • Responsive editorial spacing
 * • Removed duplicated hero spacing
 * • Supports editorial grid
 * • Matched luxury background system
 *
 * ---
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      className="
        w-full

        bg-[#FCF8F3]

        pb-12

        md:pb-16

        xl:pb-20
      "
    >
      <AboutContent />
    </section>
  );
}
