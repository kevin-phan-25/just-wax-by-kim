/**
 * ---
 * File:
 * features/services/ServicePricing.tsx
 *
 * Description:
 * Luxury service pricing disclaimer.
 *
 * Updates:
 * • Refined editorial presentation
 * • Responsive phone / iPad / desktop
 * • Centered typography
 * • Improved luxury spacing
 * • Matches brand styling
 *
 * ---
 */

export default function ServicePricing() {
  return (
    <div
      className="
        w-full

        mt-14

        sm:mt-16

        md:mt-20

        px-5

        sm:px-8

        md:px-12

        text-center
      "
    >

      <p
        className="
          mx-auto

          max-w-3xl

          text-sm

          sm:text-base

          leading-relaxed

          text-[#8C7468]
        "
      >
        Pricing may vary based on service customization.
        Consultation is always available before your appointment.
      </p>

    </div>
  );
}
