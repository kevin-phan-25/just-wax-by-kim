import Hero from "@/features/hero";
import About from "@/features/about";
import Services from "@/features/services/Services";
import { Booking } from "@/features/booking";
import Announcement from "@/components/layout/Announcement";

export default function Home() {
  return (
    <>
      {/* HERO AREA */}
      <section className="relative overflow-visible">
        {/* FLOATING HOMEPAGE SLOGAN */}
        <Announcement />

        {/* HERO */}
        <Hero />
      </section>

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* BOOKING */}
      <Booking />
    </>
  );
}
