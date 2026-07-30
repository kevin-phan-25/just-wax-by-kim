/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Full width layout
 * - Centered heading
 * - Centered description
 * - Removed fixed sizing constraints
 * - Responsive luxury grid
 * -----------------------------------------------------------------------------
 */

import ServiceCard from "./ServiceCard";

import type {
  Service,
} from "./services.types";


interface ServicePricingSectionProps {

  id: string;

  title: string;

  description: string;

  services: Service[];

}



export default function ServicePricingSection({

  id,

  title,

  description,

  services,

}: ServicePricingSectionProps) {


return (

<section

  id={id}

  className="
    scroll-mt-[168px]
    px-6
    py-24
  "

>


  {/* HEADER */}

  <div

    className="
      mx-auto
      max-w-4xl
      text-center
    "

  >

    <h2

      className="
        font-serif
        text-4xl
        md:text-5xl
        text-[#3B2A26]
      "

    >

      {title}

    </h2>



    <p

      className="
        mx-auto
        mt-6
        max-w-3xl
        text-lg
        leading-relaxed
        text-[#8C7468]
      "

    >

      {description}

    </p>


  </div>





  {/* SERVICE GRID */}

  <div

    className="
      mt-20
      w-full

      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3

      gap-10
    "

  >

    {
      services.map((service)=>(

        <ServiceCard

          key={service.id}

          service={service}

        />

      ))
    }


  </div>



</section>


);


}
