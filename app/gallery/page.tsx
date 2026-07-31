/**
 * -----------------------------------------------------------------------------
 * File:
 * app/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Added navbar spacing
 * • Matches Services page architecture
 * • Preserves editorial layout
 * -----------------------------------------------------------------------------
 */

import Gallery from "@/features/gallery";

export default function GalleryPage() {
  return (
    <main
      className="
        w-full
        px-6
        pt-[168px]
        pb-24
      "
    >
      <Gallery />
    </main>
  );
}
