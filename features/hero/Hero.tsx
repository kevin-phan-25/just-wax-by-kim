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
 * • Added navbar breathing space
 * • Premium rounded hero canvas
 * • Shifted hero banner down for luxury spacing
 * • Responsive hero height
 * • Stabilized absolute image positioning
 *
 * ---
 *
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen

        bg-[#FBF7F4]

        pt-20
        md:pt-24

        overflow-hidden
      "
    >

      {/* Hero Image */}
      <HeroImage />


      {/* Hero Content Layer */}
      <div
        className="
          relative
          z-10

          min-h-screen

          flex
          items-center
        "
      >

        <div
          className="
            container-luxury
            w-full

            py-24
            md:py-32
            xl:py-40
          "
        >

          {/*
            Hero content goes here:
            - headline
            - subtitle
            - CTA buttons
          */}

        </div>

      </div>


    </section>
  );
}
