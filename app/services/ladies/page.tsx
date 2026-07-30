import ServicePricingPage from "@/features/services/ServicePricingPage";
import { ladiesServices } from "@/features/services/data/ladies.data";


export default function LadiesPage(){

return (

<ServicePricingPage

title="Ladies Waxing"

description="
Luxury waxing services designed around comfort,
precision, and confidence.
"

services={ladiesServices}

/>

);

}
