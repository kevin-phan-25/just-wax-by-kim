/**
 * ---
 * File:
 * features/about/Mission.tsx
 *
 * Description:
 * Minimal editorial mission statement following About section.
 *
 * Updates:
 * • True one-line desktop statement
 * • Reduced font scale
 * • Removed decorative elements
 * • Responsive mobile behavior
 *
 * ---
 */

export default function Mission() {
  return (
    <section
      className="
        w-full

        bg-[#FBF7F4]

        py-10

        sm:py-12

        md:py-16
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
            text-center

            font-serif

            text-base

            sm:text-lg

            md:text-xl

            lg:text-2xl

            leading-normal

            tracking-normal

            text-[#3B2A26]

            lg:whitespace-nowrap
          "
        >
          A thoughtful beauty experience designed to help you feel confident, cared for, and beautifully yourself.
        </p>
      </div>
    </section>
  );
}
