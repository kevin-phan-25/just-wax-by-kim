import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        items-center
        justify-center
        px-6
        pt-20
        pb-24
        bg-brand-cream
      "
    >

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          mx-auto
          text-center
        "
      >

        <HeroContent />

        <HeroButtons />

      </div>

    </section>
  );
}
