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
 * • Keeps navbar clearance
 * • Responsive phone / iPad / desktop spacing
 * • Bottom spacing scales to ¾ inch desktop
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
        w-full
        pt-[168px]
        pb-12
        md:pb-16
        lg:pb-[72px]
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
