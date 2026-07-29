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
 * • Refined transition from About section
 * • Increased quote presence
 * • Added subtle editorial eyebrow
 * • Maintained continuous cream background
 * -----------------------------------------------------------------------------
 */

export default function Mission() {
  return (
    <section
      className="
        relative
        bg-[#FCF8F3]
        px-6
        pt-10
        pb-24
        md:pt-14
        md:pb-32
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
          bg-[#E8DDD8]/50
        "
      />


      <div
        className="
          mx-auto
          max-w-4xl
          text-center
        "
      >

        {/* Eyebrow */}
        <p
          className="
            mb-6
            text-[0.6rem]
            uppercase
            tracking-[0.4em]
            text-[#B28A62]
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
            text-xl
            sm:text-2xl
            md:text-[2rem]
            leading-[1.7]
            italic
            tracking-[-0.02em]
            text-[#3B2A26]/85
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
            bg-[#D4A9B6]
          "
        />

      </div>

    </section>
  );
}
