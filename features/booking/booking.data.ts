/**
 * ------------------------------------------------------------------
 * File: booking.data.ts
 *
 * Description:
 * Luxury booking information data.
 *
 * Changes:
 *
 * - Refined benefit messaging
 * - Added premium client-focused language
 * - Matches luxury studio positioning
 *
 * ------------------------------------------------------------------
 */

import type {
  BookingBenefit,
  BusinessHour,
} from "./booking.types";



export const bookingBenefits: BookingBenefit[] = [

  {
    title:
      "Private Experience",

    description:
      "Relax in a comfortable boutique studio environment designed around your privacy, confidence, and personal care."
  },


  {
    title:
      "Professional Products",

    description:
      "Experience carefully selected professional products chosen to provide gentle care and beautiful lasting results."
  },


  {
    title:
      "Easy Scheduling",

    description:
      "Reserve your appointment with a simple booking process designed to fit seamlessly into your schedule."
  }

];




export const businessHours: BusinessHour[] = [

  {
    day:
      "Monday - Friday",

    hours:
      "9:00 AM - 6:00 PM"
  },


  {
    day:
      "Saturday",

    hours:
      "9:00 AM - 3:00 PM"
  },


  {
    day:
      "Sunday",

    hours:
      "Closed"
  }

];



export const cancellationPolicy =
  "Please provide 24 hours notice for appointment changes or cancellations.";
