/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury founder portrait frame.
 *
 * Changes:
 * • Refined editorial styling
 * • Added soft floating frame effect
 * • Prepared for future Kim portrait
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">

      {/* Image Frame */}
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[2rem]
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_25px_60px_rgba(59,42,38,0.08)]
        "
      >

        {/* Temporary placeholder */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[radial-gradient(ellipse_at_center,rgba(212,169,182,0.25),transparent_70%)]
          "
        >
          <p
            className="
              text-center
              text-[#8A776E]
              text-xs
              uppercase
              tracking-[0.25em]
              leading-loose
            "
          >
            Kim&apos;s Portrait
            <br />
            Coming Soon
          </p>
        </div>

      </div>


      {/* Decorative accent */}
      <div
        aria-hidden
        className="
          absolute
          -bottom-5
          left-1/2
          -translate-x-1/2
          h-px
          w-16
          bg-[#D4A9B6]
        "
      />

    </div>
  );
}
