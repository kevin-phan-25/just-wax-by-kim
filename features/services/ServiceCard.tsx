/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceCard.tsx
 *
 * Description:
 * Luxury service pricing card.
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
    rounded-[28px]
    border
    border-[#E8DDD8]
    bg-white/70
    p-8
    backdrop-blur-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>


  <span
    className="
      text-xs
      uppercase
      tracking-[0.35em]
      text-[#8C5A6B]
    "
  >
    {service.category}
  </span>



  <h3
    className="
      mt-5
      font-serif
      text-2xl
      text-[#3B2A26]
    "
  >
    {service.title}
  </h3>



  <p
    className="
      mt-4
      leading-relaxed
      text-[#8C7468]
    "
  >
    {service.description}
  </p>



  <div
    className="
      mt-8
      flex
      items-center
      justify-between
      border-t
      border-[#E8DDD8]
      pt-6
    "
  >

    <span
      className="
        text-sm
        text-[#8C7468]
      "
    >
      {service.duration}
    </span>



    <span
      className="
        text-xl
        font-medium
        text-[#8C5A6B]
      "
    >
      {service.price}
    </span>


  </div>


</article>

);

}
