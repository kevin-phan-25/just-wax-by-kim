/**
 * ---
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury responsive service grid.
 *
 * Updates:
 * • Full width editorial layout
 * • Centered service cards
 * • Responsive phone / iPad / desktop
 * • Balanced card sizing
 * • Improved luxury spacing
 * • Prevents desktop compression
 *
 * ---
 */

import ServiceCard from "./ServiceCard";
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
        w-full

        grid

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-3

        xl:grid-cols-4

        justify-items-center

        gap-x-8

        gap-y-10

        md:gap-x-10

        md:gap-y-12

        xl:gap-x-12

        xl:gap-y-14
      "
    >

      {services.map((service) => (
        <div
          key={service.id}
          className="
            w-full

            max-w-[360px]

            lg:max-w-[380px]
          "
        >
          <ServiceCard
            service={service}
          />
        </div>
      ))}

    </div>
  );
}
