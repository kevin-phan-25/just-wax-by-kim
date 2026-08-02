/**
 * ---
 * File:
 * features/instagram/FollowButton.tsx
 *
 * Description:
 * Luxury Instagram follow CTA.
 *
 * Updates:
 * • Responsive luxury pill button
 * • Matches site CTA styling
 * • Improved mobile spacing
 * • Added refined hover interaction
 * • Preserved editorial branding
 *
 * ---
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

        hover:bg-[#8C5A6B]

        hover:text-white

        hover:shadow-[0_15px_40px_rgba(59,42,38,0.12)]
      "
    >

      <Instagram
        size={18}
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
