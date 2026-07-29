/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Left editorial content for the About section.
 *
 * Changes:
 * • Removed Credentials component
 * • Increased visual balance with portrait
 * • Narrowed text width for luxury editorial feel
 * -----------------------------------------------------------------------------
 */

import { aboutContent } from "./about.data";

export default function AboutContent() {
  return (
    <div className="w-full max-w-xl">
      {/* Eyebrow */}
      <p
        className="
          mb-4
          text-[0.62rem]
          uppercase
          tracking-[0.35em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      {/* Heading */}
      <h2
        className="
          font-serif
          text-3xl
          sm:text-[2.15rem]
          lg:text-[2.55rem]
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
          max-w-lg
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent Line */}
      <div
        className="
          mt-8
          mb-8
          h-px
          w-14
          bg-[#D4A9B6]
        "
      />

      {/* Description */}
      <p
        className="
          max-w-md
          text-[0.95rem]
          leading-[2]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>
    </div>
  );
}
