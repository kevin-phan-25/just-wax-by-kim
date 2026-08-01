/**
 * ---
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Updates:
 * • Restored Service prop typing
 * • Responsive luxury sizing
 * • Editorial card proportions
 * • Improved spacing
 * ---
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

        max-w-[300px]
        xl:max-w-[320px]

        rounded-[28px]

        border
        border-[#E8DDD8]

        bg-white

        p-6
        md:p-7
        xl:p-8

        text-center

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#D4A9B6]
        hover:shadow-[0_24px_60px_rgba(59,42,38,0.10)]
      "
    >

      {/* SERVICE TITLE */}

      <h3
        className="
          font-serif

          text-[1.55rem]
          md:text-[1.7rem]

          leading-tight

          text-[#3B2A26]
        "
      >
        {service.title}
      </h3>



      {/* DESCRIPTION */}

      <p
        className="
          mt-4

          text-sm
          md:text-[15px]

          leading-7

          text-[#8C7468]
        "
      >
        {service.description}
      </p>



      {/* PRICE */}

      <div
        className="
          mt-8

          border-t
          border-[#E8DDD8]

          pt-6
        "
      >

        <span
          className="
            text-lg
            md:text-xl

            font-medium

            tracking-wide

            text-[#8C5A6B]
          "
        >
          {service.price}
        </span>

      </div>


    </article>
  );
}
