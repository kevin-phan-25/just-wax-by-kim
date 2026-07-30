/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/gallery.data.ts
 *
 * Description:
 * Gallery image collection.
 * -----------------------------------------------------------------------------
 */

import type { GalleryImage } from "./gallery.types";

export const galleryImages: GalleryImage[] = [
  {
    id: "studio-1",
    src: "/gallery/studio-1.webp",
    alt: "Luxury waxing studio interior",
    title: "A Welcoming Retreat",
  },

  {
    id: "studio-2",
    src: "/gallery/studio-2.webp",
    alt: "Private waxing treatment suite",
    title: "Private Treatment Suite",
  },

  {
    id: "studio-3",
    src: "/gallery/studio-3.webp",
    alt: "Luxury studio décor",
    title: "Thoughtfully Designed",
  },

  {
    id: "wax-room",
    src: "/gallery/wax-room.webp",
    alt: "Professional waxing room",
    title: "Exceptional Comfort",
  },

  {
    id: "luxury-detail",
    src: "/gallery/luxury-detail.webp",
    alt: "Premium waxing products",
    title: "Professional Products",
  },

  {
    id: "kim-work",
    src: "/gallery/kim-work.webp",
    alt: "Kim providing waxing services",
    title: "Expert Care",
  },
];
