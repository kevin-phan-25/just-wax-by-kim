/**
 * ---
 * File:
 * features/gallery/GalleryImage.tsx
 *
 * Description:
 * Luxury gallery image card.
 *
 * Updated:
 * • Removed featured / masonry layout
 * • Uniform square cards
 * • Elegant hover animation
 * • Premium overlay
 * • Optimized for standalone Gallery page
 * • Responsive phone / iPad / desktop
 *
 * ---
 */

import Image from "next/image";

import type {
  GalleryImage as GalleryImageType,
} from "./gallery.types";


interface Props {
  image: GalleryImageType;
}


export default function GalleryImage({
  image,
}: Props) {

  return (
    <article
      className="
        relative

        aspect-square

        w-full

        overflow-hidden

        rounded-[28px]

        bg-[#F6E7E1]
      "
    >

      {/* IMAGE */}
      <Image
        src={image.src}
        alt={image.alt ?? image.title}
        fill
        quality={95}
        sizes="
          (max-width:640px) 100vw,
          (max-width:1024px) 50vw,
          33vw
        "
        className="
          object-cover

          transition-transform

          duration-700

          group-hover:scale-105
        "
      />



      {/* LUXURY OVERLAY */}
      <div
        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-[#2D211D]/80

          via-[#2D211D]/20

          to-transparent

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />



      {/* FLOATING BORDER */}
      <div
        className="
          absolute

          inset-5

          rounded-[24px]

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



      {/* CAPTION */}
      <div
        className="
          absolute

          left-8

          right-8

          bottom-8

          translate-y-6

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

            tracking-[0.35em]

            text-[10px]

            sm:text-[11px]

            text-[#D8B4A0]
          "
        >
          Just Wax by Kim
        </p>


        <h3
          className="
            mt-2

            font-serif

            text-xl

            sm:text-2xl

            leading-tight

            text-white
          "
        >
          {image.title}
        </h3>


      </div>


    </article>
  );
}
