/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Editorial Instagram image composition.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Even, refined gap system
 * • Subtle stagger only on large screens
 * • No aggressive row-spans that break rhythm
 * -----------------------------------------------------------------------------
 */
import { instagramPosts } from "./instagram.data";
import InstagramPost from "./InstagramPost";

export default function InstagramGrid() {
  return (
    <div
      className="
        grid w-full
        grid-cols-2 gap-3
        sm:gap-4
        md:grid-cols-4 md:gap-5
      "
    >
      {instagramPosts.map((post, index) => (
        <div
          key={post.id}
          className={
            index === 1 || index === 2
              ? "md:mt-8"
              : undefined
          }
        >
          <InstagramPost post={post} />
        </div>
      ))}
    </div>
  );
}
