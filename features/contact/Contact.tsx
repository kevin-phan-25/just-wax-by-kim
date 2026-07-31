/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Changes:
 * • Converted from homepage section
 * • Removed anchor dependency
 * • Added full-page editorial layout
 * • Preserved 3-column contact structure
 * • Matches Gallery / Testimonials / FAQ architecture
 *
 * -----------------------------------------------------------------------------
 */

import ContactForm from "./ContactForm";
import ContactHours from "./ContactHours";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FCF8F3]
        py-24
        md:py-32
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-0
          left-1/2
          h-[600px]
          w-[600px]
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
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-[#8C5A6B]
            "
          >
            Get In Touch
          </p>


          <h1
            className="
              mt-6
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            We'd Love To Hear From You
          </h1>


          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-[#8C7468]
            "
          >
            Whether you're preparing for your first appointment
            or simply have a question, we're here to make every
            interaction feel warm, welcoming, and beautifully personal.
          </p>

        </header>



        {/* CONTACT GRID */}
        <div
          className="
            mt-20
            grid
            gap-12
            lg:grid-cols-3
            lg:gap-16
          "
        >


          {/* CONTACT INFORMATION */}
          <div
            className="
              border-t
              border-[#E8DDD8]
              pt-10
            "
          >
            <ContactInfo />
          </div>



          {/* HOURS */}
          <div
            className="
              border-t
              border-[#E8DDD8]
              pt-10
            "
          >
            <ContactHours />
          </div>



          {/* FORM */}
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

              <h2
                className="
                  font-serif
                  text-3xl
                  text-[#3B2A26]
                "
              >
                Send A Message
              </h2>


              <p
                className="
                  mt-4
                  leading-relaxed
                  text-[#6F5A50]
                "
              >
                We typically respond within a few hours during
                normal business hours.
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
