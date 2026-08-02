/**
 *
 * ---
 * File:
 * config/fonts.ts
 *
 * Description:
 * Global luxury typography configuration.
 *
 * ---
 *
 */

import {
  Playfair_Display,
  Montserrat,
} from "next/font/google";


export const headingFont =
  Playfair_Display({
    subsets: [
      "latin",
    ],
    variable:
      "--font-heading",
    display:
      "swap",
  });


export const bodyFont =
  Montserrat({
    subsets: [
      "latin",
    ],
    variable:
      "--font-body",
    display:
      "swap",
  });
