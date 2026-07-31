/**
 * -----------------------------------------------------------------------------
 * File: features/instagram/FollowButton.tsx
 *
 * Description:
 * Luxury Instagram follow CTA.
 *
 * Updated: July 30, 2026
 *
 * Changes:
 * • Outline pill matching site Book buttons
 * • Lighter hover — no heavy shadow jump
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
        inline-flex items-center justify-center gap-3
        rounded-full
        border-2 border-[#8C5A6B]
        bg-transparent
        px-9 py-4
        text-[0.72rem] font-semibold uppercase tracking-[0.2em]
        text-[#8C5A6B]
        transition-all duration-300
        hover:bg-[#F6E7E1]
        hover:border-[#6E4A55]
        hover:text-[#6E4A55]
      "
    >
      <Instagram size={16} strokeWidth={1.75} />
      <span>Follow {`@justwaxbykim`}</span>
    </a>
  );
}
