/**
 * -----------------------------------------------------------------------------
 * File: metadata.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Next.js metadata generator.
 *
 * Changes:
 * - July 27, 2026
 *   - Added production metadata.
 *
 * -----------------------------------------------------------------------------
 */


import type {

Metadata

}

from "next";


import {

siteConfig

}

from "@/config/site";


import {

seoConfig

}

from "@/config/seo";



export function createMetadata(): Metadata {


return {


title:

siteConfig.title,


description:

siteConfig.description,


keywords:

seoConfig.keywords,



metadataBase:

new URL(siteConfig.url),



openGraph:{


title:

siteConfig.title,


description:

siteConfig.description,


url:

siteConfig.url,


siteName:

siteConfig.name,


images:[

{

url:"/og/og-image.jpg",

width:1200,

height:630,

alt:siteConfig.name

}

],


type:"website"


},



twitter:{


card:"summary_large_image",


title:

siteConfig.title,


description:

siteConfig.description,


images:[

"/og/og-image.jpg"

]


},



robots:{


index:true,


follow:true


}



};


}
