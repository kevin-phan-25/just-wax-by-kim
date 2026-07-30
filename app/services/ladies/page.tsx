/**
 * --------------------------------------------------------------------------
 * File:
 * app/services/ladies/page.tsx
 *
 * Description:
 * Ladies waxing pricing page.
 *
 * --------------------------------------------------------------------------
 */

import ServicePricingSection from "@/features/services/ServicePricingSection";

import {
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage(){

return (

<main
  className="
    relative

    pt-[216px]

    pb-24
  "
>


  <div
    className="
      container-luxury
    "
  >


    <div
      className="
        text-center
        mb-16
      "
    >

      <span
        className="
          uppercase
          tracking-[0.4em]
          text-sm
          text-[#8C5A6B]
        "
      >
        Ladies Services
      </span>


      <h1
        className="
          mt-6
          font-serif
          text-5xl
          md:text-6xl
          text-[#3B2A26]
        "
      >
        Ladies Waxing
      </h1>


      <p
        className="
          mx-auto
          mt-6
          max-w-xl
          text-lg
          leading-relaxed
          text-[#8C7468]
        "
      >
        Premium waxing services created with
        precision, comfort, and confidence.
      </p>


    </div>



    <ServicePricingSection

      id="ladies-pricing"

      title="Ladies Waxing"

      description="
        Luxury waxing services designed around
        comfort, confidence, and beautifully cared skin.
      "

      services={ladiesServices}

    />


  </div>


</main>

);

}
