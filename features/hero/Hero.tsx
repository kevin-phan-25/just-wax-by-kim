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
 * • Keeps navbar clearance spacer
 * • Maintains ~¾ inch gap under nav
 * • Adds exact ¾ inch spacing below Hero
 * • Responsive phone / iPad / desktop
 * • Keeps image natural height
 *
 * ---
 *
 */

import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="
        pt-[168px]
        pb-[72px]
        w-full
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
    </section>
  );
}
