/**
 * -----------------------------------------------------------------------------
 * File: layout.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Root application layout.
 *
 * Changes:
 * - July 27, 2026
 *   - Added global fonts.
 *   - Added navigation and footer shell.
 *
 * -----------------------------------------------------------------------------
 */


import type { Metadata } from "next";

import "./globals.css";

import {
  headingFont,
  bodyFont,
} from "@/config/fonts";

import Navbar
from "@/components/layout/Navbar";

import Footer
from "@/components/layout/Footer";


export const metadata: Metadata = {

