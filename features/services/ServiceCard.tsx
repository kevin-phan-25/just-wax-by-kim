/**
 * ---------------------------------------------------
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury editorial service row.
 *
 * Updates:
 * • Removed bubble card design
 * • Removed descriptions
 * • Spa menu inspired layout
 * • Elegant pricing hierarchy
 * • Mobile friendly
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

        flex-col

        gap-4

        py-8

        sm:py-10

        transition-all

        duration-300

        sm:flex-row

        sm:items-center

        sm:justify-between
      "
    >

      {/* LEFT SIDE */}
      <div>

        <h3
          className="
            font-serif

            text-2xl

            sm:text-3xl

            leading-tight

            tracking-[-0.02em]

            text-[#3B2A26]
          "
        >
          {service.title}
        </h3>


        <p
          className="
            mt-3

            text-sm

            tracking-[0.08em]

            text-[#8C7468]
          "
        >
          {service.duration}
        </p>

      </div>



      {/* PRICE */}
      <div
        className="
          sm:text-right
        "
      >

        <span
          className="
            font-serif

            text-3xl

            sm:text-4xl

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
