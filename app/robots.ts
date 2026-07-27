/**
 * -----------------------------------------------------------------------------
 * File: robots.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Search engine crawler rules.
 *
 * Controls indexing behavior for SEO.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import type { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {

  return {

    rules: {

      userAgent:
        "*",

      allow:
        "/",

    },


    sitemap:
      "https://justwaxbykim.com/sitemap.xml",

  };

}
