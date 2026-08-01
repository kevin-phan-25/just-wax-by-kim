/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Updates:
 * • Full width editorial layout
 * • Responsive spacing
 * • Supports 3-cell composition
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

        overflow-hidden

        py-20
        sm:py-24
        md:py-32
        lg:py-40
      "
    >
      <AboutContent />
    </section>
  );
}
