import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="
        bg-gradient-to-b
        from-brand-cream
        via-[#FDF8F7]
        to-brand-rose/20
        px-6
        py-20
        md:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          grid
          md:grid-cols-2
          gap-12
          md:gap-20
          items-center
        "
      >
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}
