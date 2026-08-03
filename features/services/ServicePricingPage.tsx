/**
 * ---------------------------------------------------
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury editorial service pricing page.
 *
 * Updates:
 * • Editorial spa menu layout
 * • Removed card-based presentation
 * • Elegant category sections
 * • Improved spacing hierarchy
 * • Responsive phone / iPad / desktop
 * • Supports Ladies and Gentlemen catalogs
 * ---------------------------------------------------
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
  "Brazilian Waxing": "Bikini",
  "Male Brazilian": "Male Brazilian",
  Face: "Face",
  Body: "Body",
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
    "Brazilian Waxing",
    "Male Brazilian",
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

        bg-[#FCF8F3]

        py-20

        sm:py-24

        md:py-32
      "
    >

      {/* Soft Background */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.25),transparent_60%)]
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

          md:px-12

          lg:px-16

          xl:px-20
        "
      >


        {/* PAGE HEADER */}
        <header
          className="
            mx-auto

            max-w-4xl

            text-center

            mb-20

            sm:mb-24

            md:mb-28
          "
        >

          <h1
            className="
              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.1]

              tracking-[-0.04em]

              text-[#3B2A26]
            "
          >
            {title}
          </h1>


          <p
            className="
              mx-auto

              mt-6

              max-w-3xl

              text-base

              sm:text-lg

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

            gap-24

            md:gap-32
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


                {/* CATEGORY TITLE */}
                <header
                  className="
                    mb-8

                    sm:mb-10

                    text-center
                  "
                >

                  <p
                    className="
                      uppercase

                      tracking-[0.35em]

                      text-xs

                      text-[#8C5A6B]
                    "
                  >
                    Collection
                  </p>


                  <h2
                    className="
                      mt-3

                      font-serif

                      text-3xl

                      sm:text-4xl

                      md:text-5xl

                      tracking-[-0.03em]

                      text-[#3B2A26]
                    "
                  >
                    {categoryTitles[category] ??
                      category}
                  </h2>


                </header>



                {/* MENU ITEMS */}
                <ServiceGrid
                  services={
                    groupedServices[category]
                  }
                />


              </section>

            )
          )}

        </div>


        {/* FOOTNOTE */}
        <div
          className="
            mt-24

            sm:mt-32

            text-center
          "
        >

          <p
            className="
              mx-auto

              max-w-2xl

              text-sm

              leading-relaxed

              text-[#8C7468]
            "
          >
            Pricing may vary based on service
            customization. Consultation is always
            available before your appointment.
          </p>

        </div>


      </div>

    </section>
  );
}
