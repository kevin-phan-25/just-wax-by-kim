/**
 * -----------------------------------------------------------------------------
 * File: seo.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Structured data helpers.
 *
 * Changes:
 * - July 27, 2026
 *   - Added LocalBusiness schema.
 *
 * -----------------------------------------------------------------------------
 */


import {

siteConfig

}

from "@/config/site";



export function businessSchema(){


return {


"@context":

"https://schema.org",



"@type":

"BeautySalon",



name:

siteConfig.name,



description:

siteConfig.description,



url:

siteConfig.url,



telephone:

siteConfig.phone,



address:{


"@type":

"PostalAddress",


addressRegion:

"VA",


addressCountry:

"US"


},



sameAs:

siteConfig.socials



};


}
