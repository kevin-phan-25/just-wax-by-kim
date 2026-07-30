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
 * - Matched Hero.tsx spacing system
 * - Added navbar transition spacer
 * - Added ambient luxury background wash
 * - Centered service presentation
 * - Removed image dependency
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
        overflow-hidden
        pb-24
      "
    >

      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />


      {/* Navbar transition spacer */}
      <div
        className="
          h-[216px]
        "
      />


      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          text-center
        "
      >

        {/* HEADER */}
        <div
          className="
            w-full
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
        <ServiceGrid services={services} />

      </div>


      {/* Bottom divider */}
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
