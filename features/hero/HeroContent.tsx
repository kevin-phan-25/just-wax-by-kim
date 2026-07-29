import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="max-w-[420px] mx-auto lg:mx-0 text-center lg:text-left">
      {/* Eyebrow */}
      <p className="eyebrow mb-5">
        Luxury Waxing Studio
      </p>

      {/* Brand lockup — tighter, more refined */}
      <h1 className="heading-luxury">
        <span className="block text-[clamp(2.6rem,5.5vw,4.1rem)] leading-[1.05] tracking-[-0.035em]">
          Just Wax
        </span>
        <span
          className="
            script mt-1.5 block
            text-[clamp(1.65rem,3.2vw,2.35rem)]
            leading-none
            text-[#8C5A6B]
            font-normal
          "
        >
          by Kim
        </span>
      </h1>

      {/* Thin refined divider */}
      <div className="luxury-line mx-auto lg:mx-0 my-6" />

      {/* Lead — short and calm */}
      <p className="lead !text-[1.02rem] !leading-[1.85] mx-auto lg:mx-0">
        Every appointment is tailored
        <br className="hidden sm:block" />
        exclusively for you.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
        <HeroButtons />
      </div>

      {/* Scroll cue — subtle */}
      <div className="mt-14 hidden lg:flex items-center gap-3 text-[#9A857A]">
        <span className="text-[0.62rem] uppercase tracking-[0.26em] font-medium">
          Scroll
        </span>
        <span className="block h-7 w-px bg-[#E8DDD8]" />
      </div>
    </div>
  );
}
