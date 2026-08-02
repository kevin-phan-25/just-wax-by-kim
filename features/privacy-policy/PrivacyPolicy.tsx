/**
 * ---
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy editorial page.
 *
 * Updates:
 * • Mobile-first editorial layout
 * • Reduced excessive whitespace
 * • Improved phone readability
 * • Responsive typography scaling
 * • Balanced section spacing
 * • Preserved desktop luxury presentation
 *
 * ---
 */

import { privacyPolicySections } from "./privacy-policy.constants";


export default function PrivacyPolicy() {

  return (

    <section
      className="
        w-full
        bg-[#FBF7F4]
      "
    >


      {/* HEADER */}
      <header
        className="
          w-full

          px-5
          sm:px-8
          md:px-10
          lg:px-16

          pt-10
          md:pt-16

          text-center

          mb-14
          md:mb-20
          lg:mb-24
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
          Studio Exploration
        </p>



        <h1
          className="
            mt-5

            font-serif

            text-4xl
            sm:text-5xl
            lg:text-6xl

            leading-tight

            tracking-[-0.03em]

            text-[#3B2A26]
          "
        >
          Privacy Policy
        </h1>



        <p
          className="
            mt-6

            mx-auto

            max-w-4xl

            text-sm
            sm:text-base
            md:text-lg

            leading-7
            md:leading-relaxed

            text-[#8C7468]
          "
        >
          Your privacy matters. This policy explains how Just Wax by Kim collects, uses, and protects your personal information.
        </p>


      </header>






      {/* CONTENT */}
      <div
        className="
          w-full

          px-5
          sm:px-8
          md:px-10
          lg:px-16

          pb-24
          md:pb-32
        "
      >


        <main
          className="
            mx-auto

            w-full

            max-w-5xl
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


            {privacyPolicySections.map((section)=>(


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

                    text-left

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
                    sm:space-y-7
                  "
                >

                  {section.content.map((paragraph)=>(


                    <p
                      key={paragraph}

                      className="
                        text-sm
                        sm:text-base
                        md:text-lg

                        leading-7
                        md:leading-[1.8]

                        text-left

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
