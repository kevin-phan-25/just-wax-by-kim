/**
 * -----------------------------------------------------------------------------
 * File: GalleryGrid.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Responsive gallery layout.
 *
 * Changes:
 * - July 27, 2026
 *   - Added gallery grid.
 *
 * -----------------------------------------------------------------------------
 */


import {

galleryImages

}

from "./gallery.data";


import GalleryImage from "./GalleryImage";



export default function GalleryGrid(){


return (

<div

className="
grid
gap-6
grid-cols-2
md:grid-cols-3
"

>


{

galleryImages.map((image)=>(


<GalleryImage

key={image.id}

image={image}

/>


))


}


</div>


);


}
