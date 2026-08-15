/**
 * File: features/services/Packages.tsx
 * Description:
 * Subtle waxing package information section.
 * Updates:
 * • Package offers stay readable and compact
 * • Description forced much smaller using scale (bypasses browser min font-size)
 * • Description stays centered and constrained on mobile
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

      {/* DESCRIPTION — forced smaller with scale */}
      <p
        className="
          mx-auto
          mt-1.5
          w-full
          max-w-[280px]
          origin-top
          scale-[0.5]
          text-[10px]
          leading-relaxed
          text-[#8C7468]
          sm:max-w-sm
        "
      >
        Designed to help you maintain a consistent waxing routine.
        Packages are non-transferable, valid only for the service
        purchased, and expire 12 months from the date of purchase.
      </p>
    </div>
  );
}
