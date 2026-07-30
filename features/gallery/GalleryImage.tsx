/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/GalleryImage.tsx
 *
 * Description:
 * Luxury editorial gallery image.
 *
 * Changes:
 * • Editorial sizing
 * • Hover animation
 * • Luxury gradient overlay
 * • Floating title
 * • Rounded luxury cards
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";
import type { GalleryImage as GalleryImageType } from "./gallery.types";

interface Props {
  image: GalleryImageType;
  featured?: boolean;
}

export default function GalleryImage({
  image,
  featured = false,
}: Props) {
  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[34px]
        shadow-[0_18px_50px_rgba(59,42,38,.08)]
        cursor-pointer
        ${
          featured
            ? "row-span-2"
            : "row-span-1"
        }
      `}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        className="
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Editorial Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#2D211D]/80
          via-[#2D211D]/10
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
          rounded-[28px]
          border
          border-white/40
          opacity-0
          transition-all
          duration-500
          scale-95
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
          translate-y-8
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
