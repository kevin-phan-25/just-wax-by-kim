/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Added controlled gallery width
 * • Prevented oversized images
 * • Maintained balanced 2x2 layout
 * -----------------------------------------------------------------------------
 */

import { instagramPosts } from "./instagram.data";
import InstagramPost from "./InstagramPost";

export default function InstagramGrid() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        md:gap-6
      "
    >
      {instagramPosts.slice(0, 4).map((post) => (
        <InstagramPost
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
