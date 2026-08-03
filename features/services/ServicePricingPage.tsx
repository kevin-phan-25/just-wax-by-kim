/**
 * -------------------------------------------------------------------
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing menu.
 *
 * Updates:
 * • Compact editorial pricing layout
 * • Bikini prioritized
 * • Face + Body organization
 * • Supports service option dropdowns
 * • Mobile / iPad / desktop responsive
 * -------------------------------------------------------------------
 */

"use client";

import { useState } from "react";
import type { Service } from "./services.types";


interface Props {
  id?: string;
  title: string;
  description: string;
  services: Service[];
}



const categoryTitles: Record<string, string> = {
  Bikini: "Bikini",
  Face: "Face",
  Body: "Body",
};



export default function ServicePricingPage({
  id,
  title,
  description,
  services,
}: Props) {


  const [openOptions, setOpenOptions] = useState<string | null>(null);



  const groupedServices = services.reduce<
    Record<string, Service[]>
  >(
    (groups, service) => {

      if (!groups[service.category]) {
        groups[service.category] = [];
      }

      groups[service.category].push(service);

      return groups;

    },
    {}
  );



  const categoryOrder = [
    "Bikini",
    "Face",
    "Body",
  ];



  const orderedCategories =
    categoryOrder.filter(
      (category) =>
        groupedServices[category]
    );



  const toggleOptions = (id: string) => {

    setOpenOptions(
      openOptions === id
        ? null
        : id
    );

  };



  return (

    <section
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        py-12
        sm:py-16
        md:py-20
      "
    >


      {/* Background */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.18),transparent_60%)]
        "
      />



      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-5
          sm:px-8
          md:px-10
          lg:px-12
        "
      >



        {/* HEADER */}

        <header
          className="
            mx-auto
            mb-8
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
              mt-3
              text-sm
              sm:text-base
              leading-relaxed
              text-[#8C7468]
            "
          >
            {description}
          </p>


        </header>




        {/* SERVICE SECTIONS */}

        <div
          className="
            flex
            flex-col
            gap-10
            sm:gap-12
          "
        >


          {orderedCategories.map(
            (category) => (

              <section
                key={category}
              >


                <h2
                  className="
                    mb-3
                    border-b
                    border-[#E8DDD8]
                    pb-2
                    font-serif
                    text-xl
                    sm:text-2xl
                    text-[#3B2A26]
                  "
                >
                  {categoryTitles[category]}
                </h2>



                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-x-10
                    gap-y-1
                  "
                >
                                 {groupedServices[category].map(
                    (service) => (

                      <div
                        key={service.id}
                        className="
                          border-b
                          border-[#F2EAE5]
                          py-2
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >

                          <button
                            type="button"
                            onClick={() =>
                              service.options &&
                              toggleOptions(service.id)
                            }
                            className={`
                              min-w-0
                              text-left
                              ${
                                service.options
                                  ? "cursor-pointer"
                                  : "cursor-default"
                              }
                            `}
                          >

                            <h3
                              className="
                                truncate
                                text-sm
                                font-medium
                                text-[#3B2A26]
                              "
                            >
                              {service.title}
                            </h3>


                            <p
                              className="
                                text-[11px]
                                text-[#8C7468]
                              "
                            >
                              {service.duration}
                            </p>


                          </button>




                          <span
                            className="
                              whitespace-nowrap
                              font-serif
                              text-base
                              text-[#8C5A6B]
                            "
                          >
                            {service.price}
                          </span>


                        </div>





                        {/* EXPANDABLE OPTIONS */}

                        {service.options &&
                          openOptions === service.id && (

                            <div
                              className="
                                mt-3
                                ml-2
                                border-l
                                border-[#E8DDD8]
                                pl-4
                                space-y-2
                              "
                            >

                              {service.options.map(
                                (option) => (

                                  <div
                                    key={option.label}
                                    className="
                                      flex
                                      items-center
                                      justify-between
                                      text-sm
                                    "
                                  >

                                    <div>

                                      <p
                                        className="
                                          text-[#3B2A26]
                                        "
                                      >
                                        {option.label}
                                      </p>


                                      {option.duration && (
                                        <p
                                          className="
                                            text-[11px]
                                            text-[#8C7468]
                                          "
                                        >
                                          {option.duration}
                                        </p>
                                      )}

                                    </div>


                                    <span
                                      className="
                                        font-serif
                                        text-[#8C5A6B]
                                      "
                                    >
                                      {option.price}
                                    </span>


                                  </div>

                                )
                              )}

                            </div>

                          )}

                      </div>

                    )
                  )}

                </div>


              </section>

            )
          )}


        </div>





        {/* BOOKING NOTE */}

        <div
          className="
            mt-10
            border-t
            border-[#E8DDD8]
            pt-6
            text-center
          "
        >

          <p
            className="
              mx-auto
              max-w-2xl
              text-xs
              sm:text-sm
              leading-relaxed
              text-[#8C7468]
            "
          >
            At Just Wax by Kim, everyone is welcome.
            Services are selected based on the area
            being waxed to ensure the correct
            appointment time and pricing.
            If you are unsure which service to book,
            please reach out — I’d love to help.
          </p>


        </div>



      </div>


    </section>

  );

} 
