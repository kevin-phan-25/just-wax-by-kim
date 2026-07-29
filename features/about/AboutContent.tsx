/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Text content for the left column.
 * -----------------------------------------------------------------------------
 */
import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div className="w-full">
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

      <h2
        className="
          font-serif
          text-2xl sm:text-3xl lg:text-[2.35rem]
          leading-[1.2]
          tracking-[-0.02em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>

      <div className="my-6 h-px w-12 bg-[#D4A9B6]" />

      <p
        className="
          text-[0.9rem] sm:text-[0.95rem]
          leading-[1.85]
          text-[#7E6B63]
          max-w-2xl
        "
      >
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}
