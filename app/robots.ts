/**
 * -----------------------------------------------------------------------------
 * File: robots.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Search crawler configuration.
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



export default function robots():

MetadataRoute.Robots {


return {


rules:{


userAgent:"*",


allow:"/"


},


sitemap:

`${siteConfig.url}/sitemap.xml`


};


}
