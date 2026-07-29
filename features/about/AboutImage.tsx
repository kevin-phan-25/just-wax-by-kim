/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Luxury portrait frame for editorial About section.
 *
 * Changes:
 * • Enlarged portrait for 3-column layout
 * • Better centered proportions
 * • Softer luxury shadow
 * • Slightly taller editorial aspect ratio
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[260px]
        sm:max-w-[300px]
        lg:max-w-[360px]
        xl:max-w-[400px]
        aspect-[4/5]
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="
          absolute
          -inset-5
          rounded-[2.25rem]
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
          shadow-[0_30px_70px_-18px_rgba(59,42,38,0.18)]
          flex
          items-center
          justify-center
        "
      >
        <p
          className="
            text-center
            uppercase
            tracking-[0.28em]
            leading-loose
            text-[#8A776E]
            text-[0.68rem]
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
