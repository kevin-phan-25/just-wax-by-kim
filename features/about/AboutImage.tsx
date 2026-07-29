/**
 * -----------------------------------------------------------------------------
 * File: AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury founder portrait placeholder.
 *
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[280px]
        lg:max-w-[320px]
      "
    >

      <div
        className="
          aspect-[4/5]
          rounded-[2rem]
          overflow-hidden
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_25px_60px_rgba(59,42,38,0.08)]
          flex
          items-center
          justify-center
        "
      >

        <p
          className="
            text-center
            text-[#8A776E]
            text-xs
            uppercase
            tracking-[0.28em]
            leading-loose
          "
        >
          Kim&apos;s Portrait
          <br />
          Coming Soon
        </p>

      </div>


      {/* Bottom accent */}
      <div
        aria-hidden
        className="
          absolute
          -bottom-5
          left-1/2
          -translate-x-1/2
          w-14
          h-px
          bg-[#D4A9B6]
        "
      />

    </div>
  );
}
