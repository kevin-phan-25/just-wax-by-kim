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
 * • Restored visible brand typography
 * • Improved luxury spacing
 * • Unified editorial styling
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
            uppercase
            tracking-[0.18em]
            text-[#8C7468]
          "
        >
          More than just a wax
        </p>


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
