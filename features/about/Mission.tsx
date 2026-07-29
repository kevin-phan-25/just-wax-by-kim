/**
 * -----------------------------------------------------------------------------
 * File: features/about/Mission.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Soft italic pull-quote that follows the About section.
 * Shares the cream background for a continuous editorial feel.
 *
 * Changes:
 * • July 29, 2026 – Matched cream background (#FCF8F3)
 * • July 29, 2026 – Light top padding so it feels connected to About
 * • July 29, 2026 – Soft optional top rule for subtle separation
 * • July 29, 2026 – Consistent bottom breathing room (pb-24 / md:pb-28)
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section
      className="
        relative
        bg-[#FCF8F3]
        px-6
        pt-6
        pb-24
        md:pt-8
        md:pb-28
      "
    >
      {/* Soft top rule */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(70%,700px)]
          h-px
          bg-[#E8DDD8]/60
        "
      />

      <div className="mx-auto max-w-3xl text-center">
        <p
          className="
            font-serif
            text-base
            md:text-lg
            leading-[1.9]
            italic
            text-[#3B2A26]/80
          "
        >
          “A thoughtful beauty experience designed to help you feel confident,
          cared for, and beautifully yourself.”
        </p>
      </div>
    </section>
  );
}
