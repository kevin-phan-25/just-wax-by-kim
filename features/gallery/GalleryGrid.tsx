/**
 *
 * ---
 * File:
 * features/gallery/GalleryGrid.tsx
 *
 * Description:
 * Luxury editorial gallery composition.
 *
 * Updates:
 * • Replaced uniform grid
 * • Added asymmetric magazine layout
 * • Hero / detail / supporting image rhythm
 * • Responsive mobile / iPad / desktop
 * • Preserved lightbox support
 *
 * ---
 *
 */

"use client";

import { useState } from "react";

import { galleryImages } from "./gallery.data";

import GalleryImage from "./GalleryImage";

import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [open, setOpen] = useState(false);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const previous = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  const next = () =>
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          sm:gap-8
          xl:gap-10
        "
      >
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openImage(index)}
            className={`
              group
              relative
              overflow-hidden
              rounded-[32px]
              focus:outline-none
              focus:ring-2
              focus:ring-[#8C5A6B]

              ${
                image.layout === "hero"
                  ? "md:col-span-2 xl:col-span-4 aspect-[16/8]"
                  : image.layout === "wide"
                  ? "md:col-span-2 xl:col-span-4 aspect-[16/7]"
                  : "aspect-square"
              }
            `}
          >
            <GalleryImage image={image} />
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={galleryImages}
        currentIndex={currentIndex}
        open={open}
        onClose={() => setOpen(false)}
        onPrevious={previous}
        onNext={next}
      />
    </>
  );
}
