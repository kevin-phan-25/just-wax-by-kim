/**
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Added paragraph spacing between package offers and details
 * • Maintained single-line package layout
 * • Reduced description visual weight
 *
 * ---
 */

export default function Packages() {
  return (
    <div
      className="
        w-full
        text-center
      "
    >

      {/* PACKAGE OFFERS */}
      <div
        className="
          flex
          items-center
          justify-center

          gap-3

          whitespace-nowrap

          text-sm

          sm:text-base
        "
      >

        <span
          className="
            uppercase

            tracking-[0.12em]

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



      {/* PACKAGE DETAILS */}
      <p
        className="
          mx-auto

          mt-4

          max-w-lg

          text-[10px]

          sm:text-xs

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
