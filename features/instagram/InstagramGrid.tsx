/**
 * ---------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Luxury Instagram editorial grid.
 *
 * Changes:
 * • Converted to 4x4 desktop layout
 * • Removed width restrictions
 * • Full gallery presence
 * • Responsive mobile/tablet behavior
 * ---------------------------------------------------------------------------
 */

import {
  instagramPosts,
} from "./instagram.data";

import InstagramPost from "./InstagramPost";


export default function InstagramGrid() {

  return (

    <div
      className="
        w-full

        grid

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-4

        gap-5

        md:gap-6
      "
    >

      {
        instagramPosts
          .slice(0,16)
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
