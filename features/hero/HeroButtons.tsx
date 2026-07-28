import Link from "next/link";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-6
        flex
        flex-wrap
        items-center
        justify-center
        gap-4
      "
    >

      <Link
        href="#booking"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#8C5A6B]
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-[#734454]
          hover:-translate-y-0.5
          hover:shadow-md
        "
      >
        Book Your Appointment
      </Link>


      <Link
        href="#services"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#8C5A6B]
          px-8
          py-3.5
          text-sm
          font-medium
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-[#734454]
          hover:-translate-y-0.5
          hover:shadow-md
        "
      >
        Explore Services
      </Link>

    </div>
  );
}
