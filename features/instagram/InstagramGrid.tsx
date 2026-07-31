/**
 * -----------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery grid.
 *
 * Changes:
 * • Converted to 4x4 luxury grid
 * • Increased gallery presence
 * • Full-width standalone layout
 * • Improved responsive behavior
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

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-4

        gap-6

        md:gap-8

        w-full
      "
    >

      {
        instagramPosts
          .slice(0, 16)
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
