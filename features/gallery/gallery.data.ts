/**
 *
 * ---
 * File:
 * features/gallery/gallery.data.ts
 *
 * Description:
 * Luxury editorial gallery collection.
 *
 * Updates:
 * • Refined editorial storytelling
 * • Added editorial layouts
 * • Created storytelling flow
 * • Matches "A Space Designed For You"
 * • Improved luxury brand voice
 * • Differentiates from Instagram
 *
 * ---
 *
 */

import type { GalleryImage } from "./gallery.types";

export const galleryImages: GalleryImage[] = [
  {
    id: "studio-1",
    src: "/gallery/studio-1.webp",
    alt: "Luxury waxing studio interior",
    title: "A Space Designed For You",
    layout: "hero",
  },

  {
    id: "studio-2",
    src: "/gallery/studio-2.webp",
    alt: "Private waxing treatment suite",
    title: "Your Private Retreat",
    layout: "small",
  },

  {
    id: "studio-3",
    src: "/gallery/studio-3.webp",
    alt: "Luxury studio décor",
    title: "Every Detail Matters",
    layout: "small",
  },

  {
    id: "wax-room",
    src: "/gallery/wax-room.webp",
    alt: "Professional waxing room",
    title: "Comfort Meets Care",
    layout: "wide",
  },

  {
    id: "luxury-detail",
    src: "/gallery/luxury-detail.webp",
    alt: "Premium waxing products",
    title: "Thoughtfully Selected Essentials",
    layout: "small",
  },

  {
    id: "kim-work",
    src: "/gallery/kim-work.webp",
    alt: "Kim providing professional waxing service",
    title: "Personalized Care",
    layout: "small",
  },

  {
    id: "detail-1",
    src: "/gallery/detail-1.webp",
    alt: "Luxury studio details",
    title: "Created With Intention",
    layout: "small",
  },

  {
    id: "detail-2",
    src: "/gallery/detail-2.webp",
    alt: "Professional waxing supplies",
    title: "Quality You Can Feel",
    layout: "small",
  },

  {
    id: "detail-3",
    src: "/gallery/detail-3.webp",
    alt: "Relaxing studio atmosphere",
    title: "A Calm Experience Awaits",
    layout: "wide",
  },
];
