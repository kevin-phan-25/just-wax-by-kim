/**
 *
 * ---
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury compact service pricing list.
 *
 * Updates:
 * • Removed card layout dependency
 * • Removed large bubble containers
 * • Compact editorial pricing rows
 * • Responsive phone / tablet / desktop
 * • Displays more services at once
 *
 * ---
 *
 */

import type { Service } from "./services.types";

interface ServiceGridProps {
  services: Service[];
}


export default function ServiceGrid({
  services,
}: ServiceGridProps) {


  return (

    <div
      className="
        grid

        grid-cols-1

        sm:grid-cols-2

        gap-x-10

        gap-y-4
      "
    >

      {services.map((service) => (

        <div
          key={service.id}
          className="
            flex
            items-baseline
            justify-between
            gap-4

            border-b
            border-[#F0E8E3]

            pb-3
          "
        >


          {/* SERVICE NAME */}

          <div>

            <h3
              className="
                text-sm
                sm:text-base

                font-medium

                text-[#3B2A26]
              "
            >

              {service.title}

            </h3>


            <p
              className="
                mt-1

                text-xs

                text-[#8C7468]
              "
            >

              {service.duration}

            </p>

          </div>





          {/* PRICE */}

          <span
            className="
              whitespace-nowrap

              font-serif

              text-lg

              text-[#8C5A6B]
            "
          >

            {service.price}

          </span>


        </div>

      ))}


    </div>

  );

}
