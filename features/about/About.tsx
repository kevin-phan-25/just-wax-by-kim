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
 * • Full width luxury composition
 * • Centered editorial layout
 * • Premium spacing system
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

        overflow-hidden

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
