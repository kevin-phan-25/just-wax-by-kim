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
 *
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
        Professional waxing services focused on comfort,
        confidence, and personalized care.
      "

      anatomyNote="
        For clients with penis & scrotum anatomy. Services
        are booked based on the anatomy being waxed. If
        you’re unsure which appointment to select, please
        contact me.
      "

      services={gentlemenServices}
    />
  );
}
