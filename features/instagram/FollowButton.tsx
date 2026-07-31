/**
 * -----------------------------------------------------------------------------
 * File: FollowButton.tsx
 *
 * Description:
 * Luxury Instagram CTA.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Editorial luxury styling
 * • Hover animation
 * • Instagram icon
 * • Opens Instagram in new tab
 * -----------------------------------------------------------------------------
 */

import { Instagram } from "lucide-react";

export default function FollowButton() {
  return (
    <a
      href="https://instagram.com/justwaxbykim"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-3

        rounded-full

        border
        border-[#D8B4A0]

        bg-white

        px-8
        py-4

        text-sm
        font-semibold
        uppercase
        tracking-[0.22em]

        text-[#8C5A6B]

        shadow-[0_12px_35px_rgba(59,42,38,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#F6E7E1]
        hover:border-[#D4A9B6]
        hover:shadow-[0_20px_50px_rgba(59,42,38,0.10)]
      "
    >
      <Instagram size={18} />

      <span>Follow @justwaxbykim</span>
    </a>
  );
}
