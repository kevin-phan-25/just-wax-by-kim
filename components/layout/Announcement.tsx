/**
 *
 * ---
 * File: Announcement.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Top announcement banner for promotions, booking notices,
 * and important customer messaging.
 *
 * Changes:
 *
 * - July 27, 2026
 * • Added v1.1.0 luxury layout foundation.
 * • Added responsive spacing.
 * • Matched luxury brand typography.
 * • Improved mobile readability.
 *
 * ---
 *
 */

export default function Announcement() {
  return (
    <div
      className="
        flex
        w-full
        items-center
        justify-center

        bg-[#3B2A26]

        px-5
        py-3
        sm:py-4

        text-center
      "
    >
      <p
        className="
          uppercase

          tracking-[0.25em]

          text-[10px]
          sm:text-xs

          font-medium

          text-[#F6E7E1]
        "
      >
        Now Booking Luxury Wax Appointments
      </p>
    </div>
  );
}
