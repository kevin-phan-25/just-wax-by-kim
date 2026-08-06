/**
 * ---
 * File:
 * components/layout/StickyBookingBar.tsx
 *
 * Description:
 * Fixed booking CTA bar for pricing pages.
 *
 * Updates:
 * • Removed divider accent
 * • Blended sticky bar into pricing page
 * • Added subtle luxury shadow
 * • Persistent bottom booking action
 * • Responsive mobile / iPad / desktop support
 * • Opens existing booking widget
 *
 * ---
 */

"use client";

interface StickyBookingBarProps {
  onBookingOpen: () => void;
}


export default function StickyBookingBar({
  onBookingOpen,
}: StickyBookingBarProps) {
  return (
    <div
      className="
        fixed

        bottom-0

        left-0

        right-0

        z-40

        bg-[#FCF8F3]/90

        backdrop-blur-xl

        px-5

        py-4

        shadow-[0_-12px_40px_rgba(59,42,38,0.08)]

        sm:px-8

        md:px-10

        lg:px-12
      "
    >

      <button
        type="button"
        onClick={onBookingOpen}
        className="
          mx-auto

          flex

          min-h-[64px]

          w-full

          max-w-xl

          items-center

          justify-center

          rounded-full

          border-2

          border-[#8C5A6B]

          uppercase

          tracking-[0.22em]

          text-sm

          font-semibold

          text-[#8C5A6B]

          transition-all

          duration-300

          hover:bg-[#F6E7E1]

          hover:scale-[1.02]
        "
      >
        Book Appointment
      </button>

    </div>
  );
}
