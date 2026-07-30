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
 *   • Fixed JSX structure
 *   • Removed fixed sizing constraints
 *   • Matched luxury brand theme
 *   • Improved responsive layout
 *
 * -----------------------------------------------------------------------------
 */

import {
  business,
} from "@/constants/business";

import {
  socialLinks,
} from "@/constants/social";


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
          grid
          gap-10
          md:grid-cols-3
        "
      >


        {/* Brand */}
        <div>

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

        </div>



        {/* Social */}
        <div>

          <h3
            className="
              text-sm
              uppercase
              tracking-[0.25em]
            "
          >
            Connect
          </h3>


          <div
            className="
              mt-5
              space-y-3
            "
          >

            {socialLinks.map((item) => (

              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {item.name}
              </a>

            ))}

          </div>

        </div>



        {/* Contact */}
        <div>

          <h3
            className="
              text-sm
              uppercase
              tracking-[0.25em]
            "
          >
            Contact
          </h3>


          <div
            className="
              mt-5
              space-y-3
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


      </div>



      {/* Bottom */}
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
