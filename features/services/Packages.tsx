/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Subtle waxing package information section.
 *
 * Updates:
 * • Reduced overall package section scale by approximately 30%
 * • Reduced typography and spacing
 * • Kept package information visible and readable
 * • Made packages visually secondary to the main services
 * • Preserved single-line desktop presentation
 * • Maintained responsive behavior
 * -----------------------------------------------------------------------------
 */

export default function Packages() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      {/* PACKAGE OFFERS */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          text-[10px]
          sm:text-xs
          md:text-sm
        "
      >
        <span
          className="
            uppercase
            tracking-[0.1em]
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
          <strong>3 Visits</strong>
          {" "}• Save 5%
        </span>

        <span
          className="
            text-[#8C5A6B]
          "
        >
          <strong>5 Visits</strong>
          {" "}• Save 10%
        </span>
      </div>

      {/* PACKAGE DETAILS */}
      <p
        className="
          mx-auto
          mt-3
          max-w-md
          text-[9px]
          leading-relaxed
          text-[#8C7468]
          sm:text-[10px]
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}

