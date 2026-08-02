/**
 *
 * ---
 * File:
 * app/(studio)/gallery/page.tsx
 *
 * Description:
 * Standalone luxury gallery page.
 *
 * Changes:
 * • Moved Gallery away from homepage
 * • Added dedicated route
 * • Matches studio editorial architecture
 * • Navbar spacing handled by studio layout
 *
 * ---
 *
 */

import Gallery from "@/features/gallery";

export default function GalleryPage() {
  return <Gallery />;
}
