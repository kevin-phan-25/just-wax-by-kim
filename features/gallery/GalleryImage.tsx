/**
 *
 * ---
 * File:
 * features/gallery/GalleryImage.tsx
 *
 * Description:
 * Luxury editorial gallery image card.
 *
 * Updates:
 * • Supports hero / small / wide layouts
 * • Premium image treatment
 * • Editorial captions
 * • Simplified luxury overlay
 * • Responsive typography
 * • Luxury hover interaction
 *
 * ---
 *
 */

import Image from "next/image";

import type { GalleryImage as GalleryImageType } from "./gallery.types";

interface Props {
  image: GalleryImageType;
}

export default function GalleryImage({ image }: Props) {
  return (
    <div
      className="
        group
        relative

        h-full
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

          ease-out

          group-hover:scale-[1.03]
        "
      />

      {/* SOFT EDITORIAL OVERLAY */}
      <div
        aria-hidden
        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-[#2D211D]/60

          via-[#2D211D]/10

          to-transparent

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />

      {/* SUBTLE LUXURY FRAME */}
      <div
        aria-hidden
        className="
          absolute

          inset-5

          rounded-[24px]

          border

          border-white/35

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

          left-6

          right-6

          bottom-6

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

            tracking-[0.35em]

            text-[10px]

            sm:text-xs

            text-[#D8B4A0]
          "
        >
          Just Wax by Kim
        </p>

        <h3
          className="
            mt-2

            font-[var(--font-playfair)]

            text-xl

            sm:text-2xl

            lg:text-3xl

            leading-tight

            text-white
          "
        >
          {image.title}
        </h3>
      </div>
    </div>
  );
}
