/**
 *
 * ---
 * File:
 * app/(studio)/services/gentlemen/page.tsx
 *
 * Description:
 * Gentlemen waxing pricing page.
 *
 * ---
 */

import ServicePricingPage from "@/features/services/ServicePricingPage";

import {
  gentlemenServices,
} from "@/features/services/data/gentlemen.data";


export default function GentlemenServicesPage() {
  return (
    <ServicePricingPage
      id="gentlemen-pricing"

      title="Gentlemen Waxing"

      description="
        Professional waxing services designed for men
        who value confidence, comfort, and care.
      "

      services={gentlemenServices}
    />
  );
}
