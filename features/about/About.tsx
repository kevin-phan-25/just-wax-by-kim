/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Updates:
 * • Supports 3-cell editorial grid
 * • Full width layout
 * • Responsive spacing
 * • Prevents global width restrictions
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

      <div
        className="
          w-full

          mx-auto
        "
      >

        <AboutContent />

      </div>

    </section>
  );
}
