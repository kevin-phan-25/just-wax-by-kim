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

name:"Brazilian Wax",

category:"Signature Waxing",

description:
"A luxury waxing experience focused on comfort, precision, and long-lasting smoothness.",

price:"$75",

duration:"45 minutes",

},



{
id:"bikini-wax",

name:"Bikini Wax",

category:"Signature Waxing",

description:
"A clean, comfortable waxing service tailored to your personal preference.",

price:"$45",

duration:"30 minutes",

},



{
id:"facial-wax",

name:"Facial Wax",

category:"Face & Beauty",

description:
"Gentle facial waxing designed for a polished and refreshed look.",

price:"$20",

duration:"15 minutes",

},



{
id:"full-leg-wax",

name:"Full Leg Wax",

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


name:"Signature Waxing",


description:
"Premium waxing services designed around comfort, confidence, and quality.",


services: services.filter(

(service)=>

service.category==="Signature Waxing"

),


},



{


id:"face-beauty",


name:"Face & Beauty",


description:
"Gentle facial services with attention to detail.",


services: services.filter(

(service)=>

service.category==="Face & Beauty"

),


},



{


id:"body-care",


name:"Body Care",


description:
"Customized body treatments for smooth confident skin.",


services: services.filter(

(service)=>

service.category==="Body Care"

),


},



];
