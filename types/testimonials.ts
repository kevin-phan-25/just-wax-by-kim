/**
 * -----------------------------------------------------------------------------
 * File: types/testimonials.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Customer review types.
 *
 * Changes:
 * - v1.0.2
 *   - Added testimonial model.
 *
 * -----------------------------------------------------------------------------
 */


export interface Testimonial {

 id:string;

 name:string;

 message:string;

 rating:number;

 service?:string;

}
