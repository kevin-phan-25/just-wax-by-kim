/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Responsive Update:
 * • Five-cell editorial layout
 * • Empty side columns for luxury spacing
 * • Responsive navbar clearance
 * • Centered contact presentation
 * • Contact form centered
 * • Preserved boutique editorial aesthetic
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
        bg-[#FCF8F3]
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



      {/* Responsive Navbar Clearance */}

      <div
        className="
          nav-clearance
        "
      />




      {/* CONTENT */}

      <div

        className="
          relative

          z-10

          w-full

          px-5
          md:px-8
          xl:px-16

          pb-32

        "

      >



        {/* HEADER */}

        <header

          className="
            mx-auto

            max-w-5xl

            mb-16

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

              sm:text-5xl

              xl:text-6xl

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

              text-base

              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "

          >

            Whether you're preparing for your first appointment
            or simply have a question, we're here to make every
            interaction feel warm, welcoming, and beautifully personal.

          </p>


        </header>







        {/* FIVE CELL CONTACT GRID */}

        <div

          className="

            mt-20

            grid


            grid-cols-1

            lg:grid-cols-3

            xl:grid-cols-5


            gap-12

            xl:gap-10


            items-start

          "

        >



          {/* EMPTY LEFT CELL */}

          <div
            className="
              hidden
              xl:block
            "
          />






          {/* CONTACT INFORMATION */}

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

            <ContactInfo />

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

                max-w-sm

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








          {/* HOURS */}

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

            <ContactHours />

          </div>








          {/* EMPTY RIGHT CELL */}

          <div

            className="
              hidden

              xl:block

            "

          />



        </div>


      </div>







      {/* Bottom Divider */}

      <div

        aria-hidden

        className="
          absolute

          bottom-0

          left-1/2

          -translate-x-1/2


          w-[min(92%,1200px)]


          h-px


          bg-[#E8DDD8]

        "

      />


    </section>

  );

}
