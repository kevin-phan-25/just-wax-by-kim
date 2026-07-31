/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Updates:
 * • Removed width restrictions
 * • Centered Contact title + description
 * • 5-column editorial layout
 * • Reduced empty side cells
 * • Left aligned center content cells
 * • Preserved luxury spacing
 *
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
        w-full
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
        "
      />


      {/* Navbar Clearance */}
      <div className="h-[216px]" />


      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          md:px-10
          lg:px-16
          pb-32
        "
      >


        {/* HEADER */}
        <header
          className="
            w-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            mx-auto
            mb-20
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
              w-full
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
              text-center
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
              w-full
              max-w-none
              text-lg
              leading-relaxed
              text-[#8C7468]
              text-center
            "
          >
            Whether you're preparing for your first appointment
            or simply have a question, we're here to make every
            interaction feel warm, welcoming, and beautifully personal.
          </p>

        </header>



        {/* 5 COLUMN EDITORIAL CONTACT GRID */}
        <div
          className="
            grid
            w-full

            grid-cols-1

            lg:grid-cols-[0.25fr_1fr_1fr_1fr_0.25fr]

            gap-12
            lg:gap-10

            items-start
          "
        >


          {/* EMPTY CELL 1 */}
          <div className="hidden lg:block" />



          {/* CELL 2 - CONTACT INFO */}
          <div
            className="
              border-t
              border-[#E8DDD8]

              pt-10

              flex
              flex-col
              items-start

              text-left
            "
          >
            <ContactInfo />
          </div>




          {/* CELL 3 - FORM */}
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
                text-center
                leading-relaxed
                text-[#6F5A50]
              "
            >
              We typically respond within a few hours during
              normal business hours.
            </p>


            <div className="mt-10 w-full">
              <ContactForm />
            </div>

          </div>





          {/* CELL 4 - HOURS */}
          <div
            className="
              border-t
              border-[#E8DDD8]

              pt-10

              flex
              flex-col
              items-start

              text-left
            "
          >
            <ContactHours />
          </div>




          {/* EMPTY CELL 5 */}
          <div className="hidden lg:block" />


        </div>

      </div>



      {/* Divider */}
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
