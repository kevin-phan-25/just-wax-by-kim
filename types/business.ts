/**
 * -----------------------------------------------------------------------------
 * File: types/business.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Business information types.
 *
 * Changes:
 * - v1.0.2
 *   - Added business profile structure.
 *
 * -----------------------------------------------------------------------------
 */


export interface BusinessInfo {

  name:string;

  slogan:string;

  description:string;

  phone:string;

  email:string;

  address?:string;

  instagram?:string;

}
