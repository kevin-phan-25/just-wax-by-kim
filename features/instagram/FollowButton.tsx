/**
 * --------------------------------------------------------------------------
 * File:
 * features/instagram/FollowButton.tsx
 *
 * Description:
 * Luxury Instagram follow CTA.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Outline pill matching site Book buttons
 * • Added Instagram link
 * • Lighter hover interaction
 * • Maintained luxury editorial styling
 *
 * --------------------------------------------------------------------------
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

        items-center

        justify-center

        gap-3

        rounded-full

        border-2

        border-[#8C5A6B]

        px-10

        py-4

        uppercase

        tracking-[0.18em]

        text-sm

        font-semibold

        text-[#8C5A6B]

        transition-all

        duration-300

        hover:bg-[#F6E7E1]
      "
    >

      <Instagram
        size={18}
        className="
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />


      Follow @justwaxbykim


    </a>

  );

}
