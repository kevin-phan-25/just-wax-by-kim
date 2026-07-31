/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery — full-width 2×2.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Removed max-width limits so grid uses full section width
 * • Kept 2×2 only (no 4-across row)
 * -----------------------------------------------------------------------------
 */
import { instagramPosts } from "./instagram.data";
import InstagramPost from "./InstagramPost";

export default function InstagramGrid() {
  return (
    <div
      className="
        grid w-full
        grid-cols-2
        gap-4
        sm:gap-5
        md:gap-6
        lg:gap-8
      "
    >
      {instagramPosts.slice(0, 4).map((post) => (
        <InstagramPost key={post.id} post={post} />
      ))}
    </div>
  );
}
