/**
 *
 * ---
 * File:
 * app/(studio)/privacy-policy/page.tsx
 *
 * Description:
 * Standalone luxury privacy policy page.
 *
 * Changes:
 * • Uses studio layout navbar clearance
 * • Keeps page responsible only for routing
 * • Feature component controls content presentation
 *
 * ---
 *
 */

import { PrivacyPolicy } from "@/features/privacy-policy";


export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
