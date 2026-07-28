/**
 * -----------------------------------------------------------------------------
 * File: Contact.tsx
 *
 * Description:
 * Luxury contact section.
 *
 * Changes:
 * - July 28, 2026
 *   - Fixed center alignment
 *   - Added form heading
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


        {/* Center Header */}

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



          <p

            className="
              mx-auto
              mt-5
              max-w-xl
              text-center
              text-brand-taupe
              leading-relaxed
            "

          >

            Have questions about services, appointments,
            or your first waxing experience?
            Kim is here to help.

          </p>


        </div>





        {/* Cards */}

        <div

          className="
            mt-14
            grid
            gap-8
            md:grid-cols-2
            items-start
          "

        >



          {/* Left Card */}

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






          {/* Right Card */}

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

            <div

              className="
                mb-6
              "

            >

              <h3

                className="
                  font-serif
                  text-2xl
                  text-brand-espresso
                "

              >

                Have Questions?

              </h3>


              <p

                className="
                  mt-2
                  text-sm
                  text-brand-taupe
                "

              >

                Send Kim a message and she will get
                back to you as soon as possible.

              </p>


            </div>


            <ContactForm />


          </div>



        </div>


      </div>


    </section>

  );

}
