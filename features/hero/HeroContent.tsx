/**
 * -----------------------------------------------------------------------------
 * File: HeroContent.tsx
 *
 * Changes:
 * - July 28, 2026
 *   - Tighter spacing so content feels more cohesive under the navbar
 *
 * -----------------------------------------------------------------------------
 */
import Logo from "@/components/ui/Logo";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center">
      <Logo size="lg" />

      <p
        className="
          mt-8
          text-xs md:text-sm
          uppercase tracking-[0.4em]
          text-brand-taupe
        "
      >
        Luxury Wax Studio
      </p>

      <h1
        className="
          mt-4
          font-serif
          text-5xl md:text-7xl
          leading-[1.1]
          text-brand-espresso
        "
      >
        More Than
        <br />
        Just A Wax
      </h1>

      <p
        className="
          mt-5
          max-w-lg
          text-base md:text-lg
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
