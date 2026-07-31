/**
 * -----------------------------------------------------------------------------
 * File:
 * features/gallery/GalleryGrid.tsx
 *
 * Description:
 * Luxury responsive gallery grid.
 *
 * Updated:
 * • Removed width restrictions
 * • Full-width editorial gallery layout
 * • Uniform luxury grid
 * • Responsive columns
 * • Ready for lightbox integration
 *
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
      prev === 0
        ? galleryImages.length - 1
        : prev - 1
    );


  const next = () =>
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1
        ? 0
        : prev + 1
    );


  return (
    <>

      {/* FULL WIDTH GALLERY GRID */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
        "
      >

        {galleryImages.map((image, index) => (

          <div
            key={image.id}
            onClick={() => openImage(index)}
            className="
              cursor-pointer
              w-full
            "
          >

            <GalleryImage
              image={image}
            />

          </div>

        ))}

      </div>



      {/* LIGHTBOX */}
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
