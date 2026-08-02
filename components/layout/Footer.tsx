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
 * • Reduced top spacing
 * • Reduced footer height
 * • Tightened logo → location gap
 * • Smaller footer logo (not navbar size)
 * • Maintained editorial styling
 *
 * ---
 *
 */

import { Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

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
        pt-2
        md:pt-3
        pb-6
        md:pb-8
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
        {/* BRAND LOGO — scaled down for footer */}
        <div
          className="
            flex
            justify-center
            [&_img]:!h-12
            sm:[&_img]:!h-14
            md:[&_img]:!h-16
            [&_img]:!w-auto
          "
        >
          <Logo />
        </div>

        {/* LOCATION */}
        <p
          className="
            mt-1
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
            mt-2
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
          <Instagram size={15} strokeWidth={1.8} />
          Instagram
        </a>

        {/* COPYRIGHT */}
        <p
          className="
            mt-4
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
