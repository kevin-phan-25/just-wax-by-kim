/**
 * --------------------------------------------------------------------------
 * File:
 * features/instagram/instagram.data.ts
 *
 * Description:
 * Instagram gallery content data.
 *
 * Changes:
 * • Updated for standalone Instagram page
 * • Added luxury editorial descriptions
 * • Added social links
 * • Prepared for future Instagram feed expansion
 *
 * --------------------------------------------------------------------------
 */


import type {
  InstagramPost,
} from "./instagram.types";





export const instagramPosts: InstagramPost[] = [


  {
    id: "1",

    image:
      "/gallery/studio-1.webp",

    alt:
      "Elegant waxing studio interior with a calm luxury atmosphere",

    href:
      "https://instagram.com/justwaxbykim",
  },




  {
    id: "2",

    image:
      "/gallery/studio-2.webp",

    alt:
      "Private treatment space designed for comfort and relaxation",

    href:
      "https://instagram.com/justwaxbykim",
  },




  {
    id: "3",

    image:
      "/gallery/studio-3.webp",

    alt:
      "Luxury waxing details and professional studio environment",

    href:
      "https://instagram.com/justwaxbykim",
  },




  {
    id: "4",

    image:
      "/gallery/luxury-detail.webp",

    alt:
      "Premium skincare products and waxing essentials",

    href:
      "https://instagram.com/justwaxbykim",
  },


];
