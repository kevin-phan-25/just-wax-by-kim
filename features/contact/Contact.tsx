/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury contact section.
 *
 * Changes:
 * - July 28, 2026
 *   - Centered section heading
 *   - Balanced two-column luxury cards
 *   - Increased card internal spacing
 *   - Improved content breathing room
 *   - Added form introduction text
 *   - Removed duplicate Studio Hours
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
        bg-brand-cream
        border-t
        border-brand-border/50
        px-6
        py-20
        md:py-28
      "

    >


      <div

        className="
          mx-auto
          max-w-6xl
        "

      >




        {/* Header */}

        <div

          className="
            mx-auto
            max-w-3xl
            text-center
          "

        >

          <p

            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-brand-dusty-pink
            "

          >

            Get In Touch

          </p>



          <h2

            className="
              mt-5
              font-serif
              text-4xl
              md:text-5xl
              text-brand-espresso
            "

          >

            We Would Love To Hear From You

          </h2>


        </div>









        {/* Contact Cards */}

        <div

          className="
            mt-14
            mx-auto
            max-w-5xl
            grid
            gap-10
            md:grid-cols-2
            items-start
          "

        >





          {/* Contact Information */}

          <div

            className="
              rounded-3xl
              border
              border-brand-border
              bg-white/80
              px-12
              py-10
              shadow-luxury
            "

          >


            <ContactInfo />



            <div

              className="
                mt-10
                border-t
                border-brand-border
                pt-8
              "

            >

              <ContactHours />

            </div>



          </div>









          {/* Contact Form */}

          <div

            className="
              rounded-3xl
              border
              border-brand-border
              bg-white/80
              px-12
              py-10
              shadow-luxury
            "

          >



            <div

              className="
                mb-8
                text-center
                px-2
              "

            >


              <h3

                className="
                  font-serif
                  text-2xl
                  text-brand-espresso
                "

              >

                Send A Message

              </h3>




              <p

                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-brand-taupe
                "

              >

                Don't hesitate to ask questions.
                Kim is here to help.

              </p>


            </div>





            <ContactForm />



          </div>





        </div>




      </div>



    </section>

  );

}
