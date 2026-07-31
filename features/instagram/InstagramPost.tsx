/**
 * --------------------------------------------------------------------------
 * File:
 * features/instagram/InstagramPost.tsx
 *
 * Description:
 * Luxury Instagram gallery image card.
 *
 * Changes:
 * • Added Next Image rendering
 * • Added premium hover interaction
 * • Added editorial image treatment
 * • Improved standalone Instagram presentation
 *
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

    rounded-[32px]

    border

    border-[#E8DDD8]

    bg-[#F6E7E1]

  "

>


  {/* IMAGE */}

  <Image

    src={post.image}

    alt={post.alt}

    fill

    sizes="

      (max-width:768px) 100vw,

      50vw

    "

    className="

      object-cover

      transition-transform

      duration-700

      ease-out

      group-hover:scale-105

    "

  />





  {/* Luxury Overlay */}

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





  {/* Hover Accent */}

  <div

    className="

      absolute

      inset-0

      rounded-[32px]

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
