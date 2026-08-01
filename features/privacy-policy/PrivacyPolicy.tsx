/**
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 *
 * Updates:
 * • Improved editorial spacing
 * • Added paragraph separation
 * • Removed restrictive text layout
 * • Better readability on mobile/tablet/desktop
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

          lg:grid-cols-[0.75in_minmax(0,900px)_0.75in]

          px-4
          md:px-6
        "
      >


        {/* LEFT SPACER */}
        <div />


        {/* CENTER CONTENT */}
        <main
          className="
            w-full
          "
        >


          {/* PAGE HEADER */}

          <header
            className="
              text-center

              mb-20

              md:mb-24
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
                mt-10

                mx-auto

                max-w-3xl

                text-base
                md:text-lg

                leading-relaxed

                text-[#8C7468]
              "
            >
              Your privacy matters. This policy explains how
              Just Wax by Kim collects, uses, and protects
              your personal information.
            </p>


          </header>




          {/* POLICY SECTIONS */}

          <div
            className="
              flex
              flex-col

              gap-20
              md:gap-24
            "
          >

            {privacyPolicySections.map(
              (section) => (

                <article
                  key={section.title}
                  className="
                    w-full
                  "
                >

                  {/* TITLE */}

                  <h2
                    className="
                      mb-8

                      font-serif

                      text-2xl
                      md:text-3xl

                      text-[#3B2A26]
                    "
                  >
                    {section.title}
                  </h2>



                  {/* PARAGRAPHS */}

                  <div
                    className="
                      max-w-3xl

                      space-y-8
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

                            tracking-[0.01em]

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


        </main>


        {/* RIGHT SPACER */}
        <div />


      </div>


    </section>
  );
}
