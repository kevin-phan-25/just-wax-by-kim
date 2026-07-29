import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-[100svh] flex items-center
        pt-[88px] overflow-hidden
        bg-[#FCF8F3]
      "
    >
      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_70%_20%,rgba(232,200,188,0.35),transparent_55%)]
        "
      />

      <div className="container-luxury relative z-10 w-full">
        <div className="
          grid grid-cols-1 lg:grid-cols-12
          gap-12 lg:gap-8
          items-center
          min-h-[calc(100svh-88px)]
          py-16 lg:py-20
        ">
          {/* Content — editorial left */}
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Image — large, breathing */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
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
