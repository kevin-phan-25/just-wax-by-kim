/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury Contact Section
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * • Removed width restrictions
 * • Converted to 3-column editorial layout
 * • Removed boxed dashboard appearance
 * • Unified luxury studio aesthetic
 * • Responsive layout
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

        bg-[#FCF8F3]

        section-padding-lg
      "
    >

      {/* Decorative Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-[#F6E7E1]

          opacity-40

          blur-3xl
        "
      />


      <div
        className="
          relative

          container-luxury
        "
      >


        {/* Header */}
        <header
          className="
            text-center
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
              mt-6

              text-4xl
              md:text-5xl
              lg:text-6xl

              font-medium

              tracking-[-0.04em]

              text-[#3B2A26]
            "
          >
            We'd Love To Hear From You
          </h2>


          <p
            className="
              mx-auto

              mt-6

              max-w-none

              text-base
              md:text-lg

              leading-relaxed

              text-[#6F5A50]
            "
          >
            Whether you're preparing for your first appointment or simply
            have a question, we're here to make every interaction feel warm,
            welcoming, and beautifully personal.
          </p>

        </header>



        {/* Three Column Layout */}
        <div
          className="
            mt-20

            grid

            gap-12

            lg:grid-cols-3

            lg:gap-16
          "
        >


          {/* Column 1 */}
          <div
            className="
              border-t

              border-[#E8DDD8]

              pt-10
            "
          >
            <ContactInfo />
          </div>



          {/* Column 2 */}
          <div
            className="
              border-t

              border-[#E8DDD8]

              pt-10
            "
          >
            <ContactHours />
          </div>



          {/* Column 3 */}
          <div
            className="
              border-t

              border-[#E8DDD8]

              pt-10
            "
          >

            <div
              className="
                text-center
              "
            >

              <h3
                className="
                  text-3xl

                  font-medium

                  tracking-tight

                  text-[#3B2A26]
                "
              >
                Send A Message
              </h3>


              <p
                className="
                  mt-4

                  leading-relaxed

                  text-[#6F5A50]
                "
              >
                We typically respond within a few hours during normal
                business hours.
              </p>

            </div>


            <div
              className="
                mt-10
              "
            >
              <ContactForm />
            </div>

          </div>


        </div>

      </div>

    </section>
  );
}
