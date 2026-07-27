/**
 * -----------------------------------------------------------------------------
 * File: utils/scroll.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Smooth scrolling helpers.
 *
 * Changes:
 * - v1.0.2
 *   - Added navigation utilities.
 *
 * -----------------------------------------------------------------------------
 */


export function scrollToSection(
 id:string
){


 const element =
 document.getElementById(id);


 if(!element){

  return;

 }


 element.scrollIntoView({

  behavior:"smooth",

  block:"start"

 });


}
