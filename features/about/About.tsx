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
 * • Navbar clearance: nav height + ⅜ inch (50% less gap)
 * • Matched background to site (#FBF7F4)
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
        border-0
        pb-16
        sm:pb-20
        md:pb-32
        lg:pb-40
        overflow-hidden
      "
    >
      {/*
        Spacer = navbar height + 0.375in (50% of previous 0.75in gap)
      */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[calc(110px+0.375in)]
          md:h-[calc(140px+0.375in)]
          xl:h-[calc(168px+0.375in)]
        "
      />

      <AboutContent />
    </section>
  );
}
