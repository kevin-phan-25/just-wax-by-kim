/**
 * ------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Left — Portrait
 * • Center — Experience highlights
 * • Right — Brand story
 *
 * Changes:
 * • Balanced three-column spacing
 * • Portrait shifted right
 * • Equal column distribution
 * ------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Credentials from "./Credentials";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-28
      "
    >

      <div
        className="
          w-full
          px-6
          lg:px-12
          xl:px-20
        "
      >

        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-3

            items-center

            gap-x-20
            xl:gap-x-28

            gap-y-16
          "
        >

          {/* LEFT - PHOTO */}
          <div
            className="
              flex
              justify-start

              lg:translate-x-[48px]
            "
          >
            <AboutImage />
          </div>


          {/* CENTER - EXPERIENCE */}
          <div
            className="
              w-full
            "
          >
            <Credentials />
          </div>


          {/* RIGHT - STORY */}
          <div
            className="
              w-full
              max-w-xl
            "
          >
            <AboutContent />
          </div>


        </div>

      </div>

    </section>
  );
}
