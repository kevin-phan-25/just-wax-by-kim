/**
 * -----------------------------------------------------------------------------
 * File: types/service.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Shared service type definitions.
 *
 * Changes:
 * - v1.0.2
 *   - Added reusable service model for pricing,
 *     duration, and categories.
 *
 * -----------------------------------------------------------------------------
 */


export interface Service {

  id:string;

  name:string;

  description:string;

  price:string;

  duration:string;

  category:
    | "waxing"
    | "face"
    | "body"
    | "premium";

  featured?:boolean;

}
