/**
 * -----------------------------------------------------------------------------
 * File: ServiceGrid.tsx
 *
 * Description:
 * Service card collection.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Matched luxury card system
 * - Improved responsive spacing
 * - Removed unnecessary constraints
 *
 * -----------------------------------------------------------------------------
 */

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";


export default function ServiceGrid() {

  return (
    <div
      className="
        service-grid
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
      "
    >

      {services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
        />
      ))}

    </div>
  );
}
