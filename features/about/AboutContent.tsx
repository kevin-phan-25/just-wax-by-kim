/**
 * -----------------------------------------------------------------------------
 * File: AboutContent.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Refined storytelling around the new brand quote
 *   - Cleaner typography and spacing
 *
 * -----------------------------------------------------------------------------
 */
import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div>
      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-brand-gold">
        {aboutContent.eyebrow}
      </p>

      <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-espresso">
        {aboutContent.title}
      </h2>

      <p className="mt-6 text-base leading-relaxed text-brand-taupe max-w-lg">
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}
