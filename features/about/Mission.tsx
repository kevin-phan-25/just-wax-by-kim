/**
 * -----------------------------------------------------------------------------
 * File: features/about/Mission.tsx (or wherever it lives)
 *
 * Date: July 29, 2026
 *
 * Description:
 * Soft pull-quote that follows the About section.
 * Matches the cream background and elegant spacing of the About block.
 * -----------------------------------------------------------------------------
 */
export default function Mission() {
  return (
    <section
      className="
        relative
        bg-[#FCF8F3]
        px-6
        pt-4
        pb-24
        md:pt-6
        md:pb-28
      "
    >
      {/* Optional thin rule if you want a subtle separation from About */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[min(70%,700px)]
          h-px
          bg-[#E8DDD8]/70
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
