/**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury compact service pricing menu.
 *
 * Updates:
 * • Restored section id support
 * • Removed oversized cards
 * • Removed collection styling
 * • More prices visible per screen
 * • Responsive phone / iPad / desktop
 * • Category based organization
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

  "Brazilian Waxing":
    "Brazilian & Bikini",

  "Male Brazilian":
    "Men's Brazilian",

  Body:
    "Body",

  Face:
    "Face",

};



export default function ServicePricingPage({
  id,
  title,
  description,
  services,
}: Props) {


  const groupedServices =
    services.reduce<Record<string, Service[]>>(
      (groups, service) => {

        if (!groups[service.category]) {
          groups[service.category] = [];
        }

        groups[service.category].push(service);

        return groups;

      },
      {}
    );



  /*
   * Controls category display order.
   * Service data sorting will be handled later.
   */

  const categoryOrder = [
    "Brazilian Waxing",
    "Male Brazilian",
    "Body",
    "Face",
  ];



  const orderedCategories =
    categoryOrder.filter(
      (category) =>
        groupedServices[category]
    );



  return (

    <div
      id={id}
      className="
        relative

        z-10

        w-full

        px-5

        sm:px-8

        md:px-12

        lg:px-20

        xl:px-28
      "
    >


      {/* PAGE HEADER */}

      <header
        className="
          mx-auto

          max-w-4xl

          text-center

          mb-10

          sm:mb-12

          md:mb-14
        "
      >

        <h1
          className="
            font-serif

            text-3xl

            sm:text-4xl

            md:text-5xl

            leading-tight

            tracking-[-0.03em]

            text-[#3B2A26]
          "
        >
          {title}
        </h1>



        <p
          className="
            mt-3

            mx-auto

            max-w-2xl

            text-sm

            sm:text-base

            leading-relaxed

            text-[#8C7468]
          "
        >
          {description}
        </p>


      </header>





      {/* SERVICE CATEGORIES */}

      <div
        className="
          flex

          flex-col

          gap-10

          sm:gap-12

          md:gap-14
        "
      >

        {orderedCategories.map(
          (category) => (

            <section
              key={category}
              className="
                w-full
              "
            >


              {/* CATEGORY HEADER */}

              <header
                className="
                  mb-4

                  sm:mb-6

                  text-center
                "
              >

                <h2
                  className="
                    font-serif

                    text-2xl

                    sm:text-3xl

                    md:text-4xl

                    tracking-[-0.03em]

                    text-[#3B2A26]
                  "
                >
                  {
                    categoryTitles[category]
                    ?? category
                  }
                </h2>


              </header>





              {/* PRICE LIST */}

              <ServiceGrid
                services={
                  groupedServices[category]
                }
              />


            </section>

          )
        )}


      </div>


    </div>

  );

}
