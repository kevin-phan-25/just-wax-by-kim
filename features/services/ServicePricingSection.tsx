/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/ServicePricingSection.tsx
 *
 * Description:
 * Luxury service pricing presentation section.
 *
 * Changes:
 *
 * - Added category hero image support
 * - Reduced hero image height
 * - Matched hero spacing rhythm
 * - Centered service presentation
 * - Removed fixed width restrictions
 * - Unified luxury spacing
 *
 * -----------------------------------------------------------------------------
 */

import Image from "next/image";
import ServiceGrid from "./ServiceGrid";
import type { Service } from "./services.types";

interface ServicePricingSectionProps {
  id: string;
  image: string;
  title: string;
  description: string;
  services: Service[];
}

export default function ServicePricingSection({
  id,
  image,
  title,
  description,
  services,
}: ServicePricingSectionProps) {
  return (
    <section
      id={id}
      className="
        relative
        overflow-hidden
        w-full
        pb-24
      "
    >

      {/* Navbar transition spacer */}
      <div
        className="
          h-[216px]
        "
      />


      {/* CATEGORY HERO IMAGE */}
      <div
        className="
          relative
          mx-auto
          w-full
          h-[220px]
          overflow-hidden
          rounded-[2px]
          mb-16
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          priority
          className="
            object-cover
            object-center
          "
        />

        {/* Luxury Overlay */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#2D211D]/25
            via-transparent
            to-[#2D211D]/10
          "
        />

        <div
          aria-hidden
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#3B2A26]/20
            via-transparent
            to-transparent
          "
        />
      </div>


      {/* HEADER */}
      <div
        className="
          w-full
          text-center
          mb-16
        "
      >
        <h1
          className="
            font-serif
            text-4xl
            md:text-5xl
            text-[#3B2A26]
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-6
            mx-auto
            text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          {description}
        </p>
      </div>


      {/* SERVICES */}
      <div
        className="
          w-full
          text-center
        "
      >
        <ServiceGrid services={services} />
      </div>


      {/* Bottom divider */}
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
