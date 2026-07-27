/**
 * -----------------------------------------------------------------------------
 * File: ServiceGrid.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Service card grid.
 *
 * Changes:
 * - July 27, 2026
 *   - Added responsive service layout.
 *
 * -----------------------------------------------------------------------------
 */


import {
services
} from "./services.data";


import ServiceCard from "./ServiceCard";



export default function ServiceGrid(){


return (

<div

className="
grid
gap-6
md:grid-cols-2
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
