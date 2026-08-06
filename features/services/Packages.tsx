/**
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Packages title aligned with package offers
 * • Compact single-line luxury layout
 * • Responsive wrapping on mobile
 * • Reduced visual footprint
 *
 * ---
 */

export default function Packages() {
  return (
    <section className="py-6">
      <div
        className="
          container-luxury
          text-center
        "
      >
        <div
          className="
            flex
            flex-wrap
            justify-center
            items-center

            gap-x-6
            gap-y-2

            text-sm
            sm:text-base
          "
        >
          <span
            className="
              uppercase
              tracking-[0.18em]
              font-semibold
              text-[#3B2A26]
            "
          >
            Packages
          </span>

          <span
            className="
              text-[#8C5A6B]
            "
          >
            <strong>3 Visits</strong> • Save 5%
          </span>

          <span
            className="
              text-[#8C5A6B]
            "
          >
            <strong>5 Visits</strong> • Save 10%
          </span>
        </div>

        <p
          className="
            mx-auto

            mt-3

            max-w-2xl

            text-xs
            sm:text-sm

            leading-relaxed

            text-[#8C7468]
          "
        >
          Designed to help you maintain a consistent waxing routine.
          Packages are non-transferable, valid only for the service
          purchased, and expire 12 months from the date of purchase.
        </p>
      </div>
    </section>
  );
}
