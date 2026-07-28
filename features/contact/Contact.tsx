/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 * Luxury Contact Section – Elegant & Refined
 * -----------------------------------------------------------------------------
 */
import ContactInfo from "./ContactInfo";
import ContactHours from "./ContactHours";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-cream py-28 lg:py-36"
    >
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-dusty-pink/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-96 w-96 rounded-full bg-brand-plum/5 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-border bg-white/70 px-6 py-2.5 text-xs uppercase tracking-[0.4em] text-brand-dusty-pink shadow-sm">
            Get In Touch
          </span>

          <h2 className="mt-8 font-serif text-5xl leading-tight text-brand-espresso md:text-6xl lg:text-7xl">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-taupe">
            Whether you're preparing for your first appointment or simply have a
            question, we’re here to make every interaction feel warm and personal.
          </p>
        </div>
