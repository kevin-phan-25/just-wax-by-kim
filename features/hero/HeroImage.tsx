import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
      {/* Soft floating frame — more balanced aspect */}
      <div
        className="
          relative aspect-[4/5]
          overflow-hidden rounded-[28px]
          border border-[#E8DDD8]
          shadow-[0_28px_70px_rgba(59,42,38,0.08)]
          bg-[#F6E7E1]
        "
      >
        <Image
          src="/hero/hero-main.jpg"
          alt="Just Wax by Kim — refined luxury waxing experience"
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 560px"
          className="object-cover object-center"
        />

        {/* Very light bottom wash */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-t from-[#3B2A26]/10 via-transparent to-transparent
          "
        />
      </div>

      {/* Decorative accent line under image */}
      <div
        aria-hidden
        className="
          absolute -bottom-5 left-1/2 -translate-x-1/2
          w-16 h-px bg-[#D4A9B6]
        "
      />
    </div>
  );
}
