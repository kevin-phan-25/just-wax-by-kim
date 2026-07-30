/**
 * ------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Changes:
 * • Portrait remains focal point
 * • Thoughtful Experience moved right
 * • Uses full horizontal space
 * • Removes unused white space
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
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >

        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-[1.1fr_380px_0.9fr]

            xl:grid-cols-[1.2fr_430px_1fr]

            items-center

            gap-12
            xl:gap-16
          "
        >

          {/* LEFT STORY */}
          <div>
            <AboutContent />
          </div>


          {/* CENTER PORTRAIT */}
          <div
            className="
              flex
              justify-center
            "
          >
            <AboutImage />
          </div>


          {/* RIGHT EXPERIENCE */}
          <div
            className="
              lg:pl-6
            "
          >
            <Credentials />
          </div>

        </div>

      </div>

    </section>
  );
}
