/**
 * ---
 * File:
 * features/about/Mission.tsx
 *
 * Description:
 * Minimal editorial mission statement.
 *
 * Updates:
 * • Centered luxury quote
 * • Removed decorative separators
 * • Removed divider accents
 * • Responsive phone/tablet/desktop spacing
 *
 * ---
 */

export default function Mission() {
  return (
    <section
      className="
        relative

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

          items-center

          justify-center

          px-5

          sm:px-8

          md:px-12

          lg:px-20
        "
      >

        <p
          className="
            max-w-5xl

            text-center

            font-serif

            text-2xl

            sm:text-3xl

            md:text-4xl

            lg:text-5xl

            leading-[1.35]

            tracking-[-0.02em]

            text-[#3B2A26]
          "
        >
          “A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.”
        </p>

      </div>

    </section>
  );
}
