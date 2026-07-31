/**
 * -----------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery grid.
 *
 * Changes:
 * • Full width layout
 * • Desktop 4 column presentation
 * • Removed restrictive sizing
 *
 * -----------------------------------------------------------------------------
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
        w-full
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        md:gap-8
      "

    >

      {
        instagramPosts.map(
          (post)=>(

            <InstagramPost

              key={post.id}

              post={post}

            />

          )
        )
      }

    </div>

  );

}
