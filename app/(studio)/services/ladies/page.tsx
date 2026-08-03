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
import InclusiveBooking from "@/features/services/InclusiveBooking";

import {
  ladiesServices,
} from "@/features/services/data/ladies.data";


export default function LadiesServicesPage() {

  return (
    <>
      <ServicePricingPage
        id="ladies-pricing"

        title="Ladies Waxing"

        description="
          Professional waxing services created with precision,
          comfort, and personalized care.
        "

        services={ladiesServices}
      />

      <InclusiveBooking />
    </>
  );

}
