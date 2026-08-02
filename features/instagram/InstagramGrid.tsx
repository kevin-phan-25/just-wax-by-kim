/**
 * ---
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery grid.
 *
 * Updates:
 * • Full width responsive layout
 * • Phone / iPad / desktop optimization
 * • Desktop four-column presentation
 * • Improved luxury spacing rhythm
 * • Removed restrictive sizing
 * • Matches Gallery grid system
 *
 * ---
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

        sm:gap-8

        lg:gap-10

        xl:gap-12
      "
    >

      {instagramPosts.map(
        (post) => (
          <InstagramPost
            key={post.id}
            post={post}
          />
        )
      )}

    </div>
  );

}
