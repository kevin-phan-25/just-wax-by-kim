/**
 *
 * ---
 * File:
 * features/instagram/InstagramPost.tsx
 *
 * Description:
 * Editorial Instagram journey photo card.
 *
 * Updates:
 * • Added scrapbook inspired styling
 * • Removed gallery feeling
 * • Added personality and warmth
 * • Responsive luxury presentation
 *
 * ---
 *
 */

import Image from "next/image";

import type {
  InstagramPost as Post,
} from "./instagram.types";


interface Props {
  post: Post;
  index: number;
}


export default function InstagramPost({
  post,
  index,
}: Props) {


return (

  <a
    href={
      post.href ??
      "https://instagram.com/justwaxbykim"
    }

    target="_blank"

    rel="noopener noreferrer"

    className={`
      group

      block

      overflow-hidden

      rounded-[2rem]

      border

      border-[#E8DDD8]

      bg-white

      p-3

      shadow-[0_25px_60px_rgba(59,42,38,0.10)]

      transition-all

      duration-500

      hover:-translate-y-2

      ${
        index % 2 === 0
          ? "rotate-[-2deg]"
          : "rotate-[2deg]"
      }

      hover:rotate-0
    `}
  >

    <div
      className="
        relative

        aspect-square

        overflow-hidden

        rounded-[1.5rem]

        bg-[#FCF8F3]
      "
    >

      <Image

        src={post.image}

        alt={post.alt}

        fill

        sizes="
          (max-width:640px) 100vw,
          (max-width:1024px) 50vw,
          35vw
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

          from-[#3B2A26]/25

          via-transparent

          to-transparent

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />

    </div>



    <p
      className="
        mt-4

        text-center

        font-serif

        text-sm

        tracking-wide

        text-[#8C5A6B]
      "
    >
      Just Wax by Kim
    </p>


  </a>

);

}
