export default function AboutImage() {
  return (
    <div className="relative w-full">
      {/* Soft drop shadow layer for depth */}
      <div
        aria-hidden
        className="
          absolute -inset-3
          rounded-[2rem]
          bg-[#E8DDD8]/40
          blur-xl
          -z-10
        "
      />

      <div
        className="
          relative
          aspect-[4/5]
          rounded-[1.85rem]
          overflow-hidden
          border border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_25px_50px_-12px_rgba(59,42,38,0.18)]
          flex items-center justify-center
        "
      >
        <p
          className="
            text-center text-[#8A776E]
            text-[0.7rem] uppercase tracking-[0.28em] leading-loose
          "
        >
          Kim&apos;s Portrait
          <br />
          Coming Soon
        </p>
      </div>

      {/* Accent line under the frame */}
      <div
        aria-hidden
        className="
          absolute -bottom-5 left-1/2 -translate-x-1/2
          h-px w-14 bg-[#D4A9B6]
        "
      />
    </div>
  );
}
