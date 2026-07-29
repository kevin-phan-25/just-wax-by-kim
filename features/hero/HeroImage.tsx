import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Soft floating frame */}
      <div
        className="
          relative aspect-[4/5] lg:aspect-[5/6]
          overflow-hidden rounded-[32px]
          border border-[#E8DDD8]
          shadow-floating
          bg-[#F6E7E1]
        "
      >
        <Image
          src="/hero/hero-main.jpg"
          alt="Just Wax by Kim — refined luxury waxing experience"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 55vw"
          className="object-cover object-center"
        />

        {/* Subtle top-to-bottom wash for text legibility if needed later */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-t from-[#3B2A26]/15 via-transparent to-transparent
          "
        />
      </div>

      {/* Decorative thin accent line */}
      <div
        aria-hidden
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          w-24 h-px bg-[#D4A9B6]
        "
      />
    </div>
  );
}
