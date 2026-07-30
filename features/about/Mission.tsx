/**
 * -----------------------------------------------------------------------------
 * File: features/about/Mission.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial mission statement following the About section.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Unified with Just Wax by Kim luxury theme
 * - Removed hardcoded colors
 * - Removed fixed scaling typography
 * - Fully centered editorial composition
 * - Uses global spacing and typography system
 *
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        relative
        section-padding
        bg-luxury
      "
    >

      {/* Soft transition rule */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(70%,700px)]
          h-px
          bg-brand-border/60
        "
      />


      <div
        className="
          container-luxury
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* Content */}
        <div
          className="
            max-w-4xl
            w-full
          "
        >

          {/* Eyebrow */}
          <p
            className="
              eyebrow
              mb-6
              text-brand-gold
            "
          >
            Our Philosophy
          </p>


          {/* Quote */}
          <p
            className="
              mx-auto
              max-w-3xl
              font-serif
              italic
              leading-relaxed
              tracking-wide
              text-brand-espresso/85
            "
          >
            “A thoughtful beauty experience designed to help you feel confident,
            cared for, and beautifully yourself.”
          </p>


          {/* Accent */}
          <div
            aria-hidden
            className="
              mx-auto
              mt-8
              h-px
              w-12
              bg-brand-dusty-pink
            "
          />

        </div>

      </div>

    </section>
  );
}
