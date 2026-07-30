/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Changes:
 *
 * - Reduced card visual size
 * - Added centered max width
 * - Improved mobile proportions
 * - Added balanced luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import type { Service } from "./services.types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article
      className="
        service-card

        w-full
        max-w-[280px]

        mx-auto

        p-8

        text-center
      "
    >

      {/* SERVICE NAME */}
      <h3
        className="
          service-name
          font-serif
          text-2xl
          text-[#3B2A26]
        "
      >
        {service.title}
      </h3>


      {/* DESCRIPTION */}
      <p
        className="
          service-description
          mt-4
          text-sm
          leading-relaxed
          text-[#8C7468]
        "
      >
        {service.description}
      </p>


      {/* PRICE */}
      <div
        className="
          service-price
          mt-8
          pt-6
          border-t
          border-[#E8DDD8]
          w-full
        "
      >
        <span
          className="
            text-[#D4A9B6]
            font-medium
            tracking-wide
            text-lg
          "
        >
          {service.price}
        </span>
      </div>


    </article>
  );
}
