/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Text block for the About section.
 * Now expands to fill its grid column instead of staying narrow.
 *
 * Changes:
 * • July 29, 2026 – Removed restrictive max-width so content fills the column
 * • July 29, 2026 – Slightly stronger title scale and body leading
 * -----------------------------------------------------------------------------
 */
import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div className="w-full max-w-none">
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
          text-3xl sm:text-4xl lg:text-[2.65rem]
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent line */}
      <div className="my-8 h-px w-16 bg-[#D4A9B6]" />

      {/* Body */}
      <p
        className="
          text-[0.98rem] md:text-[1.05rem]
          leading-[1.9]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}
