import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex items-center
        pt-[72px] md:pt-[80px]
        overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/* Soft ambient wash — kept very light */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_75%_15%,rgba(232,200,188,0.28),transparent_50%)]
        "
      />

      <div className="container-luxury relative z-10 w-full">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-12
            gap-10 lg:gap-12 xl:gap-16
            items-center
            py-14 md:py-16 lg:py-20
          "
        >
          {/* Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </div>

      {/* Thin bottom rule */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(92%,1280px)] h-px bg-[#E8DDD8]"
      />
    </section>
  );
}
