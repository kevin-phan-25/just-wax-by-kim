export default function AboutImage() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[250px]
        md:max-w-[280px]
      "
    >
      <div
        className="
          aspect-[4/5]
          rounded-[1.75rem]
          overflow-hidden
          border
          border-[#E8DDD8]
          bg-[#F6E7E1]
          shadow-[0_20px_45px_rgba(59,42,38,0.08)]
          flex
          items-center
          justify-center
        "
      >
        <p
          className="
            text-center
            text-[#8A776E]
            text-[0.65rem]
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

      {/* Small accent line under the frame */}
      <div
        aria-hidden
        className="
          absolute
          -bottom-4
          left-1/2
          -translate-x-1/2
          h-px
          w-12
          bg-[#D4A9B6]
        "
      />
    </div>
  );
}
