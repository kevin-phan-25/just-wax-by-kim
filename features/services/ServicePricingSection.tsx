/**
 * ---
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Updates:
 * • Full width editorial layout
 * • Centered header content
 * • Removed divider accents
 * • Removed restrictive containers
 * • Responsive phone / iPad / desktop
 * • Matched Hero background
 * • Preserved navbar clearance
 *
 * ---
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
              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-tight

              text-[#3B2A26]
            "
          >
            {title}
          </h1>


          <p
            className="
              mt-6

              w-full

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

    </section>
  );
}
