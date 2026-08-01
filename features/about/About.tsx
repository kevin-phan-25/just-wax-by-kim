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
 * • Bottom spacing scales to ¾ inch
 * • Matched background to site (#FBF7F4)
 * • Top padding ½ inch (combines with Hero bottom padding for 1 inch total gap)
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
        pt-[0.5in]
        pb-12
        md:pb-16
        lg:pb-[72px]
      "
    >
      <AboutContent />
    </section>
  );
}
