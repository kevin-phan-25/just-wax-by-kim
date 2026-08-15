/**
 * File: features/services/Packages.tsx
 * Description:
 * Subtle waxing package information section.
 * Updates:
 * • Package offers stay readable and compact
 * • Description size increased by 30%
 * • Forced into clean 2 lines on mobile + iPad
 * • No longer overflows the screen
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

      {/* DESCRIPTION – 30% larger + clean 2 lines + fits on screen */}
      <p
        className="
          mx-auto
          mt-1.5
          w-[155%]
          -ml-[27.5%]
          origin-top
          scale-[0.65]
          text-[10px]
          leading-[1.5]
          text-[#8C7468]
          sm:w-[150%]
          sm:-ml-[25%]
          md:mt-2
          md:w-full
          md:ml-0
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