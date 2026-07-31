/**
 * -----------------------------------------------------------------------------
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
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";
import type { GalleryImage as GalleryImageType } from "./gallery.types";

interface Props {
  image: GalleryImageType;
}

export default function GalleryImage({ image }: Props) {
  return (
    <article
      className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-[32px]
        cursor-pointer
        border
        border-[#E8DDD8]
        bg-[#FCF8F3]
        shadow-[0_18px_50px_rgba(59,42,38,.08)]
      "
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width:768px) 100vw,
               (max-width:1200px) 50vw,
               33vw"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Luxury Overlay */}
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

      {/* Floating Border */}
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

      {/* Caption */}
      <div
        className="
          absolute
          left-8
          bottom-8
          right-8
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
            text-[11px]
            text-[#D8B4A0]
          "
        >
          Just Wax by Kim
        </p>

        <h3
          className="
            mt-2
            font-serif
            text-2xl
            text-white
          "
        >
          {image.title}
        </h3>
      </div>
    </article>
  );
}
