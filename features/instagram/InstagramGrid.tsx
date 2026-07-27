/**
 * -----------------------------------------------------------------------------
 * File: InstagramGrid.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Instagram preview grid.
 *
 * -----------------------------------------------------------------------------
 */


import {

instagramPosts

}

from "./instagram.data";


import InstagramPost from "./InstagramPost";



export default function InstagramGrid(){


return (


<div

className="
grid
grid-cols-2
gap-5
md:grid-cols-4
"

>


{

instagramPosts.map(post=>(


<InstagramPost

key={post.id}

post={post}

/>


))


}


</div>


);


}
