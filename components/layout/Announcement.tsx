"use client";

export default function Announcement() {
  return (
    <div
      className="
        pointer-events-none

        absolute

        left-1/2
        -translate-x-1/2

        top-8
        md:top-10
        xl:top-12

        z-10
      "
    >
      <img
        src="/hero/slogan_banner_01.png"
        alt="Where every service is tailored just for you"
        className="
          block

          w-[82vw]

          sm:w-[75vw]

          md:w-[600px]

          xl:w-[700px]

          max-w-[700px]

          h-auto

          object-contain
        "
      />
    </div>
  );
}
