/**
 * -----------------------------------------------------------------------------
 * File: InstagramGrid.tsx
 *
 * Description:
 * Luxury editorial Instagram gallery grid.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Removed basic square grid appearance
 * • Added editorial magazine layout
 * • Improved spacing
 * • Added responsive composition
 * -----------------------------------------------------------------------------
 */

import { instagramPosts } from "./instagram.data";
import InstagramPost from "./InstagramPost";

export default function InstagramGrid() {
  return (
    <div
      className="
        grid

        w-full

        grid-cols-2

        gap-5

        md:grid-cols-4

        lg:gap-8
      "
    >
      {instagramPosts.map((post, index) => (
        <div
          key={post.id}
          className={`
            ${
              index === 0
                ? "md:row-span-2"
                : ""
            }

            ${
              index === 3
                ? "md:translate-y-8"
                : ""
            }
          `}
        >
          <InstagramPost post={post} />
        </div>
      ))}
    </div>
  );
}
