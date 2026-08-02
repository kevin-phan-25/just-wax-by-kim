/**
 * ---
 * File:
 * features/gallery/Gallery.tsx
 *
 * Description:
 * Standalone luxury Gallery page.
 *
 * Updates:
 * • Unified luxury spacing system
 * • Responsive navbar clearance
 * • Mobile / iPad / desktop optimization
 * • Full-width editorial gallery
 * • Centered typography
 * • Matches Services page styling
 *
 * ---
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

        pt-[168px]

        md:pt-[190px]

        pb-16

        sm:pb-20

        md:pb-24
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
            flex

            flex-col

            items-center

            text-center

            mb-14

            md:mb-16

            xl:mb-20
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              sm:text-sm

              text-[#8C5A6B]
            "
          >
            {GALLERY_CONFIG.eyebrow}
          </p>


          <h1
            className="
              mt-6

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.1]

              tracking-[-0.035em]

              text-[#3B2A26]
            "
          >
            {GALLERY_CONFIG.title}
          </h1>


          <p
            className="
              mt-6

              max-w-3xl

              text-base

              sm:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            {GALLERY_CONFIG.description}
          </p>


        </header>



        {/* GALLERY GRID */}
        <GalleryGrid />


      </div>


    </section>
  );
}
