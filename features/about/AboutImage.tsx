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

          -inset-5

          sm:-inset-6

          rounded-[2.5rem]

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

          rounded-[2rem]

          sm:rounded-[2.5rem]

          border

          border-[#E8DDD8]

          bg-[#F4E9E4]

          shadow-[0_30px_80px_-30px_rgba(59,42,38,0.25)]

          flex

          items-center

          justify-center

          text-center

          px-6

          sm:px-8
        "
      >

        <p
          className="
            uppercase

            tracking-[0.4em]

            sm:tracking-[0.45em]

            text-[10px]

            sm:text-xs

            leading-loose

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
