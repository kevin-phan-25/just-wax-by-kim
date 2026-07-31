/**
 * --------------------------------------------------------------------------
 * File: features/instagram/InstagramPost.tsx
 *
 * Description:
 * Luxury Instagram gallery image card.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Fixed invalid return statement
 * • Restored React component wrapper
 * • Reduced oversized gallery appearance
 * • Centered visual balance
 * • Added luxury hover treatment
 * --------------------------------------------------------------------------
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
    <a
      href={
        post.href ??
        "https://instagram.com/justwaxbykim"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block
        aspect-square
        overflow-hidden
        rounded-[24px]
        border
        border-[#E8DDD8]
        bg-[#F6E7E1]
        transition-all
        duration-500
        hover:border-[#D4A9B6]
      "
    >
      <Image
        src={post.image}
        alt={post.alt}
        fill
        sizes="
          (max-width: 768px) 50vw,
          25vw
        "
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#3B2A26]/20
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </a>
  );
}
