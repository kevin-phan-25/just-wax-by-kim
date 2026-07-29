/**
 * -----------------------------------------------------------------------------
 * File: features/hero/HeroContent.tsx
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial text block for the hero.
 *
 * Changes (July 29, 2026):
 * • Removed CTA buttons
 * • Removed scroll cue
 * • Redesigned as luxury brand introduction
 * • Increased editorial spacing and elegance
 * -----------------------------------------------------------------------------
 */

export function HeroContent() {
  return (
    <div className="max-w-[430px] mx-auto lg:mx-0 lg:ml-4 xl:ml-8 text-center lg:text-left">

      {/* Eyebrow */}
      <p className="eyebrow mb-6">
        Luxury Waxing Studio
      </p>


      {/* Brand lockup */}
      <h1 className="heading-luxury">

        <span
          className="
            block
            text-[clamp(2.7rem,5vw,4rem)]
            leading-[1.02]
            tracking-[-0.045em]
          "
        >
          Just Wax
        </span>

        <span
          className="
            script mt-2 block
            text-[clamp(1.7rem,3vw,2.3rem)]
            leading-none
            text-[#8C5A6B]
            font-normal
          "
        >
          by Kim
        </span>

      </h1>


      {/* Divider */}
      <div className="luxury-line mx-auto lg:mx-0 my-7" />


      {/* Luxury statement */}
      <p
        className="
          lead
          !text-[1.05rem]
          !leading-[1.9]
          mx-auto lg:mx-0
          max-w-[360px]
        "
      >
        A timeless beauty experience
        <br className="hidden sm:block" />
        crafted to leave you feeling confident, 
        radiant, and beautifully cared for.
      </p>


      {/* Signature detail */}
      <div
        className="
          mt-9
          flex
          items-center
          justify-center
          lg:justify-start
          gap-3
          text-[#9A857A]
        "
      >
        <span className="h-px w-8 bg-[#D4A9B6]" />

        <span
          className="
            text-[0.62rem]
            uppercase
            tracking-[0.28em]
            font-medium
          "
        >
          Personalized Care
        </span>

        <span className="h-px w-8 bg-[#D4A9B6]" />
      </div>

    </div>
  );
}
