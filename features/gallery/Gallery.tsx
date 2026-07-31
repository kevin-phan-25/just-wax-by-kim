/**
 * -----------------------------------------------------------------------------
 * File:
 * features/gallery/Gallery.tsx
 *
 * Description:
 * Standalone luxury Gallery page.
 *
 * Updated:
 * • Restored editorial sizing
 * • Centered typography
 * • Removed unwanted page width restriction
 * • Preserved luxury spacing rhythm
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
        min-h-screen
        w-full
        overflow-hidden
        bg-[#FCF8F3]
        py-32
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



      {/* PAGE CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-4xl
            text-center
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
              text-center
              text-lg
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
            w-full
          "
        >
          <GalleryGrid />
        </div>



      </div>


    </section>

  );
}
