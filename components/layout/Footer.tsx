/**
 * -----------------------------------------------------------------------------
 * File: Footer.tsx
 *
 * Created:
 * July 27, 2026
 *
 * Description:
 * Luxury footer section.
 *
 * Changes:
 *
 * - July 30, 2026
 *   • Removed Connect section
 *   • Removed Contact heading
 *   • Simplified luxury footer layout
 *   • Removed unnecessary duplication
 *
 * -----------------------------------------------------------------------------
 */

import {
  business,
} from "@/constants/business";


export default function Footer() {

  return (

    <footer
      className="
        bg-brand-black
        px-6
        py-16
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          text-center
        "
      >

        {/* Brand */}
        <h2
          className="
            font-serif
            text-3xl
          "
        >
          {business.name}
        </h2>


        <p
          className="
            mt-3
            text-white/70
            leading-relaxed
          "
        >
          {business.tagline}
        </p>


        <div
          className="
            mt-8
            space-y-2
            text-white/70
          "
        >

          <p>
            {business.location}
          </p>


          <p>
            {business.phone}
          </p>

        </div>


      </div>



      {/* Copyright */}
      <div
        className="
          mx-auto
          mt-12
          max-w-7xl

          border-t
          border-white/20

          pt-6

          text-center
          text-sm
          text-white/60
        "
      >

        © 2026 {business.name}. All rights reserved.

      </div>


    </footer>

  );

}
