/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Clears fixed navbar
 * • ~¾ inch gap under nav (0.75in)
 * • Responsive phone / iPad / desktop
 * • Keeps image natural height
 *
 * ---
 */

import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        bg-[#FBF7F4]
        pb-10
        overflow-hidden
      "
    >
      {/*
        Spacer = navbar height + 0.75in
        nav: 110px → md 140px → xl 168px
      */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[calc(110px+0.75in)]
          md:h-[calc(140px+0.75in)]
          xl:h-[calc(168px+0.75in)]
        "
      />

      <div
        className="
          container-luxury
          w-full
          mx-auto
          px-4
          md:px-6
          lg:px-8
        "
      >
        <HeroImage />
      </div>
    </section>
  );
}
