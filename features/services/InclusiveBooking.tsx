/**
 *
 * ---
 * File:
 * features/services/InclusiveBooking.tsx
 *
 * Description:
 * Inclusive booking clarification footer.
 *
 * Updates:
 * • Combined into single paragraph
 * • Centered editorial layout
 * • Removed heading title
 * • Removed divider accent
 * • Luxury editorial style
 * • Reusable across pricing pages
 * • Preserved approved booking language
 * • Improved paragraph spacing and readability
 * • Fixed mobile edge spacing
 *
 * ---
 *
 */

export default function InclusiveBooking() {
  return (
    <div
      className="
        w-full
        flex
        justify-center
        px-5
        sm:px-8
      "
    >
      <p
        className="
          max-w-3xl
          text-center

          text-sm
          sm:text-base

          leading-relaxed

          text-[#8C7468]
        "
      >
        At Just Wax by Kim, everyone is welcome. Services are booked based on
        the anatomy being waxed to ensure the appropriate appointment time and
        pricing. If you have any questions or aren’t sure which service to book,
        please reach out—I’d love to help.
      </p>
    </div>
  );
}
