/**
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Centered typography
 * • Improved paragraph spacing
 * • Removed restrictive layout
 * • Premium storytelling flow
 *
 * ---
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        w-full

        mx-auto

        px-6
        md:px-10
        lg:px-16
      "
    >

      {/* Header */}
      <header
        className="
          max-w-5xl

          mx-auto

          text-center

          mb-20
          md:mb-28
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
            font-serif

            text-5xl

            md:text-6xl

            lg:text-7xl

            leading-[1.08]

            tracking-[-0.04em]

            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>


      </header>



      {/* Portrait */}
      <div
        className="
          max-w-4xl

          mx-auto

          mb-24
          md:mb-32
        "
      >
        <AboutImage />
      </div>




      {/* Story */}
      <div
        className="
          max-w-3xl

          mx-auto

          text-center

          text-[#75635B]

          text-lg

          md:text-xl

          leading-[2]
        "
      >

        {aboutContent.description.map(
          (paragraph, index) => (
            <p
              key={index}
              className="
                mb-12

                md:mb-16

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

            md:text-5xl

            leading-tight

            text-[#3B2A26]
          "
        >
          A journey built on passion,
          confidence, and making every
          client feel beautiful.
        </p>


      </div>


    </article>
  );
}
