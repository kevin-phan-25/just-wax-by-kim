/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Responsive navbar clearance
 * • Mobile / iPad / desktop spacing
 * • Preserves full hero image visibility
 * • Natural image scaling
 * • Editorial luxury spacing
 * • Balanced transition into About section
 *
 * ---
 */

import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        w-full

        pt-[calc(var(--nav-mobile)+3rem)]

        md:pt-[calc(var(--nav-tablet)+4rem)]

        xl:pt-[calc(var(--nav-desktop)+5rem)]

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
