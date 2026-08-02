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
 * - July 31, 2026
 * • Full-width luxury presentation
 * • Removed width restrictions
 * • Matched editorial spacing system
 * • Centered brand presentation
 * • Refined luxury typography
 *
 * ---
 *
 */

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#3B2A26]
        text-center
        px-5
        sm:px-8
        md:px-10
        lg:px-16
        py-16
        md:py-20
      "
    >

      {/* CONTENT */}
      <div
        className="
          w-full
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
            text-white
          "
        >
          Just Wax by Kim
        </h2>


        {/* Tagline */}
        <p
          className="
            mt-4
            uppercase
            tracking-[0.3em]
            text-xs
            text-[#D8B4A0]
          "
        >
          More than just a wax
        </p>


        {/* Divider */}
        <div
          className="
            my-8
            h-px
            w-24
            bg-white/20
          "
        />


        {/* Copyright */}
        <p
          className="
            text-sm
            text-white/60
          "
        >
          © 2026 Just Wax by Kim. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
