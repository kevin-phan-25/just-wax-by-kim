/**
 * -----------------------------------------------------------------------------
 * File:
 * features/hero/Hero.tsx
 *
 * Description:
 * Full-width luxury hero banner.
 *
 * Updates:
 * • Matches responsive navbar height
 * • Adds controlled breathing room below navigation
 * • Stabilizes hero image placement
 * • Improves desktop/tablet/mobile spacing
 * • Keeps editorial luxury layout
 * -----------------------------------------------------------------------------
 */

import { HeroImage } from "./HeroImage";


export default function Hero() {

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden

        pb-20
        md:pb-24
        xl:pb-28
      "
    >


      {/* Ambient background wash */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.28),transparent_55%)]
        "
      />



      {/* Navbar clearance */}
      <div
        className="
          h-[150px]

          md:h-[180px]

          xl:h-[216px]
        "
      />



      {/* Hero image container */}
      <div
        className="
          container-luxury

          relative

          z-10
        "
      >

        <div
          className="
            relative

            h-[420px]

            sm:h-[520px]

            lg:h-[620px]

            xl:h-[700px]

            overflow-hidden

            rounded-[2rem]

            shadow-[0_30px_90px_rgba(59,42,38,0.12)]
          "
        >

          <HeroImage />

        </div>


      </div>



      {/* Editorial divider */}
      <div
        aria-hidden
        className="
          absolute

          bottom-0

          left-1/2

          -translate-x-1/2

          w-[min(92%,1200px)]

          h-px

          bg-[#E8DDD8]
        "
      />


    </section>
  );

}
