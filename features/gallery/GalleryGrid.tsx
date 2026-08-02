/**
 * ---
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
 * • Improved hover interaction
 * • Better mobile / iPad / desktop balance
 * • Ready for lightbox integration
 *
 * ---
 */

"use client";

import {
  useState,
} from "react";

import {
  galleryImages,
} from "./gallery.data";

import GalleryImage from "./GalleryImage";

import GalleryLightbox from "./GalleryLightbox";


export default function GalleryGrid() {

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);


  const [
    open,
    setOpen,
  ] = useState(false);



  const openImage = (
    index:number
  ) => {

    setCurrentIndex(index);

    setOpen(true);

  };



  const previous = () =>
    setCurrentIndex((prev)=>
      prev === 0
        ? galleryImages.length - 1
        : prev - 1
    );



  const next = () =>
    setCurrentIndex((prev)=>
      prev === galleryImages.length - 1
        ? 0
        : prev + 1
    );



  return (
    <>

      {/* GALLERY GRID */}
      <div
        className="
          grid

          w-full

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4

          gap-6

          md:gap-8

          xl:gap-10
        "
      >

        {galleryImages.map(
          (
            image,
            index
          ) => (

            <button
              key={image.id}

              type="button"

              onClick={() =>
                openImage(index)
              }

              className="
                group

                w-full

                overflow-hidden

                rounded-[28px]

                text-left

                transition-transform

                duration-500

                hover:-translate-y-1

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



      {/* LIGHTBOX */}
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
