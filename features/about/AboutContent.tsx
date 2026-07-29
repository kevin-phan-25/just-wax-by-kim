/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Text content that fills the left column.
 *
 * Changes:
 * • July 29, 2026 – Removed max-width constraints so text uses the full column
 * • July 29, 2026 – Balanced type scale
 * -----------------------------------------------------------------------------
 */
import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div className="w-full">
      {/* Eyebrow */}
      <p
        className="
          mb-4
          text-[0.6rem]
          uppercase tracking-[0.35em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      {/* Title */}
      <h2
        className="
          font-serif
          text-2xl sm:text-3xl lg:text-[2.4rem]
          leading-[1.2]
          tracking-[-0.02em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent line */}
      <div className="my-6 h-px w-12 bg-[#D4A9B6]" />

      {/* Body */}
      <p
        className="
          text-[0.9rem] sm:text-[0.95rem]
          leading-[1.85]
          text-[#7E6B63]
          max-w-xl
        "
      >
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}
