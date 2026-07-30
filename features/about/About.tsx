/**
 * ------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Left — Portrait focal point
 * • Center — Experience highlights
 * • Right — Brand story
 *
 * Changes:
 * • Rebalanced three-column composition
 * • Portrait anchored left
 * • Credentials centered
 * • Content shifted right
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

            lg:grid-cols-[0.85fr_0.9fr_1.25fr]

            xl:grid-cols-[430px_360px_1fr]

            items-center

            gap-12
            xl:gap-16
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
          <div
            className="
              flex
              items-center
            "
          >
            <Credentials />
          </div>


          {/* RIGHT - BRAND STORY */}
          <div
            className="
              lg:pl-6
            "
          >
            <AboutContent />
          </div>


        </div>

      </div>

    </section>
  );
}
