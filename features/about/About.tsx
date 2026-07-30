/**
 * ------------------------------------------------------------------
 * File: features/about/About.tsx
 *
 * Description:
 * Luxury editorial About section.
 *
 * Changes:
 * • Text wraps around portrait
 * • Removed rigid 3-column layout
 * • Uses full available width
 * • Improved editorial balance
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
            relative
          "
        >

          {/* PORTRAIT FLOAT */}
          <div
            className="
              float-none

              lg:float-right

              lg:w-[380px]
              xl:w-[430px]

              lg:ml-16
              lg:mb-10
            "
          >
            <AboutImage />
          </div>


          {/* TEXT CONTENT */}
          <div
            className="
              max-w-5xl
            "
          >
            <AboutContent />
          </div>


          {/* CREDENTIALS */}
          <div
            className="
              mt-14

              max-w-xl

              lg:ml-4
            "
          >
            <Credentials />
          </div>


          {/* CLEAR FLOAT */}
          <div className="clear-both" />

        </div>

      </div>

    </section>
  );
}
