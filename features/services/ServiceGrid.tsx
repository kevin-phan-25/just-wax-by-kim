/**
 * ---
 * File:
 * features/services/ServiceGrid.tsx
 *
 * Description:
 * Luxury responsive service grid.
 *
 * Updates:
 * • Restored ServiceGrid props
 * • Supports Service[] input
 * • Responsive editorial layout
 * • Centered service cards
 * ---
 */


import ServiceCard from "./ServiceCard";
import type { Service } from "./services.types";


interface ServiceGridProps {

  services: Service[];

}



export default function ServiceGrid({

  services,

}: ServiceGridProps) {


  return (

    <div

      className="
        w-full

        grid

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-3

        xl:grid-cols-4

        justify-items-center

        gap-8

        md:gap-10

        xl:gap-12
      "

    >

      {services.map((service) => (

        <ServiceCard

          key={service.id}

          service={service}

        />

      ))}


    </div>

  );

}
