/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial founder story content.
 *
 * Changes:
 * • Luxury storytelling layout
 * • Softer typography
 * • Removed corporate styling
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";
import Credentials from "./Credentials";


export default function AboutContent() {
  return (
    <div className="max-w-xl">

      {/* Eyebrow */}
      <p
        className="
          mb-6
          text-[0.65rem]
          uppercase
          tracking-[0.35em]
          text-[#B28A62]
          font-medium
        "
      >
        {aboutContent.eyebrow}
      </p>


      {/* Title */}
      <h2
        className="
          font-serif
          text-4xl
          md:text-5xl
          leading-[1.12]
          tracking-[-0.03em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>


      {/* Divider */}
      <div
        className="
          my-8
          h-px
          w-16
          bg-[#D4A9B6]
        "
      />


      {/* Description */}
      <p
        className="
          text-[1.05rem]
          leading-[1.9]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>


      {/* Values */}
      <Credentials />

    </div>
  );
}
