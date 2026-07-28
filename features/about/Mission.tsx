/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Matched hero background
 *   - Improved luxury spacing
 *   - Removed cramped text behavior
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-5
        py-11
        md:py-15
        bg-gradient-to-b
        from-brand-cream
        via-[#FDF8F7]
        to-brand-rose/20
      "
    >
      <div
        className="
          mx-auto
          max-w-3xl
          flex
          justify-end
          pr-0
          md:pr-12
        "
      >
        <p
          className="
            max-w-xl
            font-serif
            text-sm
            md:text-base
            leading-relaxed
            text-brand-espresso/85
            italic
            text-right
          "
        >
          “Every experience is crafted to leave you feeling vibrant,
          empowered, and beautifully renewed.”
        </p>
      </div>
    </section>
  );
}
