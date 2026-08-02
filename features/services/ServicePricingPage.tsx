 /**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing page layout.
 *
 * Updated:
 * • Added service category sections
 * • Separates Bikini / Face / Body
 * • Keeps reusable ServiceGrid architecture
 * • Supports Ladies and Gentlemen catalogs
 * • Maintains luxury editorial spacing
 * • Responsive phone / iPad / desktop handling
 *
 * ---
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


  const orderedCategories = categoryOrder.filter(
    (category) => groupedServices[category]
  );


  return (
    <section
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F4]
        pb-20
        md:pb-28
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />


      <div
        className="
          relative
          z-10
          w-full
          px-5
          sm:px-8
          md:px-10
          lg:px-16
          xl:px-24
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            items-center
            justify-center
            text-center
            mb-14
            sm:mb-16
            md:mb-20
          "
        >

          <h1
            className="
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-[1.1]
              tracking-[-0.035em]
              text-[#3B2A26]
              md:whitespace-nowrap
            "
          >
            {title}
          </h1>


          <p
            className="
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



        {/* CATEGORY SECTIONS */}
        <div
          className="
            flex
            flex-col
            gap-20
            md:gap-24
          "
        >

          {orderedCategories.map((category) => (

            <section
              key={category}
              className="
                w-full
              "
            >

              <header
                className="
                  mb-10
                  flex
                  justify-center
                  text-center
                "
              >

                <h2
                  className="
                    font-serif
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    tracking-[-0.03em]
                    text-[#3B2A26]
                  "
                >
                  {categoryTitles[category] ?? category}
                </h2>

              </header>


              <ServiceGrid
                services={groupedServices[category]}
              />

            </section>

          ))}

        </div>


      </div>

    </section>
  );
}
