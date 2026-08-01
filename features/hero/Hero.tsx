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
 * • Reduced hero height
 * • Added navbar breathing space
 * • Prevented hero image cropping
 * • Better luxury banner presentation
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

        bg-[#FBF7F4]

        pt-16
        md:pt-20

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

          min-h-[75vh]
          md:min-h-[78vh]
          lg:min-h-[82vh]

          flex
          items-center
        "
      >

        <div
          className="
            container-luxury
            w-full

            py-16
            md:py-20
            lg:py-24
          "
        >

          {/*
            Hero content:
            - headline
            - subtitle
            - CTA buttons
          */}

        </div>

      </div>

    </section>
  );
}
