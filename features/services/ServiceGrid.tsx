import ServiceCard from "./ServiceCard";
import { services } from "./services.data";


export default function ServiceGrid(){


return (

<div

className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
"

>


{

services.map((service)=> (

<ServiceCard

key={service.id}

service={service}

/>

))

}


</div>

);


}
