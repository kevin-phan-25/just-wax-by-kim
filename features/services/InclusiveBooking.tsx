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
 * • Luxury editorial style
 * • Reusable across pricing pages
 * • Preserved approved booking language
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

        <p
          className="
            text-sm
            sm:text-base
            leading-relaxed
            text-[#8C7468]
          "
        >
          At Just Wax by Kim, everyone is welcome.
          <br />
          Services are booked based on the anatomy
          <br />
          being waxed to ensure the appropriate
          <br />
          appointment time and pricing.
        </p>


      </div>

    </section>
  );
}
