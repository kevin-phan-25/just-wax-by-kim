/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury service grid layout.
 *
 * Changes:
 *
 * - Reduced card spread
 * - Centered cards
 * - Improved mobile stacking
 * - Removed oversized columns
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
        grid

        w-full

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4

        justify-items-center

        gap-10
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
