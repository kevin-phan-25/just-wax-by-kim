/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Updated:
 * • Matched ServicePricingSection spacing system
 * • Added navbar transition spacer
 * • Removed width restrictions
 * • Preserved centered typography
 * • Full-width contact presentation
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



  {/* Navbar Transition Spacer */}

  <div
    className="
      h-[216px]
    "
  />



  {/* Content */}

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
          mt-6
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
