/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram gallery — centered 2×2.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Forced 2×2 grid (no 4-across row)
 * • Removed width restrictions / stagger offsets
 * • Centered in the section
 * -----------------------------------------------------------------------------
 */
import { instagramPosts } from "./instagram.data";
import InstagramPost from "./InstagramPost";

export default function InstagramGrid() {
  return (
    <div className="mx-auto flex w-full justify-center">
      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
          w-full
          max-w-xl
          md:max-w-2xl
        "
      >
        {instagramPosts.slice(0, 4).map((post) => (
          <InstagramPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
