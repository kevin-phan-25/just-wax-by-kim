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
 * • Matched background to site (#FBF7F4)
 * • Top spacer ½ inch (pairs with Hero)
 * • Bottom spacer ½ inch (pairs with Services)
 *
 * ---
 */

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full
        bg-[#FBF7F4]
        pb-[0.5in]
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
