/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 *
 * - Removed category hero image
 * - Centered service presentation
 * - Removed fixed width restrictions
 * - Unified luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import ServiceGrid from "./ServiceGrid";
import type { Service } from "./services.types";

interface ServicePricingSectionProps {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export default function ServicePricingSection({
  id,
  title,
  description,
  services,
}: ServicePricingSectionProps) {
  return (
    <section
      id={id}
      className="
        w-full
        px-6
        pb-24
      "
    >

      {/* HEADER */}
      <div
        className="
          w-full
          text-center
          mb-16
        "
      >
        <h1
          className="
            font-serif
            text-4xl
            md:text-5xl
            text-[#3B2A26]
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-6
            mx-auto
            text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          {description}
        </p>
      </div>


      {/* SERVICES */}
      <div
        className="
          w-full
          text-center
        "
      >
        <ServiceGrid services={services} />
      </div>

    </section>
  );
}
