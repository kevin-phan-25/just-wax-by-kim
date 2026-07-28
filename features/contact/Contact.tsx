/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury contact section.
 *
 * Redesigned:
 * - Elegant centered header
 * - Spacious luxury layout
 * - Premium card spacing
 * - Better visual hierarchy
 * - Responsive two-column layout
 *
 * -----------------------------------------------------------------------------
 */

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHours from "./ContactHours";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-brand-cream
        py-32
      "
    >
      {/* Decorative Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-brand-dusty-pink/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-block
              rounded-full
              border
              border-brand-border
              bg-white/70
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.35em]
              text-brand-dusty-pink
              shadow-sm
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mt-8
              font-serif
              text-5xl
              leading-tight
              text-brand-espresso
              md:text-6xl
            "
          >
            We'd Love To Hear From You
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-brand-taupe
            "
          >
            Whether you're preparing for your first appointment or simply have a
            question about our services, we're here to make every step feel
            welcoming, comfortable, and beautifully personal.
          </p>
        </div>

        {/* Content */}

        <div
          className="
            mt-24
            grid
            gap-10
            lg:grid-cols-[0.95fr_1.05fr]
            items-start
          "
        >
          {/* Contact Card */}

          <div
            className="
              rounded-[36px]
              border
              border-brand-border
              bg-white/80
              p-12
              shadow-luxury
              backdrop-blur-sm
            "
          >
            <ContactInfo />

            <div
              className="
                my-12
                h-px
                bg-brand-border
              "
            />

            <ContactHours />
          </div>

          {/* Form Card */}

          <div
            className="
              rounded-[36px]
              border
              border-brand-border
              bg-white/80
              p-12
              shadow-luxury
              backdrop-blur-sm
            "
          >
            <div className="text-center">
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
                  mx-auto
                  mt-4
                  max-w-md
                  leading-7
                  text-brand-taupe
                "
              >
                We'd be delighted to answer your questions and help you choose
                the services that are right for you.
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
