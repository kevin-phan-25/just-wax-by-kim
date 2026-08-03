"use client";

import {
  useState,
} from "react";

import {
  galleryImages,
} from "./gallery.data";

import GalleryImage from "./GalleryImage";

import GalleryLightbox from "./GalleryLightbox";


export default function GalleryGrid() {


const [
 currentIndex,
 setCurrentIndex
] = useState(0);



const [
 open,
 setOpen
] = useState(false);



const openImage = (
index:number
)=>{

setCurrentIndex(index);

setOpen(true);

};



const previous = ()=>{

setCurrentIndex(
(prev)=>
prev === 0
?
galleryImages.length - 1
:
prev - 1
);

};



const next = ()=>{

setCurrentIndex(
(prev)=>
prev === galleryImages.length - 1
?
0
:
prev + 1
);

};



const hero =
galleryImages[0];


const topRow =
galleryImages.slice(1,3);


const wide =
galleryImages[3];


const bottomRow =
galleryImages.slice(4,6);



return (

<>


<div
className="
space-y-8

sm:space-y-10

md:space-y-12
"
>


{/* HERO */}

<button

type="button"

onClick={()=>
openImage(0)
}

className="
group

relative

block

w-full

aspect-[16/8]

overflow-hidden

rounded-[32px]
"

>

<GalleryImage
image={hero}
/>

</button>





{/* SMALL GRID */}

<div

className="
grid

grid-cols-1

md:grid-cols-2

gap-8
"

>

{
topRow.map(
(image,index)=>(

<button

key={image.id}

type="button"

onClick={()=>
openImage(index+1)
}

className="
group

relative

aspect-square

overflow-hidden

rounded-[32px]
"

>

<GalleryImage
image={image}
/>


</button>

)
)
}


</div>






{/* WIDE FEATURE */}

<button

type="button"

onClick={()=>
openImage(3)
}

className="
group

relative

block

w-full

aspect-[16/7]

overflow-hidden

rounded-[32px]
"

>

<GalleryImage
image={wide}
/>

</button>







{/* BOTTOM GRID */}

<div

className="
grid

grid-cols-1

md:grid-cols-2

gap-8

"

>

{
bottomRow.map(
(image,index)=>(


<button

key={image.id}

type="button"

onClick={()=>
openImage(index+4)
}

className="
group

relative

aspect-square

overflow-hidden

rounded-[32px]
"

>

<GalleryImage
image={image}
/>

</button>


)

)
}


</div>


</div>





<GalleryLightbox

images={galleryImages}

currentIndex={currentIndex}

open={open}

onClose={()=>
setOpen(false)
}

onPrevious={previous}

onNext={next}

/>


</>

);

}
