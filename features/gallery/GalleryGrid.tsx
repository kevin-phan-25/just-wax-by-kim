/**
 *
 * ---
 * File:
 * features/gallery/GalleryGrid.tsx
 *
 * Description:
 * Luxury editorial gallery layout.
 *
 * Updates:
 * • Removed social media card styling
 * • Added editorial spacing
 * • Softer luxury presentation
 * • Responsive mobile / iPad / desktop
 * • Preserved lightbox functionality
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



  const openImage = (index:number) => {
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

      <div
        className="
          grid

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          gap-6

          sm:gap-8

          lg:gap-10
        "
      >

        {galleryImages.map(
          (image,index)=>(

            <button
              key={image.id}

              type="button"

              onClick={() =>
                openImage(index)
              }

              className="
                group

                overflow-hidden

                text-left

                focus:outline-none

                focus:ring-2

                focus:ring-[#8C5A6B]
              "
              aria-label={
                `Open gallery image ${index + 1}`
              }
            >

              <GalleryImage
                image={image}
              />

            </button>

          )
        )}

      </div>



      <GalleryLightbox
        images={galleryImages}

        currentIndex={currentIndex}

        open={open}

        onClose={() =>
          setOpen(false)
        }

        onPrevious={previous}

        onNext={next}
      />

    </>
  );
}
