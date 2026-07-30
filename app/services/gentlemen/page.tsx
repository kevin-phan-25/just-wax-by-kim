import ServicePricingPage from "@/features/services/ServicePricingPage";
import { gentlemenServices } from "@/features/services/data/gentlemen.data";


export default function GentlemenPage(){

return (

<ServicePricingPage

title="Gentlemen Waxing"

description="
Professional waxing services created for men
who value confidence, comfort, and care.
"

services={gentlemenServices}

/>

);

}
