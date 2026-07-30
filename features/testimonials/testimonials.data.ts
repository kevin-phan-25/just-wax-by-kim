/**
 * -----------------------------------------------------------------------------
 * File:
 * features/testimonials/testimonials.data.ts
 *
 * Description:
 * Customer testimonial data.
 *
 * Changes:
 *
 * - July 30, 2026
 * - Added type import fix
 * - Preserved luxury testimonial content
 *
 * -----------------------------------------------------------------------------
 */

import type {
  Testimonial,
} from "./testimonial.types";


export const testimonials: Testimonial[] = [

  {
    id: "1",

    name: "Samantha",

    quote:
      "Kim made my first waxing experience comfortable and relaxing. The attention to detail was incredible.",

    rating: 5,
  },


  {
    id: "2",

    name: "Jessica",

    quote:
      "The studio feels luxurious and welcoming. Kim truly cares about her clients.",

    rating: 5,
  },


  {
    id: "3",

    name: "Emily",

    quote:
      "Professional, gentle, and amazing results every appointment.",

    rating: 5,
  },

];
