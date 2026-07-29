/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Text that wraps around the floated portrait.
 * Smaller, calmer type scale to prevent overlapping.
 *
 * Changes:
 * • July 29, 2026 – Reduced title and body sizes
 * • July 29, 2026 – Tighter, more refined spacing
 * -----------------------------------------------------------------------------
 */
import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div>
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

      {/* Title — smaller so it doesn’t dominate */}
      <h2
        className="
          font-serif
          text-2xl sm:text-3xl
          leading-[1.2]
          tracking-[-0.02em]
          text-[#3B2A26]
          max-w-md
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
        "
      >
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}
