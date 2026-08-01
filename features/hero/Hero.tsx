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
 * • Keeps navbar clearance logic
 * • Added ½ inch top spacer
 * • Added ½ inch bottom spacer
 * • Responsive phone / iPad / desktop
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
      "
    >

      {/* TOP SPACER */}
      <div
        className="
          h-8
          md:h-10
          lg:h-[48px]
        "
      />

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


      {/* BOTTOM SPACER */}
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
