/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Removed divider
 * • Removed restrictions
 * • Full width composition
 * • Improved storytelling layout
 * • Premium editorial spacing
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        w-full
        px-6
        sm:px-10
        lg:px-20
        xl:px-32
      "
    >

      {/* Header */}
      <header
        className="
          max-w-none
          mb-24
        "
      >
        <span
          className="
            block
            uppercase
            tracking-[0.45em]
            text-xs
            text-[#8C5A6B]
            mb-8
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            max-w-[1100px]
            font-serif
            text-5xl
            md:text-6xl
            lg:text-7xl
            leading-[1.05]
            tracking-[-0.045em]
            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>

      </header>



      {/* Editorial Layout */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          gap-16
          lg:gap-24
          items-start
        "
      >


        {/* Image */}
        <div
          className="
            lg:sticky
            lg:top-24
          "
        >
          <AboutImage />
        </div>



        {/* Story */}
        <div
          className="
            text-[#75635B]
            text-lg
            md:text-xl
            leading-[2]
            max-w-none
          "
        >

          {aboutContent.description.map(
            (paragraph, index) => (
              <p
                key={index}
                className="
                  mb-14
                  tracking-[0.015em]
                "
              >
                {paragraph}
              </p>
            )
          )}


          <p
            className="
              mt-20
              font-serif
              text-3xl
              md:text-4xl
              leading-tight
              text-[#3B2A26]
            "
          >
            A journey built on passion,
            confidence, and making every
            client feel beautiful.
          </p>


        </div>


      </div>

    </article>
  );
}
