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
 * • Removed heading title
 * • Removed divider accent
 * • Luxury editorial style
 * • Reusable across pricing pages
 * • Preserved approved booking language
 * • Improved paragraph spacing and readability
 *
 * ---
 */

export default function InclusiveBooking() {
  return (
    <div
      className="
        mx-auto

        max-w-3xl

        pt-6

        sm:pt-8
      "
    >
      <div
        className="
          space-y-5
        "
      >

        <p
          className="
            text-sm

            sm:text-base

            leading-relaxed

            text-[#8C7468]
          "
        >
          At Just Wax by Kim, everyone is welcome. Services are booked based
          on the anatomy being waxed to ensure the appropriate appointment time
          and pricing.
        </p>


        <p
          className="
            text-sm

            sm:text-base

            leading-relaxed

            text-[#8C7468]
          "
        >
          If you have any questions or aren’t sure which service to book,
          please reach out—I’d love to help.
        </p>

      </div>
    </div>
  );
}
