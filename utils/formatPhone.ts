/**
 * -----------------------------------------------------------------------------
 * File: utils/formatPhone.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Phone formatting helper.
 *
 * Changes:
 * - v1.0.2
 *   - Added reusable phone formatter.
 *
 * -----------------------------------------------------------------------------
 */


export function formatPhone(
 phone:string
):string {


 const cleaned =
 phone.replace(/\D/g,"");


 if(cleaned.length !== 10){

  return phone;

 }


 return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;


}
