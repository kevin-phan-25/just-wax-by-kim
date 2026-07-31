/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury responsive service grid.
 *
 * Responsive Update:
 * • Mobile-first layout
 * • Improved tablet spacing
 * • Editorial desktop layout
 * • Centered cards
 * • Balanced gaps
 *
 * -----------------------------------------------------------------------------
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
        mx-auto
        w-full
        max-w-[1500px]

        grid

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4

        justify-items-center
        items-start

        gap-x-8
        gap-y-10

        lg:gap-x-10
        lg:gap-y-12

        xl:gap-x-12
        xl:gap-y-14
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
