/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Fixed hero clipping
 * • Added navbar breathing space
 * • Allows image to control height
 * • Better mobile/tablet scaling
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

        pt-24
        md:pt-28
        lg:pt-32

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


        {/* Future hero text/buttons */}
        <div
          className="
            absolute

            inset-0

            z-10

            flex

            items-center
          "
        >

          <div
            className="
              container-luxury

              w-full

              px-6
              md:px-10
            "
          >

            {/* 
              Hero headline
              Subtitle
              CTA buttons
            */}

          </div>

        </div>

      </div>

    </section>
  );
}
