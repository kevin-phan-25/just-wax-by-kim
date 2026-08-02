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

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#FBF7F4]
        px-6
        py-16
        md:py-20
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          flex-col
          items-center
        "
      >

        {/* Brand */}
        <h2
          className="
            font-serif
            text-2xl
            md:text-3xl
            tracking-wide
            text-[#3B2A26]
          "
        >
          Just Wax by Kim
        </h2>


        {/* Tagline */}
        <p
          className="
            mt-4
            text-sm
            uppercase
            tracking-[0.18em]
            text-[#8C7468]
          "
        >
          More than just a wax
        </p>


        {/* Location */}
        <p
          className="
            mt-6
            text-sm
            text-[#8C7468]
          "
        >
          Tysons Corner, Virginia
        </p>


        {/* Instagram */}
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


        {/* Copyright */}
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
