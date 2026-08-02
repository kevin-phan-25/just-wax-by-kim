/**
 *
 * ---
 * File:
 * app/(studio)/services/ladies/page.tsx
 *
 * Description:
 * Ladies waxing pricing page.
 *
 * ---
 */

import ServicePricingPage from "@/features/services/ServicePricingPage";

import {
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage() {
  return (
    <ServicePricingPage
      id="ladies-pricing"

      title="Ladies Waxing"

      description="
        Luxury waxing services designed around comfort,
        confidence, and beautifully cared skin.
      "

      services={ladiesServices}
    />
  );
}
