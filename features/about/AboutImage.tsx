/**
 * ---
 * File:
 * features/about/AboutImage.tsx
 *
 * Description:
 * Luxury portrait component.
 *
 * Updates:
 * • Responsive sizing
 * • Editorial portrait frame
 * • Balanced desktop/mobile appearance
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

      <div
        aria-hidden
        className="
          absolute

          -inset-6

          rounded-[3rem]

          bg-[#E8DDD8]/40

          blur-3xl
        "
      />


      <div
        className="
          relative

          aspect-[4/5]

          w-full

          overflow-hidden

          rounded-[2.5rem]

          border

          border-[#E8DDD8]

          bg-[#F4E9E4]

          shadow-[0_40px_100px_-30px_rgba(59,42,38,0.25)]

          flex

          items-center

          justify-center

          text-center

          px-8
        "
      >

        <p
          className="
            uppercase

            tracking-[0.45em]

            leading-loose

            text-xs

            text-[#8A776E]
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
