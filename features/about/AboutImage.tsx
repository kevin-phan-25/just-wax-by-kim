/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Description:
 * Luxury portrait centerpiece.
 *
 * Changes:
 * • Increased portrait size
 * • More elegant proportions
 * • Stronger editorial presence
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[320px]
        sm:max-w-[360px]
        lg:max-w-[430px]
        xl:max-w-[470px]
        aspect-[4/5]
      "
    >

      {/* Soft depth */}
      <div
        aria-hidden
        className="
          absolute
          -inset-6
          rounded-[2.5rem]
          bg-[#E8DDD8]/35
          blur-3xl
          -z-10
        "
      />


      {/* Portrait frame */}
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[2.25rem]
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_35px_90px_-20px_rgba(59,42,38,0.22)]
          flex
          items-center
          justify-center
        "
      >

        <p
          className="
            text-center
            uppercase
            tracking-[0.35em]
            leading-loose
            text-[#8A776E]
            text-[0.7rem]
          "
        >
          Kim&apos;s Portrait
          <br />
          Coming Soon
        </p>

      </div>


      {/* Accent */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          -bottom-6
          -translate-x-1/2
          h-px
          w-16
          bg-[#D4A9B6]
        "
      />

    </div>
  );
}
