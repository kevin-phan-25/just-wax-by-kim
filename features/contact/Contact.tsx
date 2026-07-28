/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury contact section.
 *
 * Changes:
 * - July 28, 2026
 *   - Centered contact heading
 *   - Removed duplicate Studio Hours
 *   - Balanced card layout
 *   - Improved luxury spacing
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



        {/* Section Header */}

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







        {/* Contact Layout */}

        <div

          className="
            mt-14
            grid
            gap-10
            md:grid-cols-2
            items-start
          "

        >




          {/* Information Card */}

          <div

            className="
              rounded-3xl
              border
              border-brand-border
              bg-white/80
              p-10
              shadow-luxury
              text-center
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









          {/* Form Card */}

          <div

            className="
              rounded-3xl
              border
              border-brand-border
              bg-white/80
              p-10
              shadow-luxury
            "

          >

            <h3

              className="
                mb-8
                text-center
                font-serif
                text-2xl
                text-brand-espresso
              "

            >

              Send A Message

            </h3>


            <ContactForm />


          </div>





        </div>


      </div>


    </section>

  );

}
