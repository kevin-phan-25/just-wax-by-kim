/**
 * File: features/services/Packages.tsx
 * Description:
 * Subtle waxing package information section.
 * Updates:
 * • Package offers stay readable and compact
 * • Description keeps the good small size (scale) on mobile + iPad
 * • Forced into clean 2 lines with <br />
 * • Desktop stays open and comfortable
 */
export default function Packages() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center px-3">
      {/* PACKAGE OFFERS */}
      <div className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        <span className="uppercase tracking-[0.12em] font-semibold text-[#3B2A26]">
          Packages
        </span>
        <span className="text-[#8C5A6B]">
          <strong>3 Visits</strong> • Save 5%
        </span>
        <span className="text-[#8C5A6B]">
          <strong>5 Visits</strong> • Save 10%
        </span>
      </div>

      {/* DESCRIPTION – good size + forced clean 2 lines */}
      <p
        className="
          mx-auto
          mt-1.5
          w-full
          max-w-[280px]
          origin-top
          scale-[0.5]
          text-[10px]
          leading-[1.5]
          text-[#8C7468]
          sm:max-w-sm
          md:mt-2
          md:max-w-lg
          md:scale-100
          md:text-sm
          md:leading-7
        "
      >
        Designed to help you maintain a consistent waxing routine.
        <br />
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}