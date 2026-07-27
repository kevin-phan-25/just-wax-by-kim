/**
 * -----------------------------------------------------------------------------
 * File: InstagramPost.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Instagram image card.
 *
 * -----------------------------------------------------------------------------
 */


import Image from "next/image";


import type {

InstagramPost as Post

}

from "./instagram.types";



export default function InstagramPost({

post

}:{

post:Post

}){


return (

<div

className="
overflow-hidden
rounded-3xl
"

>


<Image

src={post.image}

alt={post.alt}

width={500}

height={500}

className="
aspect-square
object-cover
transition
duration-500
hover:scale-105
"

/>


</div>

);


}
