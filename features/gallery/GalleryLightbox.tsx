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

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
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
        z-[100]
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="
          absolute
          left-6
          text-5xl
          text-white
          hover:text-[#D8B4A0]
          transition
        "
      >
        ‹
      </button>

      <div
        className="
          relative
          h-[82vh]
          w-[90vw]
          max-w-6xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-contain"
        />

        <div
          className="
            absolute
            bottom-6
            left-6
            rounded-2xl
            bg-black/40
            px-6
            py-4
            backdrop-blur
          "
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
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

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
          absolute
          right-6
          text-5xl
          text-white
          hover:text-[#D8B4A0]
          transition
        "
      >
        ›
      </button>

      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-6
          text-5xl
          text-white
          hover:text-[#D8B4A0]
          transition
        "
      >
        ×
      </button>

      <div
        className="
          absolute
          bottom-6
          right-6
          rounded-full
          bg-black/40
          px-5
          py-2
          text-sm
          text-white
          backdrop-blur
        "
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
