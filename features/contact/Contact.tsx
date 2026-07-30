/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 * Luxury Contact Section – Clean & Themed
 * -----------------------------------------------------------------------------
 */
import ContactInfo from "./ContactInfo";
import ContactHours from "./ContactHours";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FCF8F3] py-20 lg:py-24"
    >
      {/* Decorative Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#D4A9B6]/5 blur-[70px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#E8DDD8] bg-white/70 px-5 py-2 text-sm uppercase tracking-[0.4em] text-[#8C5A6B]">
            Get In Touch
          </span>

          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight text-[#3B2A26]">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#8C7468]">
            Whether you're preparing for your first appointment or simply have a question, 
            we're here to make every interaction feel warm and personal.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#E8DDD8] bg-white/80 p-8 lg:p-12 shadow-luxury backdrop-blur-sm">
              <ContactInfo />
              <div className="my-10 h-px bg-[#E8DDD8]" />
              <ContactHours />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E8DDD8] bg-white/80 p-8 lg:p-12 shadow-luxury backdrop-blur-sm">
              <div className="mb-10 text-center">
                <h3 className="font-serif text-3xl text-[#3B2A26]">
                  Send a Message
                </h3>
                <p className="mx-auto mt-3 max-w-md text-base text-[#8C7468]">
                  We typically reply within a few hours during studio hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
