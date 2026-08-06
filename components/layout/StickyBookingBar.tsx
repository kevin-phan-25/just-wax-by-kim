/**
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Package offers prioritized visually
 * • Reduced description prominence
 * • Maintained single-line package layout
 * • Luxury editorial spacing
 *
 * ---
 */

export default function Packages() {
  return (
    <div
      className="
        text-center
      "
    >

      {/* PACKAGE OFFERS */}
      <div
        className="
          flex
          flex-nowrap
          items-center
          justify-center

          gap-x-5

          text-base

          sm:text-lg

          text-[#8C5A6B]
        "
      >
        <span
          className="
            shrink-0

            uppercase

            tracking-[0.14em]

            font-semibold

            text-[#3B2A26]
          "
        >
          Packages
        </span>


        <span className="shrink-0">
          <strong>
            3 Visits
          </strong>
          {" "}
          • Save 5%
        </span>


        <span className="shrink-0">
          <strong>
            5 Visits
          </strong>
          {" "}
          • Save 10%
        </span>

      </div>



      {/* PACKAGE DETAILS */}
      <p
        className="
          mx-auto

          mt-2

          max-w-xl

          text-[11px]

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
