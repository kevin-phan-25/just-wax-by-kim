/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/GalleryLightbox.tsx
 *
 * Description:
 * Luxury fullscreen gallery lightbox.
 *
 * Features:
 * • Fullscreen modal
 * • Smooth fade animation
 * • Previous / Next navigation
 * • Keyboard navigation
 * • Escape to close
 * • Click backdrop to close
 * -----------------------------------------------------------------------------
 */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { GalleryImage } from "./gallery.types";

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

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrevious, onNext]);

  if (!open) return null;

  const image = images[currentIndex];

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-md
        p-6
      "
    >
      {/* Backdrop */}
      <button
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0"
      />

      {/* Previous */}
      <button
        onClick={onPrevious}
        aria-label="Previous image"
        className="
          absolute
          left-8
          z-20
          h-14
          w-14
          rounded-full
          bg-white/10
          text-white
          text-2xl
          transition
          hover:bg-white/20
        "
      >
        ‹
      </button>

      {/* Image */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          h-[80vh]
        "
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="
            object-contain
            rounded-3xl
          "
        />

        <div
          className="
            absolute
            bottom-8
            left-8
            rounded-2xl
            bg-black/45
            px-6
            py-4
            backdrop-blur
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#D8B4A0]
            "
          >
            Just Wax by Kim
          </p>

          <h2
            className="
              mt-2
              font-serif
              text-3xl
              text-white
            "
          >
            {image.title}
          </h2>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="
          absolute
          right-8
          z-20
          h-14
          w-14
          rounded-full
          bg-white/10
          text-white
          text-2xl
          transition
          hover:bg-white/20
        "
      >
        ›
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="
          absolute
          top-8
          right-8
          z-20
          h-14
          w-14
          rounded-full
          bg-white/10
          text-white
          text-3xl
          transition
          hover:bg-white/20
        "
      >
        ×
      </button>

      {/* Counter */}
      <div
        className="
          absolute
          bottom-8
          right-8
          rounded-full
          bg-black/40
          px-5
          py-2
          text-sm
          tracking-[0.25em]
          text-white
          backdrop-blur
        "
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
