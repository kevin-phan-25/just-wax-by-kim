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
          pt-6
          sm:pt-8
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
          <br />
          If you have any questions or aren’t sure which service to book, 
          <br />
          please reach out—I’d love to help.
        </p>

      </div>

    </section>
  );
}
