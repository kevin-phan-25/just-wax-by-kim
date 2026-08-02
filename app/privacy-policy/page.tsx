/**
 * ---
 * File:
 * app/privacy-policy/page.tsx
 *
 * Description:
 * Standalone luxury privacy policy page.
 *
 * Changes:
 * • Added navbar clearance spacing
 * • Matches Gallery / Contact / FAQ architecture
 * • Keeps feature component responsible only for content
 *
 * ---
 */

import { PrivacyPolicy } from "@/features/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <main
      className="
        pt-[168px]

        md:pt-[190px]
      "
    >
      <PrivacyPolicy />
    </main>
  );
}
