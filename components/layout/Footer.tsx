/**
 *
 * ---
 * File: Footer.tsx
 *
 * Description:
 * Minimal luxury footer section.
 *
 * Changes:
 *
 * • Uses official brand logo
 * • Matched global page background
 * • Removed dark footer treatment
 * • Removed divider accents
 * • Removed duplicate navigation links
 * • Added studio location
 * • Added Instagram icon link
 * • Maintained luxury editorial styling
 *
 * ---
 *
 */

import { Instagram } from "lucide-react";

import {
  Logo,
} from "@/components/ui/Logo";


export default function Footer() {

return (

<footer
  className="
    w-full

    bg-[#FCF8F3]

    px-6

    sm:px-8

    md:px-12

    xl:px-24

    py-16

    md:py-20
  "
>

  <div
    className="
      flex

      flex-col

      items-center

      text-center
    "
  >



    {/* BRAND LOGO */}

    <div
      className="
        flex

        justify-center

        scale-[1.15]

        md:scale-[1.25]
      "
    >

      <Logo />

    </div>





    {/* TAGLINE */}

    <p
      className="
        mt-6

        text-sm

        uppercase

        tracking-[0.18em]

        text-[#8C7468]
      "
    >
      More than just a wax
    </p>





    {/* LOCATION */}

    <p
      className="
        mt-6

        text-sm

        text-[#8C7468]
      "
    >
      Tysons Corner, Virginia
    </p>





    {/* INSTAGRAM */}

    <a
      href="https://instagram.com/justwaxbykim"

      target="_blank"

      rel="noopener noreferrer"

      aria-label="Follow Just Wax by Kim on Instagram"

      className="
        mt-6

        inline-flex

        items-center

        gap-2

        text-sm

        uppercase

        tracking-[0.18em]

        text-[#8C5A6B]

        transition-colors

        duration-300

        hover:text-[#3B2A26]
      "
    >

      <Instagram
        size={16}
        strokeWidth={1.8}
      />

      Instagram

    </a>





    {/* COPYRIGHT */}

    <p
      className="
        mt-10

        text-sm

        text-[#8C7468]
      "
    >
      © 2026 Just Wax by Kim. All rights reserved.
    </p>



  </div>


</footer>

);

}
