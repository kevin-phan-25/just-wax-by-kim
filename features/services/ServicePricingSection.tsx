/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Responsive Update:
 * • Matches Hero spacing system
 * • Responsive navbar clearance
 * • Mobile/iPad optimized spacing
 * • Editorial luxury presentation
 * • Centered service grid
 *
 * -----------------------------------------------------------------------------
 */

import ServiceGrid from "./ServiceGrid";
import type { Service } from "./services.types";


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
        relative
        overflow-hidden
        bg-[#FCF8F3]
      "
    >


      {/* Soft ambient luxury wash */}

      <div

        aria-hidden

        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "

      />



      {/* Navbar responsive clearance */}

      <div
        className="
          nav-clearance
        "
      />



      {/* Main Content */}

      <div

        className="
          relative
          z-10

          w-full

          px-5
          md:px-8
          xl:px-16

          pb-24
        "

      >



        {/* HEADER */}

        <header

          className="
            mx-auto

            max-w-4xl

            text-center

            mb-12
            md:mb-16
            xl:mb-20
          "

        >


          <h1

            className="
              font-serif

              text-4xl
              sm:text-5xl
              xl:text-6xl

              leading-tight

              text-[#3B2A26]
            "

          >

            {title}

          </h1>




          <p

            className="
              mx-auto

              mt-5
              md:mt-6

              max-w-2xl

              text-base
              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "

          >

            {description}

          </p>


        </header>





        {/* SERVICE GRID */}

        <div

          className="
            w-full
          "

        >

          <ServiceGrid
            services={services}
          />

        </div>



      </div>





      {/* Bottom Editorial Divider */}

      <div

        aria-hidden

        className="
          absolute

          bottom-0

          left-1/2

          -translate-x-1/2

          w-[min(92%,1200px)]

          h-px

          bg-[#E8DDD8]
        "

      />


    </section>

  );

}
