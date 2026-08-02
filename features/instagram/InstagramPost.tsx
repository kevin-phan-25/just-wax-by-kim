/**
 * ---
 * File:
 * features/instagram/InstagramPost.tsx
 *
 * Description:
 * Luxury Instagram gallery image card.
 *
 * Updates:
 * • Responsive Instagram presentation
 * • Premium editorial image treatment
 * • Preserved square aspect ratio
 * • Improved hover interaction
 * • Optimized Next Image rendering
 * • Matches Gallery styling system
 * • Phone / iPad / desktop ready
 *
 * ---
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

      aria-label={
        `View ${post.alt} on Instagram`
      }

      className="
        group
        relative

        block

        aspect-square

        w-full

        overflow-hidden

        rounded-[28px]
        md:rounded-[32px]

        border
        border-[#E8DDD8]

        bg-[#FCF8F3]

        transition-all
        duration-500

        hover:-translate-y-1

        hover:shadow-[0_24px_60px_rgba(59,42,38,0.12)]
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

          group-hover:scale-[1.05]
        "
      />



      {/* SOFT LUXURY OVERLAY */}
      <div
        aria-hidden
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



      {/* INNER FRAME */}
      <div
        aria-hidden
        className="
          absolute
          inset-4

          rounded-[22px]

          border
          border-white/40

          opacity-0

          scale-95

          transition-all
          duration-500

          group-hover:scale-100

          group-hover:opacity-100
        "
      />



      {/* INSTAGRAM LABEL */}
      <div
        className="
          absolute

          bottom-6
          left-6
          right-6

          translate-y-4

          opacity-0

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

            text-[#D8B4A0]
          "
        >
          Just Wax by Kim
        </p>

      </div>


    </a>
  );
}
