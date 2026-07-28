/**
 * -----------------------------------------------------------------------------
 * File: Services.tsx
 *
 * Description:
 * Main luxury services section.
 *
 * Changes:
 * - July 28, 2026
 *   - Fully centered layout
 *   - Removed category clutter above cards
 *   - More breathing room
 *   - Cleaner hierarchy
 *
 * -----------------------------------------------------------------------------
 */
import { SERVICES_CONFIG } from "./services.constants";
import ServiceGrid from "./ServiceGrid";
import ServicePricing from "./ServicePricing";

export default function Services() {
  return (
    <section className="bg-brand-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header — fully centered */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            {SERVICES_CONFIG.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-brand-espresso leading-tight">
            {SERVICES_CONFIG.title}
          </h2>

          <p className="mt-6 text-brand-taupe leading-relaxed">
            {SERVICES_CONFIG.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 md:mt-20">
          <ServiceGrid />
        </div>

        {/* Pricing note */}
        <div className="mt-12 text-center">
          <ServicePricing />
        </div>
      </div>
    </section>
  );
}
