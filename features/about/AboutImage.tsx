/**
 * ---
 * File:
 * features/about/AboutImage.tsx
 *
 * Description:
 * Luxury portrait component.
 *
 * Updates:
 * • Centered presentation
 * • Removed unnecessary decoration
 * • Improved luxury framing
 *
 * ---
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative
      "
    >

      {/* Soft luxury depth */}
      <div
        aria-hidden
        className="
          absolute

          -inset-8

          rounded-[3rem]

          bg-[#E8DDD8]/40

          blur-3xl
        "
      />


      {/* Portrait Frame */}
      <div
        className="
          relative

          aspect-[4/5]

          w-full

          overflow-hidden

          rounded-[3rem]

          border

          border-[#E8DDD8]

          bg-[#F4E9E4]

          shadow-[0_40px_100px_-30px_rgba(59,42,38,0.25)]

          flex

          items-center

          justify-center

          text-center

          px-10
        "
      >

        <p
          className="
            uppercase

            tracking-[0.45em]

            leading-loose

            text-[#8A776E]

            text-xs
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
