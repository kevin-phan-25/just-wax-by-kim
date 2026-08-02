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
 * • Removed tagline
 * • Reduced overall footer height
 * • Reduced logo scale
 * • Tightened luxury spacing
 * • Maintained editorial styling
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

        py-10

        md:py-12
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
          "
        >

          <Logo />

        </div>





        {/* LOCATION */}

        <p
          className="
            mt-3

            text-xs

            md:text-sm

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
            mt-4

            inline-flex

            items-center

            gap-2

            text-xs

            md:text-sm

            uppercase

            tracking-[0.18em]

            text-[#8C5A6B]

            transition-colors

            duration-300

            hover:text-[#3B2A26]
          "
        >

          <Instagram
            size={15}
            strokeWidth={1.8}
          />

          Instagram

        </a>





        {/* COPYRIGHT */}

        <p
          className="
            mt-6

            text-xs

            text-[#8C7468]
          "
        >
          © 2026 Just Wax by Kim. All rights reserved.
        </p>



      </div>

    </footer>

  );

}
