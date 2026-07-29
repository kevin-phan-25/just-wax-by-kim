/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Text content that wraps around the floated portrait.
 *
 * Changes:
 * • July 29, 2026 – Redesigned for clean wrap behavior
 * • July 29, 2026 – Stronger title presence and refined body leading
 * • July 29, 2026 – Credentials clear below the float
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
          mb-5
          text-[0.65rem]
          uppercase tracking-[0.38em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      {/* Title */}
      <h2
        className="
          font-serif
          text-3xl sm:text-4xl
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
          max-w-lg
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent line */}
      <div className="my-7 h-px w-14 bg-[#D4A9B6]" />

      {/* Body — wraps around the image */}
      <p
        className="
          text-[0.98rem] md:text-[1.05rem]
          leading-[1.9]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>

      {/* Credentials sit cleanly below the wrap */}
      <Credentials />
    </div>
  );
}
