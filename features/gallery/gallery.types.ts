/**
 * -----------------------------------------------------------------------------
 * File: features/gallery/gallery.types.ts
 *
 * Description:
 * Gallery type definitions.
 * -----------------------------------------------------------------------------
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;

  /**
   * Optional vertical image.
   */
  featured?: boolean;
}
