/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 * - Added category hero image support
 * - Centered page heading
 * - Removed fixed width restrictions
 * - Unified luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

import ServiceGrid from "./ServiceGrid";

import type {
  Service,
} from "./services.types";


interface ServicePricingSectionProps {

  id: string;

  image: string;

  title: string;

  description: string;

  services: Service[];

}



export default function ServicePricingSection({

  id,

  image,

  title,

  description,

  services,

}: ServicePricingSectionProps) {


return (

<section

  id={id}

  className="
    scroll-mt-[168px]
    pb-32
  "

>


  {/* HERO IMAGE */}

  <div
    className="
      relative
      w-full
      overflow-hidden
      mb-20
    "
  >

    <Image

      src={image}

      alt={title}

      width={1600}

      height={900}

      className="
        w-full
        h-[420px]
        object-cover
      "

      priority

    />

  </div>



  {/* HEADER */}

  <div

    className="
      w-full
      px-6
      text-center
      mb-20
    "

  >

    <h1

      className="
        font-serif
        text-4xl
        md:text-5xl
        text-[#3B2A26]
      "

    >

      {title}

    </h1>



    <p

      className="
        mt-6
        mx-auto
        max-w-3xl
        text-lg
        leading-relaxed
        text-[#8C7468]
      "

    >

      {description}

    </p>


  </div>



  {/* SERVICES */}

  <div

    className="
      w-full
      px-6
    "

  >

    <ServiceGrid

      services={services}

    />

  </div>



</section>

);

}
