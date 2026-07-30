/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services landing section.
 *
 * Changes:
 * - Added Ladies / Gentlemen pricing sections
 * - Connected navigation anchors
 * - Removed unused category imports
 * - Uses separated service data files
 *
 * -----------------------------------------------------------------------------
 */

import ServicePricingSection from "./ServicePricingSection";

import {
  ladiesServices,
} from "./data/ladies.data";

import {
  gentlemenServices,
} from "./data/gentlemen.data";


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
            For Everyone
          </h2>


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
            Personalized waxing experiences designed
            around comfort, confidence, and beautifully
            cared skin.
          </p>


        </div>



        {/* LADIES PRICING */}

        <ServicePricingSection
          id="ladies-services"
          title="Ladies Waxing"
          description="
            Luxury waxing services created around comfort,
            precision, and confidence.
          "
          services={ladiesServices}
        />



        {/* GENTLEMEN PRICING */}

        <ServicePricingSection
          id="gentlemen-services"
          title="Gentlemen Waxing"
          description="
            Professional waxing services designed for men
            who value confidence, comfort, and care.
          "
          services={gentlemenServices}
        />


      </div>

    </section>
  );
}
