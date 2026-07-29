/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Portrait frame with responsive aspect ratios and soft depth.
 *
 * Changes:
 * • July 29, 2026 – Added responsive aspect ratios
 *   - Mobile: aspect-[3/4] (slightly taller)
 *   - md+: aspect-[4/5] (classic portrait)
 * • July 29, 2026 – Responsive max-widths for better scaling
 * -----------------------------------------------------------------------------
 */
export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[240px]
        sm:max-w-[260px]
        lg:max-w-[300px]
        xl:max-w-[320px]
        aspect-[3/4]
        md:aspect-[4/5]
      "
    >
      {/* Soft depth layer */}
      <div
        aria-hidden
        className="
          absolute -inset-3
          rounded-[1.85rem]
          bg-[#E8DDD8]/35
          blur-xl
          -z-10
        "
      />

      <div
        className="
          relative
          h-full w-full
          rounded-[1.7rem]
          overflow-hidden
          border border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_22px_44px_-10px_rgba(59,42,38,0.16)]
          flex items-center justify-center
        "
      >
        <p
          className="
            text-center text-[#8A776E]
            text-[0.65rem] uppercase tracking-[0.25em] leading-loose
          "
        >
          Kim&apos;s Portrait
          <br />
          Coming Soon
        </p>
      </div>

      {/* Accent under frame */}
      <div
        aria-hidden
        className="
          absolute -bottom-4 left-1/2 -translate-x-1/2
          h-px w-12 bg-[#D4A9B6]
        "
      />
    </div>
  );
}
