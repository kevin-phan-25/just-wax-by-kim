/**
 * -----------------------------------------------------------------------------
 * File:
 * Services.tsx
 *
 * Description:
 * Luxury services landing section.
 *
 * Changes:
 * - July 30, 2026
 *   - Added Ladies / Gentlemen separation
 *   - Added dedicated pricing sections
 *   - Removed duplicated service imports
 *   - Unified luxury editorial theme
 *
 * -----------------------------------------------------------------------------
 */

import {
  ladiesServices,
} from "./data/ladies.data";

import {
  gentlemenServices,
} from "./data/gentlemen.data";


import ServicePricingSection from "./ServicePricingSection";


export default function Services() {

return (

<section
  id="services"
  className="
    px-6
    py-24
  "
>

  <div
    className="
      mx-auto
      max-w-7xl
    "
  >


    {/* HEADER */}

    <div
      className="
        mx-auto
        max-w-3xl
        text-center
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
        Our Services
      </span>


      <h2
        className="
          mt-6
          font-serif
          text-4xl
          md:text-5xl
          text-[#3B2A26]
        "
      >
        Luxury Waxing
        <br />
        Designed Around You
      </h2>


      <p
        className="
          mt-6
          mx-auto
          max-w-xl
          text-lg
          leading-relaxed
          text-[#8C7468]
        "
      >
        Personalized waxing experiences created
        for confidence, comfort, and beautifully
        cared skin.
      </p>

    </div>



    {/* LADIES PRICING */}

    <div
      id="ladies-services"
      className="
        mt-20
        scroll-mt-40
      "
    >

      <ServicePricingSection

        title="Ladies Waxing"

        description="
          Luxury waxing services created around
          comfort, precision, and confidence.
        "

        services={ladiesServices}

      />

    </div>





    {/* GENTLEMEN PRICING */}

    <div
      id="gentlemen-services"
      className="
        mt-32
        scroll-mt-40
      "
    >

      <ServicePricingSection

        title="Gentlemen Waxing"

        description="
          Professional waxing services designed
          for men who value confidence and care.
        "

        services={gentlemenServices}

      />

    </div>



  </div>

</section>

);

}
