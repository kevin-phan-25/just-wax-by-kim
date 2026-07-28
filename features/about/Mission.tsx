/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Added spacing between Hero and Mission
 *   - Kept transparent background
 *   - Centered luxury quote
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-6
        pt-6
        pb-10
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
