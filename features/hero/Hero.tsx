/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Fixed navbar overlap
 * • Removed bottom empty space
 * • Image controls hero height
 * • Improved desktop/mobile spacing
 *
 * ---
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative

        w-full

        bg-[#FBF7F4]

        pt-[170px]

        md:pt-[190px]

        lg:pt-[210px]

        pb-8

        overflow-hidden
      "
    >

      <div
        className="
          container-luxury

          w-full

          mx-auto
        "
      >

        <HeroImage />


      </div>

    </section>
  );
}
