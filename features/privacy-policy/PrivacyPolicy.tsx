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
 * • Refined editorial spacing
 * • Improved legal readability
 * • Reduced excessive header spacing
 * • Enhanced luxury typography hierarchy
 * • Preserved mobile / iPad / desktop responsiveness
 * • Removed unnecessary decorative elements
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

          bg-[radial-gradient(ellipse_at_top,rgba(232,200,188,0.18),transparent_60%)]
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
            mx-auto

            flex
            max-w-5xl
            flex-col
            items-center
            text-center

            mb-12
            sm:mb-16
            md:mb-20
          "
        >

          <p
            className="
              uppercase

              tracking-[0.4em]

              text-[11px]
              sm:text-xs

              text-[#8C5A6B]
            "
          >
            Legal Information
          </p>



          <h1
            className="
              mt-5

              font-serif

              text-4xl
              sm:text-5xl
              md:text-6xl

              leading-[1.05]

              tracking-[-0.04em]

              text-[#3B2A26]
            "
          >
            Privacy Policy
          </h1>



          <p
            className="
              mt-5

              max-w-3xl

              text-sm
              sm:text-base
              md:text-lg

              leading-relaxed

              text-[#8C7468]
            "
          >
            Your privacy matters. This policy explains how Just Wax by Kim
            collects, uses, and protects your personal information.
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

              gap-12
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

                    tracking-[-0.025em]

                    text-[#3B2A26]
                  "
                >
                  {section.title}
                </h2>




                <div
                  className="
                    mt-5
                    sm:mt-7

                    space-y-5
                    sm:space-y-6
                  "
                >

                  {section.content.map((paragraph) => (

                    <p
                      key={paragraph}

                      className="
                        text-sm
                        sm:text-base
                        md:text-lg

                        leading-[1.9]

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
