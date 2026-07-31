/**
 * ---------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramPost.tsx
 *
 * Description:
 * Luxury Instagram image card.
 *
 * Changes:
 * • Optimized for 4x4 layout
 * • Preserved square editorial styling
 * • Full image rendering
 * • Premium hover treatment
 * ---------------------------------------------------------------------------
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

        rounded-[28px]

        border

        border-[#E8DDD8]

        bg-[#F6E7E1]
      "

    >


      <Image

        src={post.image}

        alt={post.alt}

        fill

        sizes="
          (max-width:640px) 100vw,
          (max-width:1024px) 50vw,
          25vw
        "

        className="
          object-cover

          transition-transform

          duration-700

          ease-out

          group-hover:scale-105
        "

      />



      {/* Luxury overlay */}

      <div

        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-[#3B2A26]/35

          via-transparent

          to-transparent

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "

      />



      {/* Border highlight */}

      <div

        className="
          absolute

          inset-0

          rounded-[28px]

          ring-1

          ring-inset

          ring-white/30

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "

      />


    </a>

  );

}
