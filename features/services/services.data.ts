/**
 * -----------------------------------------------------------------------------
 * File: services.data.ts
 *
 * Description:
 * Luxury waxing service catalog.
 *
 * -----------------------------------------------------------------------------
 */


import { Service } from "./services.types";



export const services: Service[] = [



  {
    id: "brazilian-wax",

    name: "Brazilian Wax",

    category: "Signature Waxing",

    description:
      "A luxury waxing experience focused on comfort, precision, and long-lasting smoothness.",

    price: "$75",

    duration: "45 minutes",
  },




  {
    id: "bikini-wax",

    name: "Bikini Wax",

    category: "Signature Waxing",

    description:
      "A clean, comfortable waxing service tailored to your personal preference.",

    price: "$45",

    duration: "30 minutes",
  },




  {
    id: "facial-wax",

    name: "Facial Wax",

    category: "Face & Beauty",

    description:
      "Gentle facial waxing designed for a polished and refreshed appearance.",

    price: "$20",

    duration: "15 minutes",
  },




  {
    id: "full-leg-wax",

    name: "Full Leg Wax",

    category: "Body Care",

    description:
      "A smooth full-leg treatment created for beautiful, confident skin.",

    price: "$90",

    duration: "60 minutes",
  },



];
