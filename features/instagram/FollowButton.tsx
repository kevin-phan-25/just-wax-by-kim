/**
 *
 * ---
 * File:
 * features/instagram/FollowButton.tsx
 *
 * Description:
 * Luxury Instagram follow CTA.
 *
 * Updates:
 * • Refined editorial CTA styling
 * • Softer luxury interaction
 * • Matches global button system
 * • Improved mobile responsiveness
 *
 * ---
 *
 */

import {
  Instagram,
} from "lucide-react";


export default function FollowButton() {

  return (
    <a
      href="https://instagram.com/justwaxbykim"

      target="_blank"

      rel="noopener noreferrer"

      className="
        group

        inline-flex

        w-fit

        items-center

        justify-center

        gap-3

        rounded-full

        border

        border-[#8C5A6B]

        px-8

        sm:px-10

        py-4

        sm:py-4.5

        uppercase

        tracking-[0.18em]

        text-xs

        sm:text-sm

        font-medium

        whitespace-nowrap

        text-[#8C5A6B]

        transition-all

        duration-500

        hover:-translate-y-0.5

        hover:bg-[#F6E7E1]

        hover:shadow-[0_15px_40px_rgba(59,42,38,0.08)]
      "
    >

      <Instagram
        size={17}

        strokeWidth={1.7}

        className="
          transition-transform

          duration-500

          group-hover:scale-110
        "
      />


      Follow @justwaxbykim


    </a>
  );
}
