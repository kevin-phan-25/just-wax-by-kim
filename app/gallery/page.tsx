/**
 * -----------------------------------------------------------------------------
 * File:
 * app/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Moved Gallery away from homepage
 * • Matches Services page architecture
 * • Added navbar spacing
 * • Full editorial presentation
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
[kkphan@z11devrm419 gallery]$ vim ../../app/page.tsx 
[kkphan@z11devrm419 gallery]$ vim ../../app/gallery/page.tsx 
[kkphan@z11devrm419 gallery]$ vim ../../constants/navigation.ts 
[kkphan@z11devrm419 gallery]$ vim ../../components/layout/MobileMenu.tsx 
[kkphan@z11devrm419 gallery]$ cat ../../app/gallery/page.tsx 
/**
 * -----------------------------------------------------------------------------
 * File:
 * app/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Gallery moved from homepage
 * • Added dedicated route
 * • Matches Services page spacing
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

