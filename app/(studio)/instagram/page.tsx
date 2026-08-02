/**
 *
 * ---
 * File:
 * app/(studio)/instagram/page.tsx
 *
 * Description:
 * Standalone luxury Instagram page.
 *
 * Changes:
 * • Moved Instagram away from homepage
 * • Added dedicated route
 * • Matches Gallery / Testimonials / FAQ / Contact architecture
 * • Navbar spacing handled by studio layout
 * • Added SEO metadata
 *
 * ---
 *
 */

import type {
  Metadata,
} from "next";

import Instagram from "@/features/instagram";


export const metadata: Metadata = {
  title:
    "Instagram | Just Wax by Kim",

  description:
    "Explore behind-the-scenes moments, luxury studio details, and the Just Wax by Kim experience.",
};


export default function InstagramPage() {
  return <Instagram />;
}
