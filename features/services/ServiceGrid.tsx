/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceGrid.tsx
 *
 * Description:
 * Reusable luxury service card grid.
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
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
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
