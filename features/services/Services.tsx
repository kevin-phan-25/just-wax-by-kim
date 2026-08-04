/**
 *
 * ---
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Matched Ladies/Gentlemen image sizing
 * • Added consistent aspect ratio cards
 * • Reduced mobile footprint
 * • Updated luxury text overlays
 * • Matched Playfair Display typography
 * • Switched overlay branding font to Allura script style
 * • Reduced overlay title size by 30%
 * • Responsive phone / iPad / desktop optimized
 *
 * ---
 *
 */

import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F3]

        pt-12
        sm:pt-14
        md:pt-16
        xl:pt-20

        pb-16
        sm:pb-20
        md:pb-24
      "
    >
      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full

          px-5
          sm:px-8
          md:px-10
          lg:px-16
          xl:px-24
        "
      >
        {/* HEADER */}
        <header
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <span
            className="
              uppercase
              tracking-[0.4em]
              text-xs
              md:text-sm
              text-[#8C5A6B]
            "
          >
            Our Services
          </span>

          <h2
            className="
              mt-6
              max-w-5xl

              font-[var(--font-playfair)]

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-[1.1]
              tracking-[-0.03em]

              text-[#3B2A26]
            "
          >
            Luxury Waxing For Everyone
          </h2>

          <p
            className="
              mt-6
              max-w-3xl

              text-center

              text-base
              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            Professional waxing services tailored to your needs, with a focus
            on precision, comfort, and lasting confidence.
          </p>
        </header>

        {/* SERVICE OPTIONS */}
        <div
          className="
            mt-14

            md:mt-16

            xl:mt-20

            grid

            grid-cols-1

            md:grid-cols-2

            gap-10

            xl:gap-16

            items-start

            justify-items-center
          "
        >
          {/* LADIES */}
          <Link
            href="/services/ladies"
            className="
              group
              relative

              w-[60%]

              sm:w-[70%]

              md:w-full

              max-w-[650px]

              overflow-hidden

              rounded-[28px]

              transition-transform

              duration-500

              hover:-translate-y-1
            "
          >
            <div
              className="
                relative

                aspect-[4/5]

                overflow-hidden

                rounded-[28px]
              "
            >
              <img
                src="/images/services/ladies-view-pricing.jpg"
                alt="Ladies luxury waxing services"
                className="
                  absolute

                  inset-0

                  h-full

                  w-full

                  object-cover

                  transition-transform

                  duration-700

                  group-hover:scale-[1.03]
                "
              />

              <div
                className="
                  absolute

                  inset-x-0

                  bottom-0

                  bg-gradient-to-t

                  from-black/60

                  via-black/20

                  to-transparent

                  px-6

                  pb-8

                  pt-24

                  text-center
                "
              >
                <span
                  className="
                    font-[var(--font-allura)]

                    text-3xl

                    sm:text-4xl

                    md:text-5xl

                    lg:text-6xl

                    tracking-wide

                    text-white

                    drop-shadow-[0_4px_18px_rgba(59,42,38,0.45)]
                  "
                >
                  Ladies
                </span>
              </div>
            </div>
          </Link>

          {/* GENTLEMEN */}
          <Link
            href="/services/gentlemen"
            className="
              group
              relative

              w-[60%]

              sm:w-[70%]

              md:w-full

              max-w-[650px]

              overflow-hidden

              rounded-[28px]

              transition-transform

              duration-500

              hover:-translate-y-1
            "
          >
            <div
              className="
                relative

                aspect-[4/5]

                overflow-hidden

                rounded-[28px]
              "
            >
              <img
                src="/images/services/gentlement-view-pricing.jpg"
                alt="Gentlemen luxury waxing services"
                className="
                  absolute

                  inset-0

                  h-full

                  w-full

                  object-cover

                  transition-transform

                  duration-700

                  group-hover:scale-[1.03]
                "
              />

              <div
                className="
                  absolute

                  inset-x-0

                  bottom-0

                  bg-gradient-to-t

                  from-black/60

                  via-black/20

                  to-transparent

                  px-6

                  pb-8

                  pt-24

                  text-center
                "
              >
                <span
                  className="
                    font-[var(--font-allura)]

                    text-3xl

                    sm:text-4xl

                    md:text-5xl

                    lg:text-6xl

                    tracking-wide

                    text-white

                    drop-shadow-[0_4px_18px_rgba(59,42,38,0.45)]
                  "
                >
                  Gentlemen
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
