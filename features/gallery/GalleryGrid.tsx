/**
 * -----------------------------------------------------------------------------
 * File:
 * features/gallery/GalleryGrid.tsx
 *
 * Description:
 * Luxury responsive gallery grid.
 *
 * Updated:
 * • Removed editorial masonry layout
 * • Uniform luxury grid
 * • Better spacing
 * • Responsive columns
 * • Ready for lightbox integration
 * -----------------------------------------------------------------------------
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
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openImage(index)}
            className="cursor-pointer"
          >
            <GalleryImage image={image} />
          </div>
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
