/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 * -----------------------------------------------------------------------------
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#FBF7F4]
      "
    >

      {/* Hero Image */}
      <HeroImage />


      {/* Overlay Content Layer */}
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
            py-32
            md:py-40
            xl:py-48
          "
        >

          {/* Your hero text/content goes here */}

        </div>

      </div>


    </section>
  );
}
