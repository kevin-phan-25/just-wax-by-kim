/**
 * --------------------------------------------------------------------------
 * File:
 * app/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Moved Gallery away from homepage
 * • Added dedicated route
 * • Full-page editorial presentation
 *
 * --------------------------------------------------------------------------
 */


import Gallery from "@/features/gallery";


export default function GalleryPage() {


  return (

    <main
      className="
        pt-[168px]
      "
    >

      <Gallery />

    </main>

  );

}
