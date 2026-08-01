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
 * • Centered typography
 * • Improved spacing
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
        md:mt-16

        text-center
      "
    >
      <p
        className="
          text-sm
          md:text-base

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
