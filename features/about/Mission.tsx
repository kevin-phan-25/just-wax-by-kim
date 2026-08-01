/**
 * ---
 * File:
 * features/about/Mission.tsx
 *
 * Description:
 * Minimal editorial mission quote following About section.
 *
 * Updates:
 * • Centered statement
 * • Reduced typography
 * • Removed divider accents
 * • Responsive sizing
 *
 * ---
 */

export default function Mission() {
  return (
    <section
      className="
        w-full

        bg-[#FBF7F4]

        py-16

        sm:py-20

        md:py-24

        lg:py-28
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
        "
      >

        <p
          className="
            max-w-4xl

            text-center

            font-serif

            text-xl

            sm:text-2xl

            md:text-3xl

            lg:text-4xl

            leading-[1.4]

            tracking-[-0.015em]

            text-[#3B2A26]
          "
        >
          “A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.”
        </p>

      </div>

    </section>
  );
}
