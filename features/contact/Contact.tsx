/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury contact section.
 *
 * Changes:
 * - July 28, 2026
 *   - Removed duplicate form headings
 *   - Removed extra Studio Hours duplication
 *   - Rebalanced header alignment
 *   - Improved card content spacing
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
            max-w-3xl
            mx-auto
            text-center
            md:translate-x-10
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
            grid
            gap-8
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
              bg-white/70
              p-8
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
              bg-white/70
              p-8
              shadow-luxury
            "

          >

            <ContactForm />


          </div>



        </div>


      </div>


    </section>

  );

}
