/**
 * -----------------------------------------------------------------------------
 * File: Services.tsx
 *
 * Description:
 * Main luxury services section.
 *
 * Changes:
 *
 * July 29, 2026
 *
 * - Removed fixed sizing and scaling constraints
 * - Uses global luxury typography system
 * - Unified spacing with brand theme
 * - Cleaner editorial hierarchy
 * - Fully centered luxury presentation
 *
 * -----------------------------------------------------------------------------
 */

import { SERVICES_CONFIG } from "./services.constants";
import ServiceGrid from "./ServiceGrid";
import ServicePricing from "./ServicePricing";

export default function Services() {
  return (
    <section
      id="services"
      className="
        section-luxury
        section-padding
        bg-luxury
      "
    >
      <div
        className="
          container-luxury
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* Header */}
        <div
          className="
            service-header
          "
        >

          <span
            className="
              service-eyebrow
            "
          >
            {SERVICES_CONFIG.eyebrow}
          </span>


          <h2
            className="
              service-title
              heading-luxury
            "
          >
            {SERVICES_CONFIG.title}
          </h2>


          <p
            className="
              lead
              mt-6
            "
          >
            {SERVICES_CONFIG.description}
          </p>

        </div>


        {/* Service Cards */}
        <div
          className="
            service-grid
            mt-16
            md:mt-20
            w-full
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <ServiceGrid />
        </div>


        {/* Pricing Note */}
        <div
          className="
            mt-12
            w-full
            text-center
          "
        >
          <ServicePricing />
        </div>


      </div>
    </section>
  );
}
