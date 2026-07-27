/**
 * -----------------------------------------------------------------------------
 * File: fonts.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Global typography configuration.
 * Defines luxury heading font and modern body font.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *   - Added Cormorant Garamond for luxury branding.
 *   - Added Inter for readable body text.
 *
 * -----------------------------------------------------------------------------
 */

import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";


export const headingFont =
  Cormorant_Garamond({
    subsets: ["latin"],
    weight: [
      "400",
      "500",
      "600",
      "700",
    ],
    variable: "--font-heading",
});


export const bodyFont =
  Inter({
    subsets: ["latin"],
    weight: [
      "400",
      "500",
      "600",
      "700",
    ],
    variable: "--font-body",
});
