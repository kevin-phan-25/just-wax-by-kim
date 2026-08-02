/**
 * ---
 * File:
 * features/services/services.types.ts
 *
 * Description:
 * Service domain models.
 *
 * Updates:
 * • Simplified service architecture
 * • Removed unused category model
 * • Supports Ladies/Gentlemen pricing
 * • Supports reusable luxury service cards
 *
 * ---
 */


export interface Service {
  id: string;

  title: string;

  category: string;

  price: string;

  duration: string;

  gender: "ladies" | "gentlemen";
}
