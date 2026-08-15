/**
 * File: features/services/Packages.tsx
 * Description:
 * Subtle waxing package information section.
 * Updates:
 * • Package offers stay readable and compact
 * • Description is cleanly 2 lines on mobile + iPad
 * • Desktop description is more open and less cluttered
 * • Better max-width + line-height across breakpoints
 * • Preserved responsive behavior
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

      {/* DESCRIPTION – 2 clean lines on mobile/iPad, more open on desktop */}
      <p
        className="
          mx-auto
          mt-2
          w-full
          max-w-[255px]
          text-[11px]
          leading-[1.45]
          text-[#8C7468]
          sm:max-w-[280px]
          sm:text-xs
          sm:leading-[1.5]
          md:mt-2.5
          md:max-w-md
          md:text-sm
          md:leading-6
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}