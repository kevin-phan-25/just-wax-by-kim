/**
 *
 * ---
 * File:
 * features/instagram/InstagramGrid.tsx
 *
 * Description:
 * Luxury editorial Instagram journey collage.
 *
 * Updates:
 * • Converted gallery grid into story collage
 * • Added editorial photo positioning
 * • Responsive mobile / iPad / desktop layout
 * • Creates memorable journey feeling
 *
 * ---
 *
 */

import {
  instagramPosts,
} from "./instagram.data";

import InstagramPost from "./InstagramPost";


export default function InstagramGrid() {

  return (
    <div
      className="
        relative

        mx-auto

        w-full

        max-w-6xl

        h-auto

        lg:h-[700px]
      "
    >

      {instagramPosts.map(
        (post, index) => (

          <div
            key={post.id}
            className={`
              relative

              mb-8

              lg:absolute

              ${
                index === 0
                  ? `
                    lg:left-0
                    lg:top-10
                    lg:w-[38%]
                  `
                  : ""
              }

              ${
                index === 1
                  ? `
                    lg:right-0
                    lg:top-0
                    lg:w-[32%]
                  `
                  : ""
              }

              ${
                index === 2
                  ? `
                    lg:left-[32%]
                    lg:top-[220px]
                    lg:w-[35%]
                    lg:z-20
                  `
                  : ""
              }

              ${
                index === 3
                  ? `
                    lg:right-[18%]
                    lg:bottom-0
                    lg:w-[30%]
                  `
                  : ""
              }
            `}
          >

            <InstagramPost
              post={post}
              index={index}
            />

          </div>

        )
      )}

    </div>
  );
}
