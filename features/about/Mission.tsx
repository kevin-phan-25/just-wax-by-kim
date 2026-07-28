/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed background
 *   - Prevented two-tone transition
 *   - Added spacing from Hero
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-6
        pt-8
        pb-12
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
            text-sm
            md:text-base
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
