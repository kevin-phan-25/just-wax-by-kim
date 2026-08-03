/**
 *
 * ---
 * File:
 * features/gallery/GalleryLightbox.tsx
 *
 * Description:
 * Luxury editorial gallery lightbox viewer.
 *
 * Updates:
 * • Refined editorial presentation
 * • Softer luxury overlay
 * • Simplified controls
 * • Removed unnecessary UI elements
 * • Improved mobile / iPad / desktop balance
 * • Preserved accessibility and navigation
 *
 *
 * ---
 *
 */

"use client";

import {
  useEffect,
} from "react";

import Image from "next/image";

import type {
  GalleryImage,
} from "./gallery.types";


interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}


export default function GalleryLightbox({
  images,
  currentIndex,
  open,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {


  useEffect(() => {

    if (!open) return;


    const handleKey = (
      event: KeyboardEvent
    ) => {

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

    };


    window.addEventListener(
      "keydown",
      handleKey
    );


    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    return () => {

      window.removeEventListener(
        "keydown",
        handleKey
      );


      document.body.style.overflow =
        previousOverflow;

    };


  }, [
    open,
    onClose,
    onPrevious,
    onNext,
  ]);



  if (!open) return null;



  const image =
    images[currentIndex];



  return (

    <div
      className="
        fixed

        inset-0

        z-[100]

        flex

        items-center

        justify-center

        bg-[#2D211D]/80

        backdrop-blur-sm

        px-4

        sm:px-8
      "

      onClick={onClose}
    >



      {/* PREVIOUS */}
      <button
        type="button"

        onClick={(event)=>{

          event.stopPropagation();

          onPrevious();

        }}

        className="
          absolute

          left-3

          sm:left-8

          flex

          h-11

          w-11

          items-center

          justify-center

          rounded-full

          bg-white/5

          text-3xl

          text-white

          transition

          hover:bg-white/15

          hover:text-[#D8B4A0]
        "

        aria-label="Previous image"
      >
        ‹
      </button>





      {/* IMAGE */}
      <div
        className="
          relative

          h-[78vh]

          sm:h-[84vh]

          w-[92vw]

          max-w-6xl
        "

        onClick={(event)=>
          event.stopPropagation()
        }
      >


        <Image
          src={image.src}

          alt={
            image.alt ??
            image.title
          }

          fill

          priority

          sizes="92vw"

          className="
            object-contain
          "
        />





        {/* EDITORIAL CAPTION */}
        <div
          className="
            absolute

            bottom-6

            left-6

            sm:bottom-10

            sm:left-10
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


          <h2
            className="
              mt-2

              font-serif

              text-2xl

              sm:text-3xl

              text-white
            "
          >
            {image.title}
          </h2>


        </div>


      </div>






      {/* NEXT */}
      <button
        type="button"

        onClick={(event)=>{

          event.stopPropagation();

          onNext();

        }}

        className="
          absolute

          right-3

          sm:right-8

          flex

          h-11

          w-11

          items-center

          justify-center

          rounded-full

          bg-white/5

          text-3xl

          text-white

          transition

          hover:bg-white/15

          hover:text-[#D8B4A0]
        "

        aria-label="Next image"
      >
        ›
      </button>







      {/* CLOSE */}
      <button
        type="button"

        onClick={onClose}

        className="
          absolute

          top-5

          right-5

          sm:top-8

          sm:right-8

          text-3xl

          text-white

          transition

          hover:text-[#D8B4A0]
        "

        aria-label="Close gallery"
      >
        ×
      </button>



    </div>

  );

}
