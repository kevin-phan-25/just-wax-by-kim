/**
 * ---
 * File: Footer.tsx
 *
 * Description:
 * Minimal luxury footer section.
 *
 * Changes:
 *
 * - July 31, 2026
 * • Removed width restrictions
 * • Full-width luxury presentation
 * • Maintained centered alignment
 *
 * ---
 */

export default function Footer() {
  return (
    <footer
      className="
        bg-brand-black
        px-6
        py-12
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          text-center
        "
      >

        {/* Brand */}
        <h2
          className="
            font-serif
            text-2xl
            tracking-wide
          "
        >
          Just Wax by Kim
        </h2>


        {/* Divider */}
        <div
          className="
            mx-auto
            my-8
            h-px
            w-full
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
