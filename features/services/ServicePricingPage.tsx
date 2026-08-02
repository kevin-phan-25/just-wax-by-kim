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
 * • Added optional section id support
 * • Full width editorial presentation
 * • Mobile-first responsive spacing
 * • True centered headers
 * • Responsive phone / iPad / desktop handling
 * • Uses shared ServiceGrid component
 * • Removed restrictive containers
 * • Removed divider accents
 * • Unified luxury spacing system
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


export default function ServicePricingPage({
  id,
  title,
  description,
  services,
}: Props) {
  return (
    <section
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F4]

        pt-[168px]
        md:pt-[190px]

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
