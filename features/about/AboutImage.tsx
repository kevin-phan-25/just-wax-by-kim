/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Floating editorial portrait frame.
 *
 * Changes:
 * • Optimized for text-wrap layout
 * • Reduced visual weight
 * • Added refined luxury depth
 * • Balanced portrait sizing with credentials below
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[260px]
        sm:max-w-[290px]
        lg:max-w-[330px]
        xl:max-w-[360px]
        aspect-[4/5]
      "
    >
      {/* Soft ambient shadow */}
      <div
        aria-hidden
        className="
          absolute
          -inset-4
          rounded-[2rem]
          bg-[#E8DDD8]/40
          blur-2xl
          -z-10
        "
      />


      {/* Portrait Frame */}
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[2rem]
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_28px_60px_-16px_rgba(59,42,38,0.18)]
          flex
          items-center
          justify-center
        "
      >

        <p
          className="
            text-center
            uppercase
            tracking-[0.3em]
            leading-loose
            text-[#8A776E]
            text-[0.65rem]
          "
        >
          Kim&apos;s Portrait
          <br />
          Coming Soon
        </p>

      </div>


      {/* Bottom Accent */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          -bottom-5
          -translate-x-1/2
          h-px
          w-14
          bg-[#D4A9B6]
        "
      />

    </div>
  );
}
