/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury pricing section for Ladies and Gentlemen services.
 *
 * -----------------------------------------------------------------------------
 */

import ServiceCard from "./ServiceCard";
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
        scroll-mt-40
        px-6
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* HEADER */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <h2
            className="
              font-serif
              text-4xl
              md:text-5xl
              text-[#3B2A26]
            "
          >
            {title}
          </h2>


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



        {/* SERVICES GRID */}

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>


      </div>

    </section>
  );
}
