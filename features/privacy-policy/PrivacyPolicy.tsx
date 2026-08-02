/**
 *
 * ---
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy editorial page.
 *
 * Updates:
 * • Removed navbar clearance responsibility
 * • Matches FAQ / Gallery / Policies architecture
 * • Unified header typography
 * • Responsive phone / iPad / desktop readability
 * • Reduced content width for editorial reading
 * • Removed excessive whitespace
 * • Matches global layout system
 *
 * ---
 *
 */

import { privacyPolicySections } from "./privacy-policy.constants";

export default function PrivacyPolicy() {
  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-[#FBF7F4]

        pb-20

        sm:pb-24

        md:pb-32
      "
    >

      {/* Ambient Background */}
      <div
        aria-hidden
        className="
          pointer-events-none

          absolute

          inset-0

          bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.22),transparent_55%)]
        "
      />



      {/* CONTENT */}
      <div
        className="
          relative

          z-10

          w-full

          px-5

          sm:px-8

          md:px-10

          lg:px-16

          xl:px-24
        "
      >



        {/* HEADER */}
        <header
          className="
            flex

            flex-col

            items-center

            text-center

            mb-16

            md:mb-24
          "
        >

          <p
            className="
              uppercase

              tracking-[0.35em]

              text-xs

              sm:text-sm

              text-[#8C5A6B]
            "
          >
            Legal Information
          </p>



          <h1
            className="
              mt-6

              max-w-5xl

              font-serif

              text-4xl

              sm:text-5xl

              md:text-6xl

              leading-[1.1]

              tracking-[-0.035em]

              text-[#3B2A26]
            "
          >
            Privacy Policy
          </h1>



          <p
            className="
              mt-6

              max-w-3xl

              text-base

              sm:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            Your privacy matters. This policy explains how Just Wax by Kim collects, uses, and protects your personal information.
          </p>


        </header>





        {/* POLICY CONTENT */}
        <main
          className="
            mx-auto

            w-full

            max-w-4xl
          "
        >

          <div
            className="
              flex

              flex-col

              gap-14

              sm:gap-16

              md:gap-20
            "
          >

            {privacyPolicySections.map((section) => (

              <article
                key={section.title}

                className="
                  w-full
                "
              >


                <h2
                  className="
                    font-serif

                    text-2xl

                    sm:text-3xl

                    md:text-4xl

                    leading-tight

                    tracking-[-0.02em]

                    text-[#3B2A26]
                  "
                >
                  {section.title}
                </h2>





                <div
                  className="
                    mt-6

                    sm:mt-8

                    space-y-5

                    sm:space-y-7
                  "
                >

                  {section.content.map((paragraph) => (

                    <p
                      key={paragraph}

                      className="
                        text-sm

                        sm:text-base

                        lg:text-lg

                        leading-relaxed

                        text-[#6F5A50]
                      "
                    >
                      {paragraph}
                    </p>

                  ))}


                </div>


              </article>

            ))}


          </div>


        </main>


      </div>


    </section>
  );
}
