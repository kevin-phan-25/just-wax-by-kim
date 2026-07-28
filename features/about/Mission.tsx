/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed background
 *   - Added proper spacing
 *   - Centered quote
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-6
        pt-10
        pb-16
        bg-gradient-to-b
        from-brand-rose/20
        to-brand-cream
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
