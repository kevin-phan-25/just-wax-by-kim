/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed background styling
 *   - Centered mission quote
 *   - Reduced size
 *   - Kept quote as single line
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-6
        py-8
        md:py-10
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          flex
          justify-center
          text-center
        "
      >
        <p
          className="
            font-serif
            text-xs
            md:text-sm
            leading-relaxed
            text-brand-espresso/85
            italic
            whitespace-nowrap
          "
        >
          “Every experience is crafted to leave you feeling vibrant, empowered, and beautifully renewed.”
        </p>
      </div>
    </section>
  );
}
