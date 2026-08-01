/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Clears fixed navbar + oversized logo
 * • ~¾ inch gap under nav (≈72px)
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
        Spacer = navbar height (or logo if taller) + ~¾″ (72px)
        Mobile nav 110 / logo 105 → 110 + 72 = 182
        sm logo 125 → 125 + 72 = 197
        md nav 140 / logo 150 → 150 + 72 = 222
        lg logo 175 → 175 + 72 = 247
        xl nav 168 / logo 200 → 200 + 72 = 272
      */}
      <div
        aria-hidden="true"
        className="
          w-full
          shrink-0
          h-[182px]
          sm:h-[197px]
          md:h-[222px]
          lg:h-[247px]
          xl:h-[272px]
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
