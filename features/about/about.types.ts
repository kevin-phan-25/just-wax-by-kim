/**
 * -----------------------------------------------------------------------------
 * File: features/about/about.types.ts
 *
 * Date: July 27, 2026
 *
 * Description:
 * TypeScript interfaces for the About section content and credentials.
 *
 * Changes:
 * • July 27, 2026 – Initial creation
 * -----------------------------------------------------------------------------
 */
export interface Credential {
  title: string;
  description: string;
}

export interface AboutSection {
  eyebrow: string;
  title: string;
  description: string;
}
