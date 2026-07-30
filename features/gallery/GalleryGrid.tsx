/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/GalleryGrid.tsx
 *
 * Description:
 * Luxury editorial gallery grid.
 * -----------------------------------------------------------------------------
 */

import { galleryImages } from "./gallery.data";
import GalleryImage from "./GalleryImage";

export default function GalleryGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        auto-rows-[220px]
        gap-6
      "
    >
      {galleryImages.map((image, index) => (
        <GalleryImage
          key={image.id}
          image={image}
          featured={
            index === 0 ||
            index === 3 ||
            index === 4
          }
        />
      ))}
    </div>
  );
}
