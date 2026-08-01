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
 * • Top spacer ½ inch (pairs with Hero bottom for 1 inch total gap)
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
      {/* ½ inch top spacer — pairs with Hero pb-[0.5in] = 1 inch total */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[0.5in]
        "
      />

      <AboutContent />
    </section>
  );
}
