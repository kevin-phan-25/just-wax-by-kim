/**
 * -----------------------------------------------------------------------------
 * File: features/about/Mission.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Minimal editorial mission quote following the About section.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Converted quote into single-line statement
 * - Removed decorative separators
 * - Reduced vertical spacing
 * - Reduced visual weight
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        bg-brand-background
        py-6
      "
    >
      <div
        className="
          container-luxury
          flex
          justify-center
          text-center
        "
      >
        <p
          className="
            font-serif
            italic
            text-brand-espresso/80
          "
        >
          “A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.”
        </p>
      </div>
    </section>
  );
}
