/**
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 *
 * Updates:
 * • Removed divider accents
 * • Added 3-column luxury layout
 * • Centered content area
 * • Improved paragraph spacing
 * • Responsive phone / tablet / desktop layout
 */

import { privacyPolicySections } from "./privacy-policy.constants";

export default function PrivacyPolicy() {
  return (
    <section
      className="
        w-full
        bg-[#FCF8F3]
      "
    >

      {/* Navbar clearance */}
      <div className="h-[190px]" />


      <div
        className="
          grid

          grid-cols-[0.75in_1fr_0.75in]

          lg:grid-cols-[0.75in_minmax(0,850px)_0.75in]

          px-4
          md:px-6
        "
      >


        {/* LEFT EMPTY CELL */}
        <div />


        {/* CENTER CONTENT CELL */}
        <div
          className="
            w-full
          "
        >


          {/* HEADER */}

          <header
            className="
              text-center

              mb-16

              md:mb-20
            "
          >

            <p
              className="
                uppercase
                tracking-[0.35em]

                text-xs
                md:text-sm

                text-[#8C5A6B]
              "
            >
              Studio Exploration
            </p>


            <h1
              className="
                mt-6

                font-serif

                text-4xl
                md:text-5xl
                lg:text-6xl

                text-[#3B2A26]
              "
            >
              Privacy Policy
            </h1>


            <p
              className="
                mt-8

                max-w-2xl

                mx-auto

                text-base
                md:text-lg

                leading-loose

                text-[#8C7468]
              "
            >
              Your privacy matters. Learn how Just Wax by Kim
              collects, protects, and uses your personal
              information.
            </p>


          </header>



          {/* POLICY CONTENT */}

          <div
            className="
              space-y-16
            "
          >

            {privacyPolicySections.map(
              (section) => (

                <article
                  key={section.title}
                  className="
                    space-y-6
                  "
                >

                  <h2
                    className="
                      font-serif

                      text-2xl
                      md:text-3xl

                      text-[#3B2A26]
                    "
                  >
                    {section.title}
                  </h2>


                  <div
                    className="
                      space-y-6
                    "
                  >

                    {section.content.map(
                      (paragraph) => (

                        <p
                          key={paragraph}
                          className="
                            text-base
                            md:text-lg

                            leading-[2]

                            text-[#6F5A50]
                          "
                        >
                          {paragraph}
                        </p>

                      )
                    )}

                  </div>


                </article>

              )
            )}

          </div>


        </div>



        {/* RIGHT EMPTY CELL */}
        <div />


      </div>


    </section>
  );
}
