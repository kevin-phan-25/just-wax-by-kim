/**
 * --------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 31, 2026
 *
 * Description:
 * Editorial text content for About section.
 *
 * Changes:
 * • Supports paragraph-based editorial content
 * • Added intentional paragraph spacing
 * • Removed duplicate About messaging
 * • Improved luxury typography rhythm
 * --------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";

export default function AboutContent() {
  return (
    <div>
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
          space-y-8
          text-[0.95rem]
          sm:text-[1rem]
          leading-[2]
          text-[#7E6B63]
        "
      >
        {aboutContent.description.map((paragraph, index) => (
          <p
            key={index}
            className="
              tracking-[0.01em]
            "
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
