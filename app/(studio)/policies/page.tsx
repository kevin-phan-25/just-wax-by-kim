/**
 *
 * ---
 * File:
 * app/(studio)/policies/page.tsx
 *
 * Description:
 * Standalone luxury policies page.
 *
 * Changes:
 * • Moved Policies away from homepage
 * • Added dedicated route
 * • Matches Gallery / FAQ / Contact architecture
 * • Navbar spacing handled by studio layout
 *
 * ---
 *
 */

import type { Metadata } from "next";

import { Policies } from "@/features/policies";


export const metadata: Metadata = {
  title:
    "Appointment Policies | Just Wax by Kim",

  description:
    "Late arrival, cancellation, hair length, health & safety, and studio policies for Just Wax by Kim.",
};


export default function PoliciesPage() {
  return <Policies />;
}
