/**
 *
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing page layout.
 *
 * Updates:
 * • Full width editorial presentation
 * • True centered headers
 * • One-line desktop titles
 * • Responsive mobile handling
 * • Removed restrictive containers
 * • Removed divider accents
 * • Matches luxury theme
 *
 * ---
 *
 */

import ServiceCard from "./ServiceCard";
import type { Service } from "./services.types";

interface Props {
  title: string;
  description: string;
  services: Service[];
}

export default function ServicePricingPage({
  title,
  description,
  services,
}: Props) {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F3]
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


      {/* Navbar Clearance */}
      <div
        className="
          h-[168px]
          md:h-[190px]
        "
      />



      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10

          w-full

          px-5
          sm:px-8
          md:px-10
          lg:px-16

          pb-[0.5in]
        "
      >


        {/* HEADER */}
        <header
          className="
            w-full

            flex
            flex-col
            items-center
            justify-center

            text-center

            mb-16
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

              text-[#3B2A26]

              text-center

              md:whitespace-nowrap
            "
          >
            {title}
          </h1>



          <p
            className="
              mt-6

              w-full

              text-center

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

            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            justify-items-center

            gap-x-8
            gap-y-10

            md:gap-x-10
            md:gap-y-12

            xl:gap-x-12
            xl:gap-y-14
          "
        >

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>


      </div>


    </section>
  );
}
