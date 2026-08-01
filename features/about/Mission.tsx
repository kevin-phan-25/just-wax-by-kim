/**
 * ---
 * File:
 * features/about/Mission.tsx
 *
 * Description:
 * Minimal editorial mission statement following About section.
 *
 * Updates:
 * • Single-line luxury statement
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

        py-12

        sm:py-14

        md:py-16
      "
    >

      <div
        className="
          w-full

          px-5

          sm:px-8

          md:px-12

          flex

          justify-center
        "
      >

        <p
          className="
            w-full

            text-center

            font-serif

            text-lg

            sm:text-xl

            md:text-2xl

            leading-relaxed

            tracking-[-0.01em]

            text-[#3B2A26]
          "
        >
          A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.
        </p>

      </div>

    </section>
  );
}
