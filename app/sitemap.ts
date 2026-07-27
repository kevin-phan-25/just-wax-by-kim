/**
 * -----------------------------------------------------------------------------
 * File: sitemap.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Generates sitemap for search engines.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


return [

  {

    url:
      "https://justwaxbykim.com",

    lastModified:
      new Date(),

  },

];


}
