/**
 *
 * -------------------------------------------------------------------
 * File:
 * features/services/services.types.ts
 *
 * Description:
 * Service domain models.
 *
 * Updates:
 * • Supports Ladies & Gentlemen pricing
 * • Supports expandable pricing options
 * • Simplified reusable service model
 * -------------------------------------------------------------------
 */

export interface Service {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  gender: "ladies" | "gentlemen";

  options?: {
    label: string;
    price: string;
    duration?: string;
  }[];
}
