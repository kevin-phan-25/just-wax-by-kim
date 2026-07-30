/**
 * -----------------------------------------------------------------------------
 * File: ServiceCard.tsx
 *
 * Description:
 * Luxury service presentation card.
 *
 * Changes:
 *
 * - July 29, 2026
 *
 *   - Removed fixed sizing constraints
 *   - Removed visual clutter
 *   - Unified typography and colors
 *   - Natural content-based height
 *
 * -----------------------------------------------------------------------------
 */


import type { Service } from "./services.types";


interface ServiceCardProps {
  service: Service;
}


export default function ServiceCard({
  service,
}: ServiceCardProps) {


  return (

    <article
      className="
        service-card
        text-center
        p-8
      "
    >


      <span
        className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-brand-gold
        "
      >
        {service.category}
      </span>



      <h3
        className="
          mt-5
          font-medium
          tracking-wide
          text-brand-espresso
        "
      >
        {service.title}
      </h3>



      <p
        className="
          mt-5
          leading-relaxed
          text-brand-taupe
        "
      >
        {service.description}
      </p>



      <div
        className="
          mt-8
          pt-6
          border-t
          border-brand-border
          flex
          justify-center
        "
      >

        <span
          className="
            font-medium
            text-brand-dusty-pink
          "
        >
          {service.price}
        </span>


      </div>


    </article>

  );

}
