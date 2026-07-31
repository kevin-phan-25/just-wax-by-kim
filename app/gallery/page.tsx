/**
 * --------------------------------------------------------------------------
 * File:
 * app/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Added navbar spacing
 * • Matches standalone page architecture
 * • Luxury editorial spacing
 * --------------------------------------------------------------------------
 */

import Gallery from "@/features/gallery";

export default function GalleryPage() {
  return (
    <main
      className="
        pt-[168px]
        bg-[#FCF8F3]
      "
    >
      <section
        className="
          py-32
        "
      >
        <Gallery />
      </section>
    </main>
  );
}
