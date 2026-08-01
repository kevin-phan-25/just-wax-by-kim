/**
 * -----------------------------------------------------------------------------
 * File:
 * features/gallery/Gallery.tsx
 *
 * Description:
 * Standalone luxury Gallery page.
 *
 * Updated:
 * • Matched ServicePricingSection spacing system
 * • Added navbar transition spacer
 * • Removed width restrictions
 * • Removed divider accents
 * • Preserved centered editorial styling
 * • Full-width gallery presentation
 *
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
        w-full
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.35),transparent_65%)]
        "
      />

      {/* Navbar transition spacer */}
      <div
        className="
          h-[216px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          text-center
        "
      >
        {/* HEADER */}
        <header
          className="
            w-full
            mb-16
          "
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-[#8C5A6B]
            "
          >
            {GALLERY_CONFIG.eyebrow}
          </p>

          <h1
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
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            {GALLERY_CONFIG.description}
          </p>
        </header>

        {/* GALLERY GRID */}
        <div
          className="
            w-full
          "
        >
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
