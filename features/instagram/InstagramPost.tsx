/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/InstagramPost.tsx
 *
 * Description:
 * Single studio image — square tile for 2×2 grid.
 * -----------------------------------------------------------------------------
 */
import Image from "next/image";
import type { InstagramPost as Post } from "./instagram.types";

interface Props {
  post: Post;
}

export default function InstagramPost({ post }: Props) {
  return (
    <a
      href={post.href ?? "https://instagram.com/justwaxbykim"}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative block overflow-hidden
        aspect-square w-full
        rounded-[20px] md:rounded-[24px]
        border border-[#E8DDD8]
        bg-[#F6E7E1]
        shadow-[0_12px_40px_rgba(59,42,38,0.05)]
        transition-all duration-500
        hover:border-[#D4A9B6]
        hover:shadow-[0_20px_50px_rgba(59,42,38,0.09)]
      "
    >
      <Image
        src={post.image}
        alt={post.alt}
        fill
        sizes="(max-width: 768px) 45vw, 280px"
        className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-[#3B2A26]/20 via-transparent to-transparent
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </a>
  );
}
