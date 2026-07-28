/**
 * -----------------------------------------------------------------------------
 * File: ServiceGrid.tsx
 *
 * Description:
 * Service card collection.
 *
 * Changes:
 * - July 28, 2026
 *   - Cleaner gap + centered grid
 *
 * -----------------------------------------------------------------------------
 */
import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

export default function ServiceGrid() {
  return (
    <div
      className="
        grid
        gap-6 md:gap-8
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
