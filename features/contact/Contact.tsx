/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Changes:
 * • Matches Gallery / FAQ / Testimonials spacing system
 * • Added internal navbar clearance
 * • Removed width restrictions
 * • Centered all contact columns
 * • Contact Form moved to center column
 * • Preserved luxury editorial layout
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
        w-full
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
        pt-[216px]
        pb-32
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,200,188,0.30),transparent_65%)]
        "
      />



      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          text-center
        "
      >



        {/* HEADER */}
        <header
          className="
            w-full
            mb-16
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
              mt-8
              text-lg
              leading-relaxed
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
            w-full
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
              flex
              flex-col
              items-center
              justify-start
              text-center
            "
          >

            <ContactInfo />

          </div>







          {/* CONTACT HOURS */}
          <div
            className="
              border-t
              border-[#E8DDD8]
              pt-10
              flex
              flex-col
              items-center
              justify-start
              text-center
            "
          >

            <ContactHours />

          </div>







          {/* CONTACT FORM */}
          <div
            className="
              border-t
              border-[#E8DDD8]
              pt-10
              flex
              flex-col
              items-center
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


            <div
              className="
                mt-10
                w-full
              "
            >

              <ContactForm />

            </div>


          </div>



        </div>



      </div>





      {/* Bottom Divider */}
      <div
        aria-hidden
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-[#E8DDD8]
        "
      />


    </section>
  );
}
