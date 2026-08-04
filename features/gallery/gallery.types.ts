/**
 * ---
 * File:
 * features/gallery/gallery.types.ts
 *
 * Description:
 * Gallery type definitions.
 *
 * ---
 */


export type GalleryLayout =
  | "hero"
  | "wide"
  | "small";



export interface GalleryImage {

  id:
    string;


  src:
    string;


  alt?:
    string;


  title:
    string;


  layout:
    GalleryLayout;

}
