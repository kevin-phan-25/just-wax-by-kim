/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/Gallery.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury editorial gallery section.
 *
 * Changes:
 * - Increased luxury spacing
 * - Refined typography
 * - Added elegant divider
 * - Wider content layout
 * - Improved visual rhythm
 * -----------------------------------------------------------------------------
 */

import { GALLERY_CONFIG } from "./gallery.constants";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        bg-[#FCF8F3]
        py-32
      "
    >
      <div
        className="
          container-luxury
        "
      >
        {/* SECTION HEADER */}
        <header
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              font-semibold
              text-[#8C5A6B]
            "
          >
            {GALLERY_CONFIG.eyebrow}
          </span>

          <h2
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            {GALLERY_CONFIG.title}
          </h2>

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-base
              md:text-lg
              leading-9
              text-[#8C7468]
            "
          >
            {GALLERY_CONFIG.description}
          </p>
        </header>

        {/* GALLERY */}
        <div
          className="
            mt-20
          "
        >
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
