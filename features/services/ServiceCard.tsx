/**
 * -----------------------------------------------------------------------------
 * File: ServiceCard.tsx
 *
 * Description:
 * Luxury service presentation card.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed duration (minutes)
 *   - Centered content for cleaner look
 *   - Reduced visual clutter
 *
 * -----------------------------------------------------------------------------
 */
import type { Service } from "./services.types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="
        group
        flex flex-col items-center text-center
        rounded-3xl
        border border-brand-gold/15
        bg-white
        px-8 py-10
        shadow-sm
        transition duration-300
        hover:-translate-y-1.5
        hover:shadow-lg
      "
    >
      <p
        className="
          text-[11px] uppercase tracking-[0.3em]
          text-brand-gold
        "
      >
        {service.category}
      </p>

      <h3
        className="
          mt-4
          text-xl font-medium tracking-wide
          text-brand-espresso
        "
      >
        {service.title}
      </h3>

      <p
        className="
          mt-4
          text-sm leading-relaxed
          text-brand-taupe
          max-w-[240px]
        "
      >
        {service.description}
      </p>

      <div className="mt-8 pt-6 border-t border-brand-border/60 w-full">
        <span className="text-2xl font-medium text-brand-gold">
          {service.price}
        </span>
      </div>
    </article>
  );
}
