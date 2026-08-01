/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Luxury editorial About content.
 *
 * Updates:
 * • Removed accent divider
 * • Added proper paragraph spacing
 * • Improved editorial typography
 * • Portrait integrated into story
 *
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";
import AboutImage from "./AboutImage";

export default function AboutContent() {
  return (
    <article
      className="
        mx-auto
        max-w-7xl
      "
    >

      {/* Header */}
      <header
        className="
          text-center
          mb-16
        "
      >
        <span
          className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-[#8C5A6B]
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            mt-6
            mx-auto
            max-w-4xl
            font-serif
            text-4xl
            md:text-5xl
            leading-[1.15]
            tracking-[-0.035em]
            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>

      </header>



      {/* Story */}
      <div
        className="
          mx-auto
          max-w-5xl
          text-[#7E6B63]
          text-base
          leading-[2]
        "
      >

        {/* Image */}
        <div
          className="
            float-left
            mr-12
            mb-10
            w-full
            sm:w-[300px]
            lg:w-[340px]
          "
        >
          <AboutImage />
        </div>


        {aboutContent.description.map(
          (paragraph, index) => (
            <p
              key={index}
              className="
                mb-10
                tracking-[0.01em]
              "
            >
              {paragraph}
            </p>
          )
        )}


        <div className="clear-both" />

      </div>

    </article>
  );
}
