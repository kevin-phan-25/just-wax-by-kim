/**
 *
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Keeps fixed navbar clearance
 * • Navbar height + ¾ inch gap preserved
 * • Adds ½ inch bottom spacing
 * • Responsive phone / iPad / desktop
 * • Keeps image natural height
 * • Unified background (#FBF7F4)
 *
 * ---
 *
 */

import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="
        w-full
        bg-[#FBF7F4]
        pt-[110px]
        md:pt-[140px]
        xl:pt-[168px]
      "
    >

      <div
        className="
          container-luxury
          w-full
          mx-auto
          px-4
          md:px-6
          lg:px-8
        "
      >
        <HeroImage />
      </div>


      {/* Bottom spacing: ½ inch */}
      <div
        className="
          h-8
          md:h-10
          lg:h-[48px]
        "
      />

    </section>
  );
}
