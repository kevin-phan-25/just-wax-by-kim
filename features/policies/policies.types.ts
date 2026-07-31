/**
 * -----------------------------------------------------------------------------
 * File: features/policies/policies.types.ts
 * -----------------------------------------------------------------------------
 */

export type PolicySection = {
  id: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};
