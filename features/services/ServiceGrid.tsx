/**
 * -----------------------------------------------------------------------------
 * File: ServiceGrid.tsx
 *
 * Description:
 * Service card collection.
 *
 * Changes:
 *
 * - July 29, 2026
 *
 *   - Removed fixed sizing
 *   - Removed scaling constraints
 *   - Uses responsive natural grid flow
 *   - Cleaner editorial spacing
 *
 * -----------------------------------------------------------------------------
 */

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";


export default function ServiceGrid() {
  return (
    <>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </>
  );
}
