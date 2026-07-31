/**
 * -----------------------------------------------------------------------------
 * File:
 * features/gallery/Gallery.tsx
 *
 * Description:
 * Standalone luxury Gallery page.
 *
 * Changes:
 * • Added navbar transition spacer
 * • Matches Services page architecture
 * • Preserved editorial layout
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
        overflow-hidden
        bg-[#FCF8F3]
      "
    >

      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
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

          text-center
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-4xl
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

              max-w-3xl

              text-lg

              leading-9

              text-[#8C7468]
            "
          >
            {GALLERY_CONFIG.description}
          </p>


        </header>



        {/* Gallery */}
        <div
          className="
            mx-auto
            mt-20

            max-w-7xl
            px-6
            pb-24
          "
        >
          <GalleryGrid />
        </div>


      </div>


    </section>
  );
}
