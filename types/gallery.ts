/**
 * -----------------------------------------------------------------------------
 * File: types/gallery.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Gallery image models.
 *
 * Changes:
 * - v1.0.2
 *   - Added luxury gallery structure.
 *
 * -----------------------------------------------------------------------------
 */


export interface GalleryImage {

  id:string;

  src:string;

  alt:string;

  title?:string;

  category:
    | "studio"
    | "services"
    | "results"
    | "kim";

}
