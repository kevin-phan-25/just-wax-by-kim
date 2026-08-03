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
 *
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
        Professional waxing services created with precision,
        comfort, and personalized care.
      "

      anatomyNote="
        For clients with vulva anatomy. Services are booked
        based on the anatomy being waxed. If you’re unsure
        which appointment to select, please contact me.
      "

      services={ladiesServices}
    />
  );
}
