/**
 *
 * ---
 * File:
 * features/gallery/Gallery.tsx
 *
 * Description:
 * Standalone luxury Gallery page.
 *
 * Updates:
 * • Navbar clearance handled by app/(studio)/layout.tsx
 * • Refined luxury editorial spacing
 * • Improved visual hierarchy
 * • Mobile / iPad / desktop optimization
 * • Full-width studio presentation
 * • Matches brand storytelling direction
 *
 *
 * ---
 *
 */

import { GALLERY_CONFIG } from "./gallery.constants";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FBF7F4]

        pb-20

        sm:pb-24

        md:pb-32
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />



      {/* CONTENT */}
      <div
        className="
          relative

          z-10

          w-full

          px-5

          sm:px-8

          md:px-10

          lg:px-16

          xl:px-24
        "
      >



        {/* HEADER */}
        <header
          className="
            mx-auto

            flex

            max-w-5xl

            flex-col

            items-center

            text-center

            mb-16

            md:mb-20

            xl:mb-24
          "
        >



          {/* EYEBROW */}
          <p
            className="
              uppercase

              tracking-[0.4em]

              text-[11px]

              sm:text-xs

              text-[#8C5A6B]
            "
          >
            {GALLERY_CONFIG.eyebrow}
          </p>





          {/* TITLE */}
          <h1
            className="
              mt-6

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.08]

              tracking-[-0.035em]

              text-[#3B2A26]
            "
          >
            {GALLERY_CONFIG.title}
          </h1>





          {/* DESCRIPTION */}
          <p
            className="
              mt-6

              max-w-2xl

              text-sm

              sm:text-base

              md:text-lg

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
