/**
 * ---
 * File:
 * features/about/Mission.tsx
 *
 * Description:
 * Minimal editorial mission statement following About section.
 *
 * Updates:
 * • Responsive editorial spacing
 * • Desktop one-line statement
 * • iPad wrapping correction
 * • Mobile typography refinement
 * • Matches global luxury background
 *
 * ---
 */

export default function Mission() {
  return (
    <section
      className="
        w-full

        bg-[#FCF8F3]

        py-10

        sm:py-12

        md:py-16

        lg:py-20
      "
    >

      <div
        className="
          w-full

          flex

          justify-center

          px-5

          sm:px-8

          md:px-12

          lg:px-16
        "
      >

        <p
          className="
            max-w-[1200px]

            text-center

            font-serif

            text-lg

            sm:text-xl

            md:text-2xl

            lg:text-3xl

            xl:whitespace-nowrap

            leading-relaxed

            tracking-[-0.02em]

            text-[#3B2A26]
          "
        >
          A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.
        </p>

      </div>

    </section>
  );
}
