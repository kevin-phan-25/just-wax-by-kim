/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury Contact Section
 *
 * Changes:
 * - July 30, 2026
 *   • Removed fixed sizing constraints
 *   • Removed duplicate wrappers
 *   • Uses same editorial spacing as Hero/About/Services
 *   • Responsive two-column layout
 *   • Unified luxury theme
 * -----------------------------------------------------------------------------
 */

import ContactForm from "./ContactForm";
import ContactHours from "./ContactHours";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-brand-ivory
        py-24
        lg:py-32
      "
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[34rem]
            w-[34rem]
            -translate-x-1/2
            rounded-full
            bg-brand-dusty-pink/10
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          container-luxury
        "
      >
        {/* Header */}
        <header
          className="
            mx-auto
            text-center
            space-y-6
          "
        >
          <span
            className="
              service-eyebrow
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              heading-luxury
              text-brand-espresso
            "
          >
            We'd Love To Hear From You
          </h2>

          <p
            className="
              lead
            "
          >
            Whether you're preparing for your first appointment or simply
            have a question, we're here to make every interaction feel warm,
            welcoming, and beautifully personal.
          </p>
        </header>

        {/* Content */}
        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            items-start
          "
        >
          {/* Contact Information */}
          <aside
            className="
              rounded-[2rem]
              border
              border-brand-border
              bg-white/70
              backdrop-blur-sm
              p-8
              lg:p-10
            "
          >
            <ContactInfo />

            <div
              className="
                my-10
                h-px
                bg-brand-border
              "
            />

            <ContactHours />
          </aside>

          {/* Contact Form */}
          <div
            className="
              rounded-[2rem]
              border
              border-brand-border
              bg-white/70
              backdrop-blur-sm
              p-8
              lg:p-10
            "
          >
            <div
              className="
                text-center
                space-y-4
              "
            >
              <h3
                className="
                  font-serif
                  text-3xl
                  text-brand-espresso
                "
              >
                Send a Message
              </h3>

              <p
                className="
                  text-brand-taupe
                  leading-relaxed
                "
              >
                We typically respond within a few hours during normal
                business hours.
              </p>
            </div>

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
