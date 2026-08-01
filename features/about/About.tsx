/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury responsive About section.
 *
 * Updates:
 * • Mobile / tablet / desktop optimization
 * • Full width composition
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

        bg-[#FBF7F4]

        py-16

        sm:py-20

        md:py-28

        lg:py-40

        overflow-hidden
      "
    >
      <AboutContent />
    </section>
  );
}
