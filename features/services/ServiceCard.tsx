/**
 * ---
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
 *
 * Updates:
 * • Editorial luxury presentation
 * • Responsive phone/tablet/desktop
 * • Softer card elevation
 * • Improved pricing hierarchy
 * • Balanced typography spacing
 * • Works with ServiceGrid sizing
 *
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

        rounded-[32px]

        border

        border-[#E8DDD8]

        bg-white/90

        p-7

        sm:p-8

        md:p-10

        text-center

        transition-all

        duration-500

        hover:-translate-y-1

        hover:shadow-[0_20px_60px_rgba(59,42,38,0.08)]
      "
    >

      {/* SERVICE TITLE */}
      <h3
        className="
          font-serif

          text-2xl

          sm:text-3xl

          leading-[1.15]

          tracking-[-0.02em]

          text-[#3B2A26]
        "
      >
        {service.title}
      </h3>



      {/* CATEGORY */}
      <p
        className="
          mt-4

          uppercase

          tracking-[0.28em]

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



      {/* DETAILS */}
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

          border-t

          border-[#E8DDD8]

          pt-6
        "
      >

        <span
          className="
            font-serif

            text-2xl

            sm:text-3xl

            tracking-[-0.02em]

            text-[#8C5A6B]
          "
        >
          {service.price}
        </span>

      </div>


    </article>
  );
}
