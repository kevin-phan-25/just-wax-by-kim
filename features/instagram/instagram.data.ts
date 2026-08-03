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
 * • Prepared for future Instagram feed expansion
 * • Supports Follow The Journey collage layout
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
      "/instagram/kim-preparing.webp",

    alt:
      "Kim preparing her luxury waxing studio experience",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "2",

    image:
      "/instagram/studio-details.webp",

    alt:
      "Beautiful studio details and thoughtful touches at Just Wax by Kim",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "3",

    image:
      "/instagram/self-care-moment.webp",

    alt:
      "A relaxing self-care moment created through personalized waxing services",

    href:
      "https://instagram.com/justwaxbykim",
  },


  {
    id: "4",

    image:
      "/instagram/business-journey.webp",

    alt:
      "Behind the scenes moments from building Just Wax by Kim",

    href:
      "https://instagram.com/justwaxbykim",
  },

];
