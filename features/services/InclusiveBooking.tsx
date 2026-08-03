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
 * • Luxury editorial style
 * • No card / bubble styling
 * • Reusable across pricing pages
 * • Inclusive booking language
 *
 * ---
 *
 */

export default function InclusiveBooking() {
  return (
    <section
      className="
        w-full

        mt-14

        sm:mt-16

        md:mt-20

        px-4

        text-center
      "
    >

      <div
        className="
          mx-auto

          max-w-3xl

          border-t

          border-[#E8DDD8]

          pt-10

          sm:pt-12
        "
      >

        <h3
          className="
            font-serif

            text-xl

            sm:text-2xl

            text-[#3B2A26]
          "
        >
          Inclusive Booking
        </h3>


        <p
          className="
            mt-4

            text-sm

            sm:text-base

            leading-relaxed

            text-[#8C7468]
          "
        >
          At Just Wax by Kim, everyone is welcome.
          Services are booked based on the anatomy
          being waxed to ensure the appropriate
          appointment time and pricing.
        </p>


        <p
          className="
            mt-3

            text-sm

            sm:text-base

            leading-relaxed

            text-[#8C7468]
          "
        >
          If you are unsure which service to select,
          please reach out. I’m happy to help you
          choose the right appointment.
        </p>


      </div>

    </section>
  );
}
