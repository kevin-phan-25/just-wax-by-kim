/**
 * -----------------------------------------------------------------------------
 * File:
 * Mission.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Matched hero background styling
 *   - Reduced content size by 25%
 *   - Centered mission statement
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        w-full
        px-6
        py-10
        md:py-12
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
          justify-center
          text-center
        "
      >
        <p
          className="
            max-w-lg
            font-serif
            text-xs
            md:text-sm
            leading-relaxed
            text-brand-espresso/85
            italic
          "
        >
          “Every experience is crafted to leave you feeling vibrant,
          empowered, and beautifully renewed.”
        </p>
      </div>
    </section>
  );
}
