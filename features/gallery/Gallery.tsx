/**
 * -----------------------------------------------------------------------------
 * File: Gallery.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main gallery luxury section.
 *
 * Changes:
 * - July 27, 2026
 *   - Added gallery experience.
 *
 * -----------------------------------------------------------------------------
 */


import {

GALLERY_CONFIG

}

from "./gallery.constants";


import GalleryGrid from "./GalleryGrid";



export default function Gallery(){



return (


<section

className="
bg-brand-white
px-6
py-24
"

>


<div

className="
mx-auto
max-w-7xl
"

>



<div

className="
text-center
"

>


<p

className="
text-sm
uppercase
tracking-[0.35em]
text-brand-champagne
"

>

{GALLERY_CONFIG.eyebrow}

</p>



<h2

className="
mt-5
text-4xl
md:text-5xl
"

>

{GALLERY_CONFIG.title}

</h2>



<p

className="
mx-auto
mt-6
max-w-2xl
text-brand-taupe
"

>

{GALLERY_CONFIG.description}

</p>


</div>




<div

className="
mt-16
"

>

<GalleryGrid />

</div>



</div>


</section>


);


}
