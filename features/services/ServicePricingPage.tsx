/**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury editorial service pricing layout.
 *
 * Updates:
 * • Removed large card presentation
 * • Removed pricing disclaimer
 * • Compact luxury menu style
 * • Faster customer scanning
 * • Responsive phone / iPad / desktop
 * • Cleaner premium spa aesthetic
 *
 * ---
 *
 */

import type { Service } from "./services.types";

interface Props {
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

const categoryOrder = [
  "Brazilian Waxing",
  "Male Brazilian",
  Face,
  Body",
];

export default function ServicePricingPage({
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


  const orderedCategories = categoryOrder.filter(
    (category) => groupedServices[category]
  );


  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
      "
    >

      {/* Soft Background */}
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

          max-w-7xl

          px-5
          sm:px-8
          md:px-10
          lg:px-16
        "
      >


        {/* PAGE HEADER */}

        <header
          className="
            mb-12
            sm:mb-14
            md:mb-16

            text-center
          "
        >

          <h1
            className="
              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              tracking-[-0.035em]

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

              max-w-3xl

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
            sm:gap-16
            md:gap-20
          "
        >

          {orderedCategories.map((category)=>(

            <section
              key={category}
              className="
                w-full
              "
            >

              {/* CATEGORY TITLE */}

              <div
                className="
                  mb-6

                  flex

                  items-center

                  justify-center

                  gap-5
                "
              >

                <span
                  className="
                    hidden
                    sm:block

                    h-px

                    flex-1

                    bg-[#E8DDD8]
                  "
                />


                <h2
                  className="
                    font-serif

                    text-3xl
                    sm:text-4xl

                    tracking-[-0.02em]

                    text-[#3B2A26]

                    whitespace-nowrap
                  "
                >
                  {categoryTitles[category] ?? category}
                </h2>


                <span
                  className="
                    hidden
                    sm:block

                    h-px

                    flex-1

                    bg-[#E8DDD8]
                  "
                />

              </div>




              {/* SERVICE LIST */}

              <div
                className="
                  overflow-hidden

                  border-t

                  border-[#E8DDD8]
                "
              >

                {groupedServices[category].map(
                  (service)=>(
                  
                  <div
                    key={service.id}

                    className="
                      grid

                      grid-cols-[1fr_auto]

                      items-center

                      gap-4

                      border-b

                      border-[#E8DDD8]

                      py-4

                      sm:py-5

                      transition

                      hover:bg-[#FCF8F3]
                    "
                  >

                    {/* NAME + DURATION */}

                    <div>

                      <h3
                        className="
                          font-serif

                          text-base
                          sm:text-lg

                          text-[#3B2A26]
                        "
                      >
                        {service.title}
                      </h3>


                      <p
                        className="
                          mt-1

                          text-xs

                          uppercase

                          tracking-[0.18em]

                          text-[#8C7468]
                        "
                      >
                        {service.duration}
                      </p>

                    </div>




                    {/* PRICE */}

                    <div
                      className="
                        font-serif

                        text-lg
                        sm:text-xl

                        text-[#8C5A6B]

                        whitespace-nowrap
                      "
                    >
                      {service.price}
                    </div>


                  </div>

                ))}

              </div>


            </section>

          ))}

        </div>


      </div>

    </section>

  );
}
