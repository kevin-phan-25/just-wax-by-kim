/**
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Increased package offer readability
 * • Preserved single-line mobile layout
 * • Matched pricing description typography
 * • Maintained compact luxury spacing
 *
 * ---
 */

export default function Packages() {
  return (
    <div
      className="
        w-full

        text-center

        overflow-hidden
      "
    >

      <div
        className="
          flex

          items-center

          justify-center

          gap-3

          sm:gap-5

          whitespace-nowrap

          text-xs

          sm:text-sm

          leading-relaxed
        "
      >

        <span
          className="
            uppercase

            tracking-[0.16em]

            font-semibold

            text-[#3B2A26]
          "
        >
          Packages
        </span>


        <span
          className="
            text-[#8C5A6B]
          "
        >
          <strong>
            3 Visits
          </strong>
          {" "}• Save 5%
        </span>


        <span
          className="
            text-[#8C5A6B]
          "
        >
          <strong>
            5 Visits
          </strong>
          {" "}• Save 10%
        </span>


      </div>



      <p
        className="
          mx-auto

          mt-3

          max-w-2xl

          text-xs

          sm:text-sm

          leading-relaxed

          text-[#8C7468]
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>


    </div>
  );
}
