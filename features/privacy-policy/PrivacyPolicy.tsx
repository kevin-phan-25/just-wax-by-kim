/**
 *
 * ---
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 *
 * Updates:
 * • Centered editorial layout
 * • Removed restrictive grid columns
 * • Added luxury section cards
 * • Improved readability
 * • Responsive mobile/tablet/desktop spacing
 * • Unified Just Wax by Kim theme
 *
 * ---
 *
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

      {/* Navbar Clearance */}
      <div
        className="
          h-[168px]
          md:h-[190px]
        "
      />


      {/* PAGE CONTAINER */}
      <main
        className="
          mx-auto
          w-full
          max-w-5xl
          px-6
          md:px-10
          pb-24
        "
      >


        {/* HEADER */}
        <header
          className="
            mx-auto
            max-w-3xl
            text-center
            mb-20
            md:mb-28
          "
        >

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-sm
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
              leading-tight
              text-[#3B2A26]
            "
          >
            Privacy Policy
          </h1>


          <p
            className="
              mt-8
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



        {/* POLICY CONTENT */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:gap-10
          "
        >

          {privacyPolicySections.map((section) => (

            <article
              key={section.title}
              className="
                rounded-[32px]
                bg-white/40
                px-6
                py-8
                md:px-10
                md:py-10
                shadow-[0_10px_40px_rgba(59,42,38,0.04)]
              "
            >


              {/* TITLE */}
              <h2
                className="
                  text-center
                  font-serif
                  text-2xl
                  md:text-3xl
                  text-[#3B2A26]
                "
              >
                {section.title}
              </h2>



              {/* CONTENT */}
              <div
                className="
                  mx-auto
                  mt-8
                  max-w-3xl
                  space-y-6
                "
              >

                {section.content.map((paragraph) => (

                  <p
                    key={paragraph}
                    className="
                      text-base
                      md:text-lg
                      leading-[1.9]
                      text-center
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


    </section>
  );
}
