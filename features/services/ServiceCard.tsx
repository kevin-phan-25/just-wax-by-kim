/**
 * ---------------------------------------------------
 * File:
 * features/services/ServiceCard.tsx
 *
 * Luxury Editorial Service Card
 *
 * • No description
 * • Elegant pricing
 * • Editorial spa styling
 * • Equal-height cards
 * • Responsive
 * ---------------------------------------------------
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
        flex
        h-full
        flex-col

        rounded-[30px]

        border
        border-[#E8DDD8]

        bg-white

        px-8
        py-9

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(59,42,38,0.06)]
      "
    >
      {/* CATEGORY */}
      <p
        className="
          uppercase
          tracking-[0.28em]
          text-[10px]
          text-[#8C5A6B]
        "
      >
        {service.category}
      </p>

      {/* TITLE */}
      <h3
        className="
          mt-3

          font-serif

          text-2xl
          sm:text-[30px]

          leading-tight

          text-[#3B2A26]
        "
      >
        {service.title}
      </h3>

      {/* DURATION */}
      <p
        className="
          mt-5

          text-sm

          tracking-[0.05em]

          text-[#8C7468]
        "
      >
        {service.duration}
      </p>

      {/* Divider */}
      <div
        className="
          mt-auto
          pt-8
        "
      >
        <div className="border-t border-[#E8DDD8]" />

        <div
          className="
            mt-6

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              uppercase

              tracking-[0.25em]

              text-[10px]

              text-[#8C7468]
            "
          >
            Starting at
          </span>

          <span
            className="
              font-serif

              text-[34px]
              sm:text-[38px]

              leading-none

              text-[#3B2A26]
            "
          >
            {service.price}
          </span>
        </div>
      </div>
    </article>
  );
}
