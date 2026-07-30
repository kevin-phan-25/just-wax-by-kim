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
 * - Centered service cards
 * - Removed unnecessary width constraints
 * - Preserved responsive luxury layout
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
        justify-items-center
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-8
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
