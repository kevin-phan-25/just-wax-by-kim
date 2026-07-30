/**
 * -----------------------------------------------------------------------------
 * File:
 * ServiceGrid.tsx
 *
 * Description:
 * Responsive luxury service card grid.
 * -----------------------------------------------------------------------------
 */


import ServiceCard from "./ServiceCard";

import type {
  Service,
} from "./services.types";


interface ServiceGridProps {

  services: Service[];

}



export default function ServiceGrid({

  services,

}: ServiceGridProps){


return (

<div

className="
  w-full

  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-3

  gap-10
"

>

{
services.map((service)=>(

<ServiceCard

  key={service.id}

  service={service}

/>

))
}

</div>


);


}
