/**
 *
 * ---
 *
 * File:
 * features/contact/Contact.tsx
 *
 * Description:
 * Standalone luxury contact presentation.
 *
 * Updates:
 *
 * - Full width editorial layout
 * - Removed divider accents
 * - Reduced outer spacer cells
 * - Reduced Contact Info column width
 * - Centered header content
 * - Preserved luxury spacing
 *
 * ---
 *
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
        bg-[#FBF7F4]
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


      {/* Navbar Transition Spacer */}
      <div className="h-[216px]" />


      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-6
          lg:px-10
          xl:px-16
          pb-32
        "
      >

        {/* HEADER */}
        <header
          className="
            w-full
            mb-20
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
              w-full
              text-center
              font-serif
              text-4xl
              md:text-6xl
              leading-tight
              text-[#3B2A26]
            "
          >
            We'd Love To Hear From You
          </h1>


          <p
            className="
              mt-8
              w-full
              text-center
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


        {/* FIVE CELL EDITORIAL GRID */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            lg:grid-cols-[0.25fr_0.75fr_1fr_1fr_0.25fr]
            gap-8
            xl:gap-10
            items-start
            w-full
          "
        >

          {/* CELL 1 */}
          <div
            className="
              hidden
              lg:block
            "
          />


          {/* CONTACT INFORMATION */}
          <div
            className="
              pt-10
              flex
              flex-col
              items-start
              text-left
            "
          >
            <ContactInfo />
          </div>


          {/* CONTACT FORM */}
          <div
            className="
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


          {/* CONTACT HOURS */}
          <div
            className="
              pt-10
              flex
              flex-col
              items-start
              text-left
            "
          >
            <ContactHours />
          </div>


          {/* CELL 5 */}
          <div
            className="
              hidden
              lg:block
            "
          />

        </div>

      </div>

    </section>
  );
}
