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
 * • Removed fixed widths
 * • Uses full section width
 * • Flexible editorial composition
 * • Improved spacing balance
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

            lg:grid-cols-[1fr_1fr_1.4fr]

            items-center

            gap-12
            xl:gap-20
          "
        >

          {/* LEFT - PORTRAIT */}
          <div
            className="
              flex
              justify-start
            "
          >
            <AboutImage />
          </div>


          {/* CENTER - EXPERIENCE */}
          <div>
            <Credentials />
          </div>


          {/* RIGHT - STORY */}
          <div>
            <AboutContent />
          </div>

        </div>

      </div>

    </section>
  );
}
