/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Updates:
 * • Centered luxury composition
 * • Improved visual hierarchy
 * • Full width storytelling layout
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

        py-24
        md:py-32
        lg:py-40
      "
    >
      <AboutContent />
    </section>
  );
}
