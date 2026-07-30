/**
 * -----------------------------------------------------------------------------
 * File: Services.tsx
 *
 * Description:
 * Main luxury services section.
 *
 * Changes:
 *
 * - July 29, 2026
 *
 *   - Removed fixed sizing and scaling constraints
 *   - Uses global luxury typography system
 *   - Unified spacing with brand theme
 *   - Cleaner editorial hierarchy
 *   - Fully centered luxury presentation
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
        w-full
        py-24
      "
    >

      <div
        className="
          mx-auto
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
              mt-4
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
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >
          <ServiceGrid />
        </div>


        {/* Pricing Note */}
        <div
          className="
            mt-16
            text-center
          "
        >
          <ServicePricing />
        </div>


      </div>

    </section>

  );
}
