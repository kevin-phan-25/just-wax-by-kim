/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/AboutContent.tsx
 *
 * Description:
 * Editorial text content for About section.
 *
 * Updates:
 * • Added image wrapping layout
 * • Luxury magazine typography
 * • Paragraph spacing preserved
 * • Portrait floats naturally with content
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
        max-w-6xl
      "
    >

      {/* Header */}
      <header
        className="
          text-center
          mb-12
        "
      >
        <span
          className="
            inline-block
            text-[0.68rem]
            uppercase
            tracking-[0.35em]
            text-[#8C5A6B]
          "
        >
          {aboutContent.eyebrow}
        </span>


        <h2
          className="
            mt-5
            font-serif
            text-4xl
            sm:text-5xl
            leading-tight
            tracking-[-0.03em]
            text-[#3B2A26]
          "
        >
          {aboutContent.title}
        </h2>


        <div
          className="
            mx-auto
            mt-8
            h-px
            w-14
            bg-[#D4A9B6]
          "
        />
      </header>



      {/* Editorial Story */}
      <div
        className="
          text-[#7E6B63]
          text-[1rem]
          leading-[2]
          tracking-[0.01em]
        "
      >

        <div
          className="
            float-left
            mr-10
            mb-8
            w-full
            sm:w-[320px]
            lg:w-[360px]
          "
        >
          <AboutImage />
        </div>


        {aboutContent.description.map((paragraph, index) => (
          <p
            key={index}
            className="
              mb-8
            "
          >
            {paragraph}
          </p>
        ))}


        <div className="clear-both" />

      </div>


    </article>
  );
}
