/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Layout:
 * • Left — Portrait
 * • Center — Credentials / Experience
 * • Right — Brand Story
 *
 * Updates:
 * • Balanced three-column editorial layout
 * • Better desktop spacing
 * • Improved tablet stacking
 * • Uses full available width
 * • Maintains luxury magazine aesthetic
 * -----------------------------------------------------------------------------
 */

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Credentials from "./Credentials";


export default function About() {

  return (

    <section
      id="about"
      className="
        section-padding-lg

        w-full
      "
    >

      <div
        className="
          w-full

          px-6

          md:px-10

          lg:px-14

          xl:px-20
        "
      >

        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-3

            items-center

            gap-y-16

            lg:gap-x-12

            xl:gap-x-20
          "
        >



          {/* LEFT COLUMN - PORTRAIT */}
          <div
            className="
              flex

              justify-center

              lg:justify-start

              lg:translate-x-8

              xl:translate-x-12
            "
          >

            <AboutImage />

          </div>




          {/* CENTER COLUMN - CREDENTIALS */}
          <div
            className="
              w-full

              max-w-md

              mx-auto
            "
          >

            <Credentials />

          </div>




          {/* RIGHT COLUMN - STORY */}
          <div
            className="
              w-full

              max-w-xl

              mx-auto

              lg:mx-0
            "
          >

            <AboutContent />

          </div>



        </div>

      </div>


    </section>

  );

}
