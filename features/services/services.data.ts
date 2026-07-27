/**
 * -----------------------------------------------------------------------------
 * File: services.data.ts
 *
 * Description:
 * Luxury waxing service catalog.
 *
 * -----------------------------------------------------------------------------
 */


import type {

Service,

ServiceCategory

} from "./services.types";





export const services: Service[] = [



{
id:"brazilian-wax",

title:"Brazilian Wax",

category:"Signature Waxing",

description:
"A luxury waxing experience focused on comfort, precision, and long-lasting smoothness.",

price:"$75",

duration:"45 minutes",

},



{
id:"bikini-wax",

title:"Bikini Wax",

category:"Signature Waxing",

description:
"A clean, comfortable waxing service tailored to your personal preference.",

price:"$45",

duration:"30 minutes",

},



{
id:"facial-wax",

title:"Facial Wax",

category:"Face & Beauty",

description:
"Gentle facial waxing designed for a polished and refreshed look.",

price:"$20",

duration:"15 minutes",

},



{
id:"full-leg-wax",

title:"Full Leg Wax",

category:"Body Care",

description:
"A smooth full-leg treatment created for beautiful confident skin.",

price:"$90",

duration:"60 minutes",

},



];







export const serviceCategories: ServiceCategory[] = [



{


id:"signature-waxing",

title:"Signature Waxing",

description:
"Premium waxing services designed around comfort, confidence, and quality.",

services:

services.filter(

(service)=>

service.category==="Signature Waxing"

),


},




{


id:"face-beauty",

title:"Face & Beauty",

description:
"Gentle facial waxing services with attention to detail.",

services:

services.filter(

(service)=>

service.category==="Face & Beauty"

),


},




{


id:"body-care",

title:"Body Care",

description:
"Customized body waxing treatments for every client.",

services:

services.filter(

(service)=>

service.category==="Body Care"

),


},



];
