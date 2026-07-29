import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
      {/* Eyebrow */}
      <p className="eyebrow mb-6">
        Luxury Waxing Studio
      </p>

      {/* Main brand lockup */}
      <h1 className="heading-luxury">
        <span className="block text-[clamp(2.75rem,6.5vw,4.75rem)] tracking-[-0.04em]">
          Just Wax
        </span>
        <span
          className="
            script mt-2 block
            text-[clamp(1.85rem,4vw,2.75rem)]
            text-[#8C5A6B]
            font-normal
          "
        >
          by Kim
        </span>
      </h1>

      {/* Thin refined divider */}
      <div className="luxury-line mx-auto lg:mx-0" />

      {/* Lead — sparse, editorial */}
      <p className="lead mx-auto lg:mx-0 mt-2">
        Every appointment is tailored
        <br className="hidden sm:block" />
        exclusively for you.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
        <HeroButtons />
      </div>

      {/* Scroll cue */}
      <div className="mt-16 hidden lg:flex items-center gap-3 text-[#9A857A]">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] font-medium">
          Scroll
        </span>
        <span className="block h-8 w-px bg-[#E8DDD8]" />
      </div>
    </div>
  );
}
