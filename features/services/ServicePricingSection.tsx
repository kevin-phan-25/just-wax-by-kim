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
 * - Removed image dependency
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
        relative
        w-full
        px-6
        pt-[216px]
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


      {/* Bottom Divider */}
      <div
        aria-hidden
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[min(92%,1200px)]
          h-px
          bg-[#E8DDD8]
        "
      />

    </section>
  );
}
