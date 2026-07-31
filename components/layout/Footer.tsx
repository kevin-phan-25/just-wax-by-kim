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
        relative
        w-full
        bg-brand-black
        px-6
        py-12
        text-white
      "
    >
      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-center
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
