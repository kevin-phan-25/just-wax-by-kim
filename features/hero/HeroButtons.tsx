import Link from "next/link";

export function HeroButtons() {
  return (
    <>
      <Link href="#booking" className="btn-primary">
        Book Appointment
      </Link>
      <Link href="#services" className="btn-secondary">
        View Services
      </Link>
    </>
  );
}
