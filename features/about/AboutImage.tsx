/**
 * -----------------------------------------------------------------------------
 * File:
 * features/about/AboutImage.tsx
 *
 * Description:
 * Luxury portrait component.
 *
 * Updates:
 * • Removed decorative underline
 * • Removed extra visual clutter
 * • Maintained portrait sizing
 *
 * -----------------------------------------------------------------------------
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
      "
    >

      {/* Soft depth */}
      <div
        aria-hidden
        className="
          absolute
          -inset-5
          rounded-[2.5rem]
          bg-[#E8DDD8]/40
          blur-3xl
          -z-10
        "
      />


      {/* Portrait frame */}
      <div
        className="
          aspect-[4/5]
          overflow-hidden
          rounded-[2.25rem]
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_30px_80px_-20px_rgba(59,42,38,0.18)]
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

    </div>
  );
}
