/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial text content for About section.
 *
 * Changes:
 * • Optimized for floating portrait layout
 * • Removed credential dependency
 * • Increased editorial spacing
 * • Allows natural text wrapping around image
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";

export default function AboutContent() {
  return (
    <div className="w-full">

      {/* Eyebrow */}
      <p
        className="
          mb-5
          text-[0.62rem]
          uppercase
          tracking-[0.38em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>


      {/* Main Heading */}
      <h2
        className="
          max-w-3xl
          font-serif
          text-3xl
          sm:text-[2.2rem]
          lg:text-[2.65rem]
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>


      {/* Accent */}
      <div
        className="
          my-8
          h-px
          w-14
          bg-[#D4A9B6]
        "
      />


      {/* Editorial Body */}
      <div
        className="
          max-w-3xl
          text-[0.95rem]
          sm:text-[1rem]
          leading-[2]
          text-[#7E6B63]
        "
      >
        <p>
          {aboutContent.description}
        </p>

        <p className="mt-8">
          At Just Wax by Kim, every detail is thoughtfully considered to create
          an experience that feels calm, welcoming, and personalized. From the
          moment you arrive, the focus is on comfort, confidence, and helping
          you feel beautifully cared for.
        </p>
      </div>

    </div>
  );
}
