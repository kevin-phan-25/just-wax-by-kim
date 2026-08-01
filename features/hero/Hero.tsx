/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Matches Navbar height spacing
 * • Adds 1/2 inch breathing room below navbar
 * • Removes bottom whitespace
 * • Lets image control hero height
 * • Responsive mobile/tablet/desktop
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

        /*
          Navbar spacing:
          Mobile navbar: 110px
          Tablet: 140px
          Desktop: 168px

          Added breathing room:
          ~32px
        */

        pt-[142px]

        md:pt-[172px]

        xl:pt-[200px]

        pb-10

        overflow-hidden
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
