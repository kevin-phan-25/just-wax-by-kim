/**
 *
 * ---
 * File:
 * features/instagram/FollowButton.tsx
 *
 * Description:
 * Luxury Instagram journey CTA.
 *
 * Updates:
 * • Shifted from button style to invitation style
 * • Softer luxury interaction
 * • Matches Follow The Journey section
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

    items-center

    justify-center

    gap-3

    rounded-full

    border

    border-[#D8B4A0]

    bg-transparent

    px-8

    sm:px-10

    py-4

    sm:py-5

    uppercase

    tracking-[0.22em]

    text-[11px]

    sm:text-xs

    font-medium

    whitespace-nowrap

    text-[#8C5A6B]

    transition-all

    duration-500

    hover:-translate-y-1

    hover:border-[#8C5A6B]

    hover:bg-[#F6E7E1]

    hover:shadow-[0_18px_45px_rgba(59,42,38,0.10)]
  "
>


  <Instagram
    size={17}

    strokeWidth={1.6}

    className="
      transition-transform

      duration-500

      group-hover:-translate-y-0.5

      group-hover:scale-110
    "
  />



  Follow Our Journey


</a>

);

}
