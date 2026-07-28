/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 * Luxury Contact Section – Improved Centering & Layout
 * -----------------------------------------------------------------------------
 */
import ContactInfo from "./ContactInfo";
import ContactHours from "./ContactHours";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-cream py-20 lg:py-24"
    >
      {/* Decorative Background Glow - Softer & Less Intrusive */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-brand-dusty-pink/4 blur-[70px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-border bg-white/70 px-5 py-2 text-xs uppercase tracking-[0.4em] text-brand-dusty-pink">
            Get In Touch
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-brand-espresso md:text-5xl">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-brand-taupe px-4">
            Whether you're preparing for your first appointment or simply have a question, 
            we're here to make every interaction feel warm and personal.
          </p>
        </div>

        {/* Content Grid - Form shifted right */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-brand-border bg-white/80 p-9 lg:p-12 shadow-luxury backdrop-blur-sm">
              <ContactInfo />
              <div className="my-10 h-px bg-brand-border" />
              <ContactHours />
            </div>
          </div>

          {/* Right Column - Form (shifted more right) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-border bg-white/80 p-9 lg:p-12 shadow-luxury backdrop-blur-sm">
              <div className="mb-10 text-center">
                <h3 className="font-serif text-3xl text-brand-espresso">
                  Send a Message
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-brand-taupe">
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
