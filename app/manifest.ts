/**
 * -----------------------------------------------------------------------------
 * File: manifest.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Web app manifest configuration.
 *
 * Provides metadata for browsers and mobile devices.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {

  return {

    name:
      "Just Wax by Kim",

    short_name:
      "Just Wax by Kim",

    description:
      "Luxury waxing services designed around confidence, comfort, and beauty.",

    start_url:
      "/",

    display:
      "standalone",

    background_color:
      "#FAF8F5",

    theme_color:
      "#C9A227",

    icons: [

      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },

    ],

  };

}
