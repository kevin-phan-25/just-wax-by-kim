/**
 * -----------------------------------------------------------------------------
 * File: features/about/AboutImage.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Portrait frame with soft depth.
 *
 * Changes:
 * • July 29, 2026 – Sized to fill its grid column cleanly
 * -----------------------------------------------------------------------------
 */
export default function AboutImage() {
  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px]">
      <div
        aria-hidden
        className="
          absolute -inset-2.5
          rounded-[1.75rem]
          bg-[#E8DDD8]/35
          blur-xl
          -z-10
        "
      />

      <div
        className="
          relative
          aspect-[4/5]
          rounded-[1.6rem]
          overflow-hidden
          border border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_20px_40px_-10px_rgba(59,42,38,0.15)]
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
