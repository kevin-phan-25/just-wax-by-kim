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
 * - Removed eyebrow heading
 * - Removed separator lines
 * - Reduced visual weight
 * - Converted from banner to small quote moment
 * - Maintained luxury editorial style
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        bg-brand-background
        py-12
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

        <div
          className="
            max-w-2xl
          "
        >

          <p
            className="
              font-serif
              italic
              leading-relaxed
              text-brand-espresso/80
            "
          >
            “A thoughtful beauty experience designed to help you feel confident,
            cared for, and beautifully yourself.”
          </p>

        </div>

      </div>

    </section>
  );
}
