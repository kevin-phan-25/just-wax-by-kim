/**
 * --------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery grid.
 *
 * Changes:
 * • Converted for standalone Instagram page
 * • Increased gallery presence
 * • Added luxury editorial spacing
 * • Improved responsive layout
 *
 * --------------------------------------------------------------------------
 */


import {
  instagramPosts,
} from "./instagram.data";


import InstagramPost from "./InstagramPost";





export default function InstagramGrid() {


  return (

    <div
      className="
        grid

        grid-cols-1

        sm:grid-cols-2

        gap-6

        md:gap-8
      "
    >


      {
        instagramPosts
          .slice(0, 4)
          .map((post)=>(

            <InstagramPost

              key={post.id}

              post={post}

            />

          ))
      }


    </div>

  );


}
