/**
 *
 * ---
 * File:
 * features/instagram/InstagramPost.tsx
 *
 * Description:
 * Luxury editorial Instagram image.
 *
 * Updates:
 * • Simplified luxury presentation
 * • Removed excessive hover effects
 * • Removed decorative frame
 * • Added subtle editorial image treatment
 * • Matched Gallery / About styling
 * • Responsive mobile / iPad / desktop
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

      aria-label={`View ${post.alt} on Instagram`}

      className="
        group

        relative

        block

        aspect-square

        w-full

        overflow-hidden

        rounded-[2rem]

        border

        border-[#E8DDD8]

        bg-[#FCF8F3]

        transition-all

        duration-500

        hover:-translate-y-0.5

        hover:shadow-[0_20px_50px_rgba(59,42,38,0.10)]
      "
    >


      {/* IMAGE */}
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

          group-hover:scale-[1.04]
        "
      />



      {/* SOFT EDITORIAL OVERLAY */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          bg-[#3B2A26]/10

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />



      {/* BRAND LABEL */}
      <div
        className="
          absolute

          bottom-5

          left-5

          opacity-0

          translate-y-2

          transition-all

          duration-500

          group-hover:translate-y-0

          group-hover:opacity-100
        "
      >

        <p
          className="
            uppercase

            tracking-[0.3em]

            text-[10px]

            text-white
          "
        >
          Just Wax by Kim
        </p>

      </div>


    </a>
  );
}
