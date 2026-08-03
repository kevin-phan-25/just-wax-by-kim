/**
 *
 * ---
 * File:
 * features/services/ServiceCard.tsx
 *
 * Description:
 * Luxury editorial service price row.
 *
 * Updates:
 * • Removed card bubbles
 * • Compact luxury menu layout
 * • Mobile optimized
 * • Increased price visibility
 * • Designed for fast scanning
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
        w-full

        border-b
        border-[#E8DDD8]

        py-4

        sm:py-5

        transition-all
      "
    >

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >

        {/* LEFT */}
        <div
          className="
            flex-1
            text-left
          "
        >

          <h3
            className="
              font-serif

              text-base

              sm:text-lg

              leading-tight

              text-[#3B2A26]
            "
          >
            {service.title}
          </h3>


          <p
            className="
              mt-1

              text-[11px]

              sm:text-xs

              tracking-wide

              text-[#8C7468]
            "
          >
            {service.duration}
          </p>


        </div>



        {/* PRICE */}
        <div
          className="
            shrink-0

            text-right
          "
        >

          <span
            className="
              font-serif

              text-lg

              sm:text-xl

              text-[#8C5A6B]
            "
          >
            {service.price}
          </span>

        </div>


      </div>


    </article>
  );
}
