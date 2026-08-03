/**
 *
 * ---
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury compact pricing list.
 *
 * Updates:
 * • Removed card grid
 * • Single elegant menu column
 * • Better phone scrolling
 * • More services visible
 *
 * ---
 *
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

        max-w-4xl

        mx-auto
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
