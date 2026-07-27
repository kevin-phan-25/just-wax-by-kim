/**
 * -----------------------------------------------------------------------------
 * File: eslint.config.mjs
 *
 * Created: July 27, 2026
 *
 * Description:
 * ESLint configuration.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial Next.js configuration.
 *
 * -----------------------------------------------------------------------------
 */


import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";


const __filename =
  fileURLToPath(import.meta.url);

const __dirname =
  dirname(__filename);


const compat =
  new FlatCompat({
    baseDirectory: __dirname,
  });


export default [

  ...compat.extends(
    "next/core-web-vitals"
  ),

];
