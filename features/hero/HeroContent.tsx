/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial text block for the hero (brand lockup, lead, CTAs).
 *
 * Changes (July 29, 2026):
 * • Moved to right side of hero
 * • Centered on mobile, left-aligned on desktop
 * • Tighter max-width for proportion
 * • Refined type scale and spacing
 * -----------------------------------------------------------------------------
 */
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="max-w-[380px] mx-auto lg:mx-0 lg:ml-4 xl:ml-8 text-center lg:text-left">
      {/* Eyebrow */}
      <p className="eyebrow mb-5">
        Luxury Waxing Studio
      </p>

      {/* Brand lockup */}
      <h1 className="heading-luxury">
        <span className="block text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.035em]">
          Just Wax
        </span>
        <span
          className="
            script mt-1.5 block
            text-[clamp(1.5rem,3vw,2.15rem)]
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

      {/* Lead */}
      <p className="lead !text-[1rem] !leading-[1.85] mx-auto lg:mx-0">
        Every appointment is tailored
        <br className="hidden sm:block" />
        exclusively for you.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
        <HeroButtons />
      </div>

      {/* Scroll cue */}
      <div className="mt-12 hidden lg:flex items-center gap-3 text-[#9A857A]">
        <span className="text-[0.6rem] uppercase tracking-[0.26em] font-medium">
          Scroll
        </span>
        <span className="block h-6 w-px bg-[#E8DDD8]" />
      </div>
    </div>
  );
}
