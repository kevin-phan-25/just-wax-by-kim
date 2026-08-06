/**
 * ---
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Luxury responsive hero section.
 *
 * Updates:
 * • Integrated homepage announcement
 * • Announcement positioned between Navbar and Hero image
 * • Announcement scrolls naturally with hero
 * • Preserves navbar clearance
 * • Preserves full hero image visibility
 * • Editorial luxury spacing
 *
 * ---
 */

import Announcement from "@/components/layout/Announcement";

import HeroImage from "./HeroImage";


export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative

        w-full

        pt-[calc(var(--nav-mobile)+1rem)]

        md:pt-[calc(var(--nav-tablet)+1.5rem)]

        xl:pt-[calc(var(--nav-desktop)+2rem)]

        pb-12

        md:pb-16

        xl:pb-20
      "
    >

      {/* ANNOUNCEMENT */}

      <div
        className="
          relative

          flex

          justify-center

          items-center

          h-[90px]

          sm:h-[110px]

          md:h-[130px]

          xl:h-[150px]
        "
      >

        <Announcement />

      </div>



      {/* HERO IMAGE */}

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
