/**
 *
 * ---
 * File: features/about/about.types.ts
 *
 * Description:
 * Type definitions for About section.
 *
 * Changes:
 * • Updated description to support editorial paragraphs
 * • Added slogan support with rich text formatting
 *
 * ---
 */

import type { ReactNode } from "react";

export interface AboutSection {
  eyebrow: string;

  title: string;

  description: string[];

  slogan?: ReactNode;
}
