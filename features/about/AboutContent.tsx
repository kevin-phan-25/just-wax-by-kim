/**
 * ---
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Responsive typography
 * • Centered storytelling
 * • Improved paragraph spacing
 * • Removed layout restrictions
 *
 * ---
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        flex

        w-full

        flex-col

        items-center

        px-5

        sm:px-8

        md:px-12

        lg:px-20

        xl:px-28
      "
    >

      {/* Header */}
      <header
        className="
          w-full

          max-w-6xl

          mx-auto

          text-center

          mb-16

          sm:mb-20

          md:mb-28
        "
      >

        <span
          className="
            block

            uppercase

            tracking-[0.45em]

            text-[10px]

            sm:text-xs

            text-[#8C5A6B]

            mb-6

            sm:mb-8
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            max-w-5xl

            mx-auto

            font-serif

            text-center

            text-4xl

            sm:text-5xl

            md:text-6xl

            lg:text-7xl

            leading-[1.08]

            tracking-[-0.045em]

            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>

      </header>



      {/* Portrait */}
      <div
        className="
          w-full

          max-w-md

          sm:max-w-lg

          md:max-w-2xl

          lg:max-w-3xl

          mx-auto

          mb-16

          sm:mb-24

          md:mb-32
        "
      >
        <AboutImage />
      </div>




      {/* Story */}
      <div
        className="
          w-full

          max-w-3xl

          mx-auto

          text-center

          text-[#75635B]

          text-base

          sm:text-lg

          md:text-xl

          leading-[1.9]
        "
      >

        {aboutContent.description.map(
          (paragraph, index) => (
            <p
              key={index}
              className="
                mb-8

                sm:mb-10

                md:mb-14

                tracking-[0.015em]
              "
            >
              {paragraph}
            </p>
          )
        )}



        <p
          className="
            mt-16

            sm:mt-20

            font-serif

            text-3xl

            sm:text-4xl

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
