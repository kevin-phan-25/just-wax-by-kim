/**
 *
 * ---
 * File:
 * features/instagram/instagram.data.ts
 *
 * Description:
 * Instagram journey content data.
 *
 * Changes:
 * • Shifted from gallery duplication
 * • Added behind-the-scenes storytelling
 * • Prepared for real Instagram feed expansion
 *
 * ---
 *
 */

import type {
  InstagramPost,
} from "./instagram.types";


export const instagramPosts: InstagramPost[] = [

  {
    id: "1",

    image:
      "/instagram/studio-moment.webp",

    alt:
      "Behind the scenes moment at Just Wax by Kim",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "2",

    image:
      "/instagram/treatment-details.webp",

    alt:
      "Luxury waxing tools and personalized treatment details",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "3",

    image:
      "/instagram/self-care-moment.webp",

    alt:
      "A relaxing self-care experience at Just Wax by Kim",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "4",

    image:
      "/instagram/kim-studio.webp",

    alt:
      "Kim preparing the studio experience for guests",

    href:
      "https://instagram.com/justwaxbykim",
  },

];
