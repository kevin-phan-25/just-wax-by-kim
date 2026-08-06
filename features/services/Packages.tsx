/**
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Packages title aligned with package offers
 * • Forced single-line mobile layout
 * • Reduced mobile typography
 * • Compact luxury spacing
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

          whitespace-nowrap

          text-[11px]

          sm:text-sm
        "
      >

        <span
          className="
            uppercase

            tracking-[0.14em]

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

          text-[11px]

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
