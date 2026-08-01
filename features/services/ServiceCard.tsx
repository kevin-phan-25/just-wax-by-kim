/**
 *
 * ---
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Updates:
 * • Removed width restrictions
 * • Full editorial width support
 * • Improved luxury spacing
 * • Centered content hierarchy
 * • Softer card presentation
 * • Responsive phone/tablet/desktop
 *
 * ---
 *
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

        rounded-[32px]

        bg-white

        p-7
        sm:p-8
        md:p-10

        text-center

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_24px_70px_rgba(59,42,38,0.10)]
      "
    >

      {/* SERVICE TITLE */}

      <h3
        className="
          font-serif

          text-2xl
          sm:text-3xl

          leading-tight

          text-[#3B2A26]
        "
      >
        {service.title}
      </h3>



      {/* SERVICE CATEGORY */}

      <p
        className="
          mt-3

          uppercase

          tracking-[0.25em]

          text-[10px]
          sm:text-xs

          text-[#8C5A6B]
        "
      >
        {service.category}
      </p>



      {/* DESCRIPTION */}

      <p
        className="
          mt-6

          text-sm
          sm:text-base

          leading-8

          text-[#8C7468]
        "
      >
        {service.description}
      </p>



      {/* SERVICE DETAILS */}

      <div
        className="
          mt-8

          flex

          flex-col

          items-center

          gap-2

          text-sm

          text-[#8C7468]
        "
      >

        <span>
          {service.duration}
        </span>

      </div>



      {/* PRICE */}

      <div
        className="
          mt-8

          pt-6
        "
      >

        <span
          className="
            font-serif

            text-2xl
            sm:text-3xl

            text-[#8C5A6B]
          "
        >
          {service.price}
        </span>

      </div>


    </article>
  );
}
