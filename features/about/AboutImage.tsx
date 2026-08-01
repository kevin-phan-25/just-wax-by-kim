/**
 * ---
 * File:
 * features/about/AboutImage.tsx
 *
 * Description:
 * Luxury responsive portrait component.
 *
 * Updates:
 * • Mobile optimized sizing
 * • Tablet scaling
 * • Desktop editorial frame
 * • Cleaner luxury presentation
 *
 * ---
 */

export default function AboutImage() {
  return (
    <div
      className="
        relative

        w-full
      "
    >

      {/* Soft luxury depth */}
      <div
        aria-hidden
        className="
          absolute

          -inset-6

          sm:-inset-8

          rounded-[2.5rem]

          sm:rounded-[3rem]

          bg-[#E8DDD8]/40

          blur-3xl
        "
      />


      {/* Portrait */}
      <div
        className="
          relative

          aspect-[4/5]

          w-full

          overflow-hidden

          rounded-[2rem]

          sm:rounded-[2.5rem]

          md:rounded-[3rem]

          border

          border-[#E8DDD8]

          bg-[#F4E9E4]

          shadow-[0_30px_80px_-30px_rgba(59,42,38,0.25)]

          flex

          items-center

          justify-center

          text-center

          px-8

          sm:px-10
        "
      >

        <p
          className="
            uppercase

            tracking-[0.4em]

            sm:tracking-[0.45em]

            leading-loose

            text-[#8A776E]

            text-[10px]

            sm:text-xs
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
