/**
 * ---
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury responsive About section.
 *
 * Updates:
 * • Phone optimized
 * • iPad optimized
 * • Desktop editorial layout
 * • Removed width restrictions
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

        py-16

        sm:py-20

        md:py-28

        lg:py-40
      "
    >
      <AboutContent />
    </section>
  );
}
