/**
 * -----------------------------------------------------------------------------
 * File: GalleryImage.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Individual gallery image component.
 *
 * Changes:
 * - July 27, 2026
 *   - Added optimized Next Image component.
 *
 * -----------------------------------------------------------------------------
 */


import Image from "next/image";


import type {

GalleryImage as GalleryImageType

}

from "./gallery.types";



interface Props {


image: GalleryImageType;


}



export default function GalleryImage({

image

}: Props){



return (


<div

className="
group
relative
overflow-hidden
rounded-3xl
"

>



<Image

src={image.src}

alt={image.alt}

width={800}

height={1000}

className="
h-full
w-full
object-cover
transition
duration-500
group-hover:scale-105
"

/>



<div

className="
absolute
bottom-0
left-0
right-0
bg-black/40
p-5
opacity-0
transition
group-hover:opacity-100
"

>


<p className="
text-white
">

{image.title}

</p>


</div>


</div>


);


}
