/**
 * -----------------------------------------------------------------------------
 * File: features/services/Packages.tsx
 *
 * Description:
 * Subtle waxing package information section.
 *
 * Updates:
 * • Increased package offer text slightly
 * • Kept mobile sizing compact
 * • Reduced description text by approximately 25%
 * • Prevented package line from becoming too large on mobile
 * • Increased visual hierarchy between packages and description
 * • Preserved responsive behavior
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
        px-3
      "
    >
      {/* PACKAGE OFFERS */}
      <div
        className="
          flex
          w-full
          flex-wrap
          items-center
          justify-center
          gap-x-2
          gap-y-1
          text-xs
          sm:text-sm
          md:text-sm
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

        <span className="text-[#8C5A6B]">
          <strong>3 Visits</strong>
          {" "}• Save 5%
        </span>

        <span className="text-[#8C5A6B]">
          <strong>5 Visits</strong>
          {" "}• Save 10%
        </span>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mx-auto
          mt-2
          max-w-[320px]
          text-[6px]
          leading-relaxed
          text-[#8C7468]
          sm:max-w-md
          sm:text-[7px]
          md:text-[8px]
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}
