/**
 * ---
 * File:
 * app/policies/page.tsx
 *
 * ---
 */

import type { Metadata } from "next";
import { Policies } from "@/features/policies";

export const metadata: Metadata = {
  title: "Appointment Policies | Just Wax by Kim",
  description:
    "Late arrival, cancellation, hair length, health & safety, and studio policies for Just Wax by Kim.",
};

export default function PoliciesPage() {
  return <Policies />;
}
