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
 * • Restored visible brand typography
 * • Improved luxury spacing
 * • Unified color palette
 *
 * ---
 *
 */

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
            tracking-[0.18em]
            uppercase
            text-[#8C7468]
          "
        >
          More than just a wax
        </p>


        {/* Divider */}
        <div
          className="
            my-8
            h-px
            w-16
            bg-[#D8B4A0]
          "
        />


        {/* Copyright */}
        <p
          className="
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
