/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Updates:
 * • Removed width restrictions
 * • Full viewport composition
 * • Centered luxury layout
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

        w-screen

        left-1/2

        -translate-x-1/2

        bg-[#FBF7F4]

        py-24
        md:py-32
        lg:py-40
      "
    >
      <AboutContent />
    </section>
  );
}
