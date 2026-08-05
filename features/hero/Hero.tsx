/**
 *
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Added relative positioning for announcement anchor
 * • Responsive navbar clearance
 * • Preserves full hero image visibility
 * • Natural image scaling
 * • Editorial luxury spacing
 *
 * ---
 *
 */

import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative

        w-full

        pt-[calc(var(--nav-mobile)+5rem)]

        md:pt-[calc(var(--nav-tablet)+6rem)]

        xl:pt-[calc(var(--nav-desktop)+7rem)]

        pb-12

        md:pb-16

        xl:pb-20
      "
    >
      <div
        className="
          container-luxury

          w-full

          mx-auto

          px-5

          sm:px-6

          md:px-8

          lg:px-12

          xl:px-16
        "
      >
        <HeroImage />
      </div>
    </section>
  );
}
