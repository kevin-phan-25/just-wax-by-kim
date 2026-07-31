/**
 * -----------------------------------------------------------------------------
 * File: InstagramPost.tsx
 *
 * Description:
 * Individual luxury Instagram gallery image.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Added editorial image treatment
 * • Improved hover interaction
 * • Added luxury shadow
 * • Removed generic Instagram tile appearance
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";

import type {
  InstagramPost as Post,
} from "./instagram.types";


interface Props {
  post: Post;
}


export default function InstagramPost({
  post,
}: Props) {
  return (
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-[28px]

        bg-[#F6E7E1]

        shadow-[0_20px_60px_rgba(59,42,38,0.08)]

        transition-all
        duration-500

        hover:-translate-y-2

        hover:shadow-[0_30px_80px_rgba(59,42,38,0.14)]
      "
    >

      <Image
        src={post.image}
        alt={post.alt}

        width={800}
        height={800}

        className="
          aspect-square

          h-full
          w-full

          object-cover

          transition-transform
          duration-700

          group-hover:scale-110
        "
      />


      {/* Luxury hover overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-[#3B2A26]/30
          via-transparent
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

    </div>
  );
}
