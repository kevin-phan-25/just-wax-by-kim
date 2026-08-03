/**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing menu.
 *
 * Updates:
 * • Compact editorial pricing layout
 * • Reduced scrolling
 * • Mobile optimized
 * • Brazilian prioritized
 * • Body category organization
 * • Removed card bubbles
 * • Added inclusive booking note
 *
 * ---
 *
 */

import ServiceGrid from "./ServiceGrid";
import type { Service } from "./services.types";

interface Props {
  id?: string;
  title: string;
  description: string;
  services: Service[];
}


const categoryTitles: Record<string, string> = {

  Brazilian:
    "Brazilian",

  Face:
    "Face",

  Body:
    "Body",

};



export default function ServicePricingPage({
  id,
  title,
  description,
  services,
}: Props) {


  const groupedServices = services.reduce<
    Record<string, Service[]>
  >((groups, service) => {

    if (!groups[service.category]) {
      groups[service.category] = [];
    }

    groups[service.category].push(service);

    return groups;

  }, {});



  const categoryOrder = [

    "Brazilian",

    "Face",

    "Body",

  ];



  const orderedCategories =
    categoryOrder.filter(
      (category) =>
        groupedServices[category]
    );



  return (

    <section
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
      "
    >


      {/* Background */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.22),transparent_60%)]
        "
      />



      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >



        {/* HEADER */}

        <header
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >

          <h1
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              tracking-tight
              text-[#3B2A26]
            "
          >

            {title}

          </h1>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              leading-relaxed
              text-[#8C7468]
            "
          >

            {description}

          </p>


        </header>





        {/* PRICE SECTIONS */}


        <div
          className="
            flex
            flex-col
            gap-14
            md:gap-16
          "
        >


          {orderedCategories.map(
            (category) => (

              <section
                key={category}
              >


                {/* CATEGORY TITLE */}

                <h2
                  className="
                    mb-6
                    border-b
                    border-[#E8DDD8]
                    pb-3
                    font-serif
                    text-2xl
                    sm:text-3xl
                    text-[#3B2A26]
                  "
                >

                  {categoryTitles[category]}

                </h2>





                {/* PRICE LIST */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-x-12
                    gap-y-4
                  "
                >

                  {groupedServices[category]
                    .map((service)=>(

                    <div
                      key={service.id}
                      className="
                        flex
                        items-baseline
                        justify-between
                        gap-4
                        border-b
                        border-[#F0E8E3]
                        pb-3
                      "
                    >

                      <div>

                        <h3
                          className="
                            text-sm
                            sm:text-base
                            font-medium
                            text-[#3B2A26]
                          "
                        >

                          {service.title}

                        </h3>


                        <p
                          className="
                            mt-1
                            text-xs
                            text-[#8C7468]
                          "
                        >

                          {service.duration}

                        </p>

                      </div>





                      <span
                        className="
                          whitespace-nowrap
                          font-serif
                          text-lg
                          text-[#8C5A6B]
                        "
                      >

                        {service.price}

                      </span>


                    </div>

                  ))}


                </div>


              </section>

            )
          )}


        </div>





        {/* INCLUSIVE BOOKING NOTE */}

        <div
          className="
            mt-16
            border-t
            border-[#E8DDD8]
            pt-8
            text-center
          "
        >

          <p
            className="
              mx-auto
              max-w-3xl
              text-sm
              leading-relaxed
              text-[#8C7468]
            "
          >

            At Just Wax by Kim, everyone is welcome.
            Services are booked based on the anatomy
            being waxed to ensure the appropriate
            appointment time and pricing.
            If you are unsure which service to select,
            please reach out — I’d love to help.

          </p>


        </div>


      </div>


    </section>

  );

}
