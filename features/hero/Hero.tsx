/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Added larger navbar breathing room
 * • Pushes hero image below navigation
 * • Prevents navbar overlap
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
        pt-[140px]
        sm:pt-[160px]
        md:pt-[190px]
        lg:pt-[220px]
        xl:pt-[250px]
        pb-10
        overflow-hidden
      "
    >
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
