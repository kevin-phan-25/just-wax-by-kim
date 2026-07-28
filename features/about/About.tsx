/**
 * -----------------------------------------------------------------------------
 * File: About.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Cleaner luxury layout
 *   - Better spacing and hierarchy
 *
 * -----------------------------------------------------------------------------
 */
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}
