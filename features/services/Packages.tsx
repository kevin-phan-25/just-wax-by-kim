/**
 *
 * ---
 * File:
 * features/services/Packages.tsx
 *
 * Description:
 * Waxing package information section.
 *
 * Updates:
 * • Reusable across Ladies/Gentlemen pricing pages
 * • Luxury editorial styling
 * • No card styling
 * • Matches pricing menu aesthetic
 *
 * ---
 *
 */

export default function Packages() {
  return (
    <section
      className="
        mb-10
        sm:mb-12
      "
    >
      <div
        className="
          mx-auto
          max-w-3xl
          border-b
          border-[#E8DDD8]
          pb-8
          text-center
        "
      >
        <h2
          className="
            font-serif
            text-xl
            sm:text-2xl
            text-[#3B2A26]
          "
        >
          Packages
        </h2>


        <div
          className="
            mt-4
            space-y-1
            text-sm
            sm:text-base
            text-[#8C5A6B]
          "
        >
          <p>
            <strong>
              3 Visits • Save 5%
            </strong>
          </p>

          <p>
            <strong>
              5 Visits • Save 10%
            </strong>
          </p>
        </div>


        <p
          className="
            mx-auto
            mt-4
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
