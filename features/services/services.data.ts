/**
 * -----------------------------------------------------------------------------
 * File: services.data.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Central service catalog data.
 *
 * Changes:
 * - July 27, 2026
 *   - Added initial waxing services.
 *
 * -----------------------------------------------------------------------------
 */


import type {
Service,
ServiceCategory
} from "./services.types";



export const serviceCategories: ServiceCategory[] = [

{

title:
"Signature Waxing",

description:
"Premium waxing services designed for smooth, confident results."

},


{

title:
"Face & Beauty",

description:
"Gentle facial waxing services with attention to detail."

},


{

title:
"Body Care",

description:
"Customized body waxing treatments for every client."

}

];



export const services: Service[] = [


{

id:
"brazilian-wax",

name:
"Brazilian Wax",

description:
"A luxury waxing experience focused on comfort, precision, and long-lasting smoothness.",

price:
"$75",

duration:
"45 minutes",

category:
"Signature Waxing"

},



{

id:
"bikini-wax",

name:
"Bikini Wax",

description:
"A clean, comfortable waxing service tailored to your preference.",

price:
"$45",

duration:
"30 minutes",

category:
"Signature Waxing"

},



{

id:
"facial-wax",

name:
"Facial Wax",

description:
"Gentle facial waxing designed for a polished and refreshed look.",

price:
"$20",

duration:
"15 minutes",

category:
"Face & Beauty"

},



{

id:
"full-leg",

name:
"Full Leg Wax",

description:
"A smooth full-leg treatment for beautiful, confident skin.",

price:
"$90",

duration:
"60 minutes",

category:
"Body Care"

}


];
