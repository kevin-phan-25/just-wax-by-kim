/**
 *
 * ---
 * File:
 * components/layout/Announcement.tsx
 *
 * Description:
 * Homepage luxury slogan banner.
 *
 * Updates:
 * • Uses official slogan graphic
 * • Responsive sizing
 * • Homepage only
 *
 * ---
 *
 */

import Image from "next/image";


export default function Announcement() {
  return (
    <section
      className="
        w-full

        flex
        justify-center
        items-center

        bg-[#FCF8F3]

        py-3

        sm:py-4

        md:py-5
      "
    >

      <Image
        src="/hero/slogan_banner.jpg"
        alt="Where every service is tailored just for you"

        width={1600}
        height={220}

        priority

        className="
          w-[85%]

          sm:w-[75%]

          md:w-[65%]

          lg:w-[55%]

          xl:w-[45%]

          h-auto

          object-contain
        "
      />

    </section>
  );
}
