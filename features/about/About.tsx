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
 * • Navbar clearance preserved
 * • Bottom spacing scales
 * • Matched background to site (#FBF7F4)
 * • Top spacer lives on AboutContent
 *
 * ---
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      className="
        w-full
        bg-[#FBF7F4]
        pb-12
        md:pb-16
        lg:pb-[72px]
      "
    >
      <AboutContent />
    </section>
  );
}
