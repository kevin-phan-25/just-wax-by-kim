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
 * • Removed divider accents
 * • Responsive spacing
 * • Supports editorial grid
 *
 * ---
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative

        w-full

        bg-[#FBF7F4]

        py-16

        sm:py-20

        md:py-32

        lg:py-40

        overflow-hidden
      "
    >
      <AboutContent />
    </section>
  );
}
