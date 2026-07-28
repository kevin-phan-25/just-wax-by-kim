/**
 * -----------------------------------------------------------------------------
 * File:
 * HeroContent.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Removed logo
 *   - Centered around the brand quote
 *   - Replaced gold accent with luxury mauve accent
 *   - Reduced spacing for tighter hero layout
 *
 * -----------------------------------------------------------------------------
 */

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Eyebrow */}
      <p
        className="
          text-xs
          md:text-sm
          uppercase
          tracking-[0.35em]
          text-[#8C5A6B]
        "
      >
        Luxury Wax Studio
      </p>

      {/* Main Headline */}
      <h1
        className="
          mt-4
          font-serif
          text-4xl
          md:text-6xl
          lg:text-7xl
          leading-[1.1]
          text-brand-espresso
        "
      >
        More Than
        <br />
        Just A Wax
      </h1>

      {/* Supporting line */}
      <p
        className="
          mt-4
          max-w-md
          text-sm
          md:text-base
          leading-relaxed
          text-brand-taupe
        "
      >
        A personalized waxing experience designed around comfort,
        confidence, and you.
      </p>

    </div>
  );
}
