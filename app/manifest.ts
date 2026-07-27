/**
 * -----------------------------------------------------------------------------
 * File: manifest.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Progressive web app metadata.
 *
 * -----------------------------------------------------------------------------
 */


import type {

MetadataRoute

}

from "next";



export default function manifest():

MetadataRoute.Manifest {


return {


name:

"Just Wax by Kim",


short_name:

"Just Wax Kim",


description:

"Luxury waxing experience",


start_url:"/",


display:"standalone",


background_color:"#ffffff",


theme_color:"#C9A227"


};


}
