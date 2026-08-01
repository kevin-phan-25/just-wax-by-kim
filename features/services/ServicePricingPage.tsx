/**
 * ---
 * File:
 * features/services/ServicePricingPage.tsx
 *
 * Description:
 * Luxury service pricing page layout.
 *
 * Updates:
 * • Full width editorial presentation
 * • Centered page headers
 * • One-line desktop titles
 * • Responsive phone/tablet/desktop
 * • Removed restrictive containers
 * • Removed divider accents
 * • Matches site luxury theme
 *
 * ---
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



      {/* CONTENT */}
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

            text-center

            mb-14
            md:mb-16
            xl:mb-20
          "
        >

          <h1
            className="
              w-full

              whitespace-nowrap

              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-tight

              text-center

              text-[#3B2A26]
            "
          >
            {title}
          </h1>


          <p
            className="
              w-full

              mt-6

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
