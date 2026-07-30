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
 * - Centered page heading
 * - Removed fixed width restrictions
 * - Unified luxury spacing
 * - Improved hero image with fill + fixed height container
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
        w-full
      "
    >

      {/* CATEGORY HERO IMAGE */}
      <div
        className="
          relative
          w-full
          h-[420px]
          overflow-hidden
          rounded-[2px]
          mb-20
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="
            object-cover
            object-center
          "
        />

        {/* Luxury Gradient Overlay */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#2D211D]/30
            via-transparent
            to-[#2D211D]/10
          "
        />

        {/* Soft Bottom Fade */}
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
          px-6
          text-center
          mb-20
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
            max-w-3xl
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
          px-6
        "
      >
        <ServiceGrid services={services} />
      </div>

    </section>
  );
}
