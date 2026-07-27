/**
 * -----------------------------------------------------------------------------
 * File: sitemap.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Search engine sitemap.
 *
 * -----------------------------------------------------------------------------
 */


import type {

MetadataRoute

}

from "next";


import {

siteConfig

}

from "@/config/site";



export default function sitemap():

MetadataRoute.Sitemap {


return [


{

url:

siteConfig.url,

lastModified:

new Date()

}


];


}
