/**
 * -----------------------------------------------------------------------------
 * File: fonts.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury brand typography.
 *
 * Changes:
 * - Added v1.0.1 typography system.
 *
 * -----------------------------------------------------------------------------
 */


import {

Playfair_Display,

Montserrat

}

from "next/font/google";




export const headingFont = Playfair_Display({

subsets:[

"latin"

],

variable:

"--font-heading",

display:

"swap"

});





export const bodyFont = Montserrat({

subsets:[

"latin"

],

variable:

"--font-body",

display:

"swap"

});
