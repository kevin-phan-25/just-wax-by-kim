/**
 * -----------------------------------------------------------------------------
 * File: cn.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Utility helper for merging Tailwind classes.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import {
  clsx,
  type ClassValue,
} from "clsx";

import {
  twMerge,
} from "tailwind-merge";


export function cn(
  ...inputs: ClassValue[]
) {

  return twMerge(
    clsx(inputs)
  );

}
