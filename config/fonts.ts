/**
 * -----------------------------------------------------------------------------
 * File:
 * fonts.ts
 *
 * Description:
 * Luxury typography.
 *
 * -----------------------------------------------------------------------------
 */


import {

Playfair_Display,

Montserrat

}

from "next/font/google";



export const headingFont = Playfair_Display({

subsets:["latin"]

});



export const bodyFont = Montserrat({

subsets:["latin"]

});
