/**
 * -----------------------------------------------------------------------------
 * File: features/services/Packages.tsx
 *
 * Description:
 * Subtle waxing package information section.
 *
 * Updates:
 * • Package offers line made slightly larger
 * • Description made smaller than the package line
 * • Kept packages secondary to main services
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
      "
    >
      {/* PACKAGE OFFERS — slightly larger */}
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-2
          gap-y-1
          text-[11px]
          sm:text-xs
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

      {/* DESCRIPTION — smaller than the package line */}
      <p
        className="
          mx-auto
          mt-2.5
          max-w-md
          text-[8px]
          leading-relaxed
          text-[#8C7468]
          sm:text-[9px]
          md:text-[10px]
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}
