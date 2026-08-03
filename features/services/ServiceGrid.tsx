/**
 * ---------------------------------------------------
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury editorial service menu layout.
 *
 * Updates:
 * • Removed card grid
 * • Removed boxed layout
 * • Elegant spa menu presentation
 * • Responsive phone / tablet / desktop
 * • Improved scanning experience
 * ---------------------------------------------------
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

        max-w-5xl

        divide-y

        divide-[#E8DDD8]
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
